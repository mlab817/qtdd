<template>
  <q-page padding>
    <projects-list
      :projects="projects"
      :last-page="lastPage"
      :current-page="currentPage"></projects-list>
  </q-page>
</template>

<script>
import { axiosInstance } from 'boot/axios'
import ProjectsList from 'components/ProjectsList'

export default {
  name: 'PageProjectStatuses',
  components: { ProjectsList },
  data() {
    return {
      status: '',
      projects: [],
      lastPage: null,
      currentPage: null
    }
  },
  mounted() {
    this.status = this.$route.params.id

    axiosInstance.get('/project_statuses/' + this.status + '/projects')
      .then(res => {
        this.projects = res.data.data
        this.lastPage = res.data.meta.last_page
        this.currentPage = res.data.meta.current_page
      })
  }
}
</script>
