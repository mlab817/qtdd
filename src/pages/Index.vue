<template>
  <q-page padding>
    <div class="col justify-center" style="height: 480px;">
      <e-charts
        :option="chartOptionsBar"
        :loading="loading"
        @ready="onReady"
        @click="onClick"></e-charts>
      <q-btn @click="doRandom" label="Randomize" />
    </div>
    <img
      alt="Quasar logo"
      src="../statics/undraw/undraw_detailed_analysis_xn7y.svg"
    >
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data() {
    return {
      loading: false,
      chartOptionsBar: {
        xAxis: {
          data: ['2017', '2018', '2019', '2020', '2021', '2022']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            type: 'bar',
            data: [63, 75, 24, 92, 10, 35]
          }
        ],
        title: {
          text: 'PIP 2017-2022',
          x: 'center',
          textStyle: {
            fontSize: 24
          }
        },
        tooltip: {}
      }
    }
  },
  methods: {
    doRandom() {
      const data = []
      for (let i = 0, min = 5, max = 99; i < 6; i++) {
        data.push(Math.floor(Math.random() * (max + 1 - min) + min))
      }
      this.chartOptionsBar.series[0].data = data
    },
    onReady(instance, ECharts) {
      console.log(instance, ECharts)
    },
    onClick(event, instance, ECharts) {
      console.log(arguments)
    }
  },
  created() {
    this.doRandom()
  }
}
</script>

<style scoped>
.echarts {
  width: 800px;
  height: 400px;
}
</style>
