<template>
  <figure>
    <e-charts
      style="height: 300px;"
      :options="chartData"
      ref="chart"
      @click="handleClick" />
  </figure>
</template>

<script>
import slugify from 'src/utils/slugify'

export default {
  name: 'PipByStatus',
  computed: {
    chartData() {
      return this.$store.state.chart.pip_by_project_status
    }
  },
  methods: {
    handleClick(e) {
      this.$router.push(`/fs_statuses/${slugify(e.name)}`, () => console.log('that went well'))
    }
  },
  mounted() {
    const chart = this.$refs.chart
    chart.showLoading()
    this.$store.dispatch('chart/getPipByProjectStatus')
      .then(() => chart.hideLoading())
  }
}
</script>
