<template>
  <q-page>
    <projects-list :projects="projects" :current-page="currentPage" :last-page="lastPage" :loading="loading"></projects-list>
  </q-page>
</template>

<script>
import { axiosInstance } from 'boot/axios'
import ProjectsList from 'components/ProjectsList'

export default {
  name: 'ProjectsRegions',
  components: { ProjectsList },
  data() {
    return {
      projects: [],
      currentPage: 0,
      lastPage: 0,
      loading: false
    }
  },
  mounted() {
    this.loading = true
    const id = this.$route.params.id
    axiosInstance.get(`/regions/${id}/projects`)
      .then(res => {
        console.log(res.data.data)
        const {
          data,
          pagination
        } = res.data
        this.projects = data
        this.currentPage = pagination.current_page
        this.lastPage = pagination.last_page
      })
      .finally(() => (this.loading = false))
  }
}
</script>
