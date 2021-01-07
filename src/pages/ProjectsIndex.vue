<template>
  <q-page>
    <template v-if="loading">
      <div class="q-pa-md">Loading...</div>
    </template>
    <template v-else>
      <q-list>
        <div class="row q-pa-md items-center">
          <div class="text-h5 text-weight-bolder text-primary">
            Projects
          </div>
          <q-space />
          <!-- TODO: Hide this button if user has no permission to create project -->
          <q-btn color="secondary" label="New Project" no-caps unelevated to="/projects/create" />
        </div>
        <div class="row q-pa-md">
          <q-input
            outlined
            v-model="query"
            class="col"
            placeholder="Search for projects..."
            @keyup.enter="searchProjects"
            hint="Press Enter to search">
            <template v-slot:append>
              <q-icon name="send" @click="searchProjects" class="cursor-pointer" color="primary" />
            </template>
          </q-input>
        </div>
        <q-item v-for="project in projects" :key="project.id" :clickable="project.permissions.view" @click.stop="viewProject(project.slug)">
          <q-item-section avatar>
            <q-avatar class="bg-primary text-white">
              {{project.title && project.title.charAt(0)}}
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-uppercase">{{ project.title }}</q-item-label>
            <q-item-label caption :lines="2">{{ project.description }}</q-item-label>
          </q-item-section>
          <q-item-section side>
          </q-item-section>
        </q-item>
      </q-list>

      <div class="row justify-center q-my-md" v-if="projects.length > 0">
        <q-pagination
          v-model="currentPage"
          :max-pages="10"
          :max="lastPage"
          :direction-links="true"
          @input="getProjects"
        >
        </q-pagination>
      </div>
      <div class="row q-pa-md justify-center" v-else>
        No search results for "<span class="text-weight-bold">{{ query }}</span>".
      </div>
    </template>

  </q-page>
</template>

<script>
import { ProjectAPI } from '../api/projects'

export default {
  name: 'ProjectsIndex',
  data () {
    return {
      projects: [],
      query: null,
      currentPage: 1,
      lastPage: 1,
      loading: false
    }
  },
  methods: {
    searchProjects() {
      this.getProjects(this.page, this.query)
    },
    viewProject(slug) {
      this.$router.push(`/projects/${slug}`)
    },
    editProject(slug) {
      this.$router.push(`/projects/${slug}/edit`)
    },
    deleteProject(slug) {
      this.$q.dialog({
        title: 'Are you sure you want to delete this project?',
        cancel: true
      }).onOk(() => {
        // TODO: Implement deletion
      })
    },
    getProjects(page = 1) {
      this.loading = true
      ProjectAPI
        .index({ params: { page: page, query: this.query } })
        .then(res => {
          console.log(res)
          const {
            data,
            meta
          } = res
          this.projects = data
          this.currentPage = meta.current_page
          this.lastPage = meta.last_page
        })
        .catch(err => console.log(err.message))
        .finally(() => (this.loading = false))
    }
  },
  created() {
    this.getProjects(this.currentPage)
    ProjectAPI.index()
      .then(res => console.log(res))
  }
}
</script>
