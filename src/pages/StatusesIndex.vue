<template>
  <q-page padding>
    <q-list bordered separator>
      <q-item-label header>Project Status</q-item-label>

      <q-item v-for="(status, id) in statuses" :key="id" @click="goTo(status.slug)" clickable class="cursor-pointer">
        <q-item-section avatar>
          <q-avatar class="bg-primary text-white">
            {{ status.name && status.name.charAt(0) }}
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ status.name }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { axiosInstance } from 'boot/axios'

export default {
  name: 'PageFsStatuses',
  data() {
    return {
      statuses: []
    }
  },
  methods: {
    goTo(slug) {
      this.$router.push('/project_statuses/' + slug)
    }
  },
  mounted() {
    axiosInstance.get('/project_statuses')
      .then(res => {
        const { data } = res.data

        this.statuses = data
      })
  }
}
</script>
