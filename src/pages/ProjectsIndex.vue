<template>
  <q-page>
    <q-list>
      <q-item-label header class="text-uppercase">
        Projects
      </q-item-label>
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
          <div class="row">
            <q-btn flat icon="edit" color="primary" dense :disable="!project.permissions.update" :disabled="!project.permissions.update" @click.stop="editProject(project.slug)"  />
            <q-btn flat icon="delete" color="negative" dense :disable="!project.permissions.delete" :disabled="!project.permissions.delete" @click.stop="deleteProject(project.slug)" />
          </div>
        </q-item-section>
      </q-item>
    </q-list>

    <div class="row justify-center q-my-md">
      <q-pagination
        v-model="currentPage"
        :max="lastPage"
        :direction-links="true"
        @input="getProjects"
      >
      </q-pagination>
    </div>

  </q-page>
</template>

<script>
export default {
  name: 'ProjectsIndex',
  data () {
    return {
      projects: [],
      currentPage: 1,
      lastPage: 1
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
    getProjects(page = 1) {
      this.$axios.get('/projects', { params: { page: page } })
        .then(res => {
          const {
            data,
            meta
          } = res.data
          this.projects = data
          this.currentPage = meta.current_page
          this.lastPage = meta.last_page
        })
        .catch(err => console.log(err.message))
    }
  },
  created() {
    this.getProjects(this.currentPage)
  }
}
</script>
