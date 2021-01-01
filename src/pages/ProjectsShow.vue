<template>
  <q-page>
    {{project}}
  </q-page>
</template>

<script>
export default {
  name: 'ProjectsShow',
  data() {
    return {
      project: {}
    }
  },
  methods: {
    getProject(slug) {
      // TODO: implement slug fetch
    }
  },
  created() {
    const slug = this.$route.params.slug
    console.log(slug)
  }
}
</script>
