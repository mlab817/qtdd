<template>
  <q-page>
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
        <search-projects v-model="query" @input="searchProjects" />
      </div>
      <template v-if="loading">
        <div class="row items-center justify-center q-pa-md">
          <q-spinner color="primary"></q-spinner> Loading...
        </div>
      </template>
      <template v-else>
        <template v-if="projects.length > 0">
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
              <q-icon name="bookmark" color="grey-5" />
            </q-item-section>
          </q-item>
          <div class="row justify-center q-my-md">
            <q-pagination
              v-model="currentPage"
              :max-pages="10"
              :max="lastPage"
              :direction-links="true"
              @input="navigatePage"
            >
            </q-pagination>
          </div>
        </template>
        <div class="row q-pa-md justify-center" v-else>
          <template v-if="query">
            No search results for "<span class="text-weight-bold">{{ query }}</span>".
          </template>
          <template v-else>
            No projects found.
          </template>
        </div>
      </template>
    </q-list>

  </q-page>
</template>

<script>
import SearchProjects from 'components/SearchProjects'
import { ProjectAPI } from '../api/projects'

export default {
  name: 'ProjectsIndex',
  components: { SearchProjects },
  data () {
    return {
      projects: [],
      query: null,
      currentPage: 1,
      lastPage: 1,
      loading: false,
      limit: 10
    }
  },
  watch: {
    $route: function (to) {
      const params = to.query

      this.getProjects(params)
    }
  },
  methods: {
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
    navigatePage(e) {
      const query = this.$route.query
      this.$router.push({
        name: 'index-projects',
        query: {
          ...query,
          page: e
        }
      })
    },
    searchProjects() {
      const page = 1 // reset page to 1
      this.$router.push({
        name: 'index-projects',
        query: {
          query: this.query,
          page: page
        }
      })
    },
    getProjects(params) {
      this.loading = true
      ProjectAPI
        .index({ params: params })
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
    this.getProjects(null)
  }
}
</script>
