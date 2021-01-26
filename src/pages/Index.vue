<template>
  <q-page padding>
    <div class="row q-col-gutter-md">
      <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
        <div class="q-pb-md">
          <q-banner class="bg-primary text-white">
            <template v-slot:avatar>
              <q-icon name="warning"></q-icon>
            </template>
            Note: If the data is not loading, please click in the link below to allow access to the backend.
            <template v-slot:action>
              <q-btn type="a" href="https://ipms-v2.dapmsipd.org/" label="Go" flat></q-btn>
            </template>
          </q-banner>
        </div>
      </div>
    </div>
    <div class="row">
      <e-charts style="height: 300px;" :options="barOptions"></e-charts>
      <e-charts style="height: 300px;" :options="barOptions2"></e-charts>
      <e-charts style="height: 300px;" :options="barOptions3"></e-charts>
      <e-charts style="height: 300px;" :options="barOptions4"></e-charts>
      <e-charts style="height: 300px;" :options="barOptions5"></e-charts>
      <e-charts style="height: 300px;" :options="barOptions6"></e-charts>
      <e-charts style="height: 300px;" :options="barOptions7"></e-charts>
      <bar-chart></bar-chart>
    </div>
  </q-page>
</template>

<script>
import BarChart from 'components/charts/BarChart'

export default {
  name: 'PageIndex',
  components: { BarChart },
  data() {
    return {
      chart: null,
      loading: true,
      barOptions: {
        renderer: 'svg',
        title: {
          text: ''
        },
        tooltip: {
          show: true
        },
        xAxis: {
          type: 'category',
          data: [],
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          show: false
        },
        series: [{
          data: [],
          type: 'bar'
        }]
      },
      barOptions2: {
        renderer: 'svg',
        title: {
          text: ''
        },
        tooltip: {
          show: true
        },
        xAxis: {
          type: 'category',
          data: [],
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          show: false
        },
        series: [{
          data: [],
          type: 'bar'
        }]
      },
      barOptions3: {
        renderer: 'svg',
        title: {
          text: ''
        },
        tooltip: {
          show: true
        },
        xAxis: {
          type: 'category',
          data: [],
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            rotate: 90
          }
        },
        yAxis: {
          type: 'value',
          show: false
        },
        series: [{
          data: [],
          type: 'bar'
        }]
      },
      barOptions4: {
        renderer: 'svg',
        title: {
          text: ''
        },
        tooltip: {
          show: true
        },
        xAxis: {
          type: 'category',
          data: [],
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            rotate: 90
          }
        },
        yAxis: {
          type: 'value',
          show: false
        },
        series: [{
          data: [],
          type: 'bar'
        }]
      },
      barOptions5: {
        renderer: 'svg',
        title: {
          text: ''
        },
        tooltip: {
          show: true
        },
        xAxis: {
          type: 'category',
          data: [],
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            rotate: 90
          }
        },
        yAxis: {
          type: 'value',
          show: false
        },
        series: [{
          data: [],
          type: 'bar'
        }]
      },
      barOptions6: {
        renderer: 'svg',
        title: {
          text: ''
        },
        tooltip: {
          show: true
        },
        xAxis: {
          type: 'category',
          data: [],
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            rotate: 90
          }
        },
        yAxis: {
          type: 'value',
          show: false
        },
        series: [{
          data: [],
          type: 'bar'
        }]
      },
      barOptions7: {
        renderer: 'svg',
        title: {
          text: ''
        },
        legend: {
          top: '5%',
          left: 'right'
        },
        tooltip: {
          show: true
        },
        xAxis: {
          show: false
        },
        yAxis: {
          type: 'value',
          show: false
        },
        series: [{
          data: [],
          type: 'pie',
          radius: ['40%', '70%'],
          labelLine: {
            show: true
          }
        }]
      }
    }
  },
  mounted() {
    this.$axios.get('/chart/spatial_coverages')
      .then(res => {
        this.barOptions.title.text = res.data.title
        this.barOptions.xAxis.data = res.data.categories
        this.barOptions.series[0].data = res.data.data
      })
    this.$axios.get('/chart/pap_types')
      .then(res => {
        this.barOptions2.title.text = res.data.title
        this.barOptions2.xAxis.data = res.data.categories
        this.barOptions2.series[0].data = res.data.data
      })
    this.$axios.get('/chart/regions')
      .then(res => {
        this.barOptions3.title.text = res.data.title
        this.barOptions3.xAxis.data = res.data.categories
        this.barOptions3.series[0].data = res.data.data
      })
    this.$axios.get('/chart/implementation_start')
      .then(res => {
        this.barOptions4.title.text = res.data.title
        this.barOptions4.xAxis.data = res.data.categories
        this.barOptions4.series[0].data = res.data.data
      })
    this.$axios.get('/chart/main_funding_source')
      .then(res => {
        this.barOptions5.title.text = res.data.title
        this.barOptions5.xAxis.data = res.data.categories
        this.barOptions5.series[0].data = res.data.data
      })
    this.$axios.get('/chart/office')
      .then(res => {
        this.barOptions6.title.text = res.data.title
        this.barOptions6.xAxis.data = res.data.categories
        this.barOptions6.series[0].data = res.data.data
      })
    this.$axios.get('/chart/pip')
      .then(res => {
        this.barOptions7.title.text = res.data.title
        // this.barOptions7.xAxis.data = res.data.categories
        const data = []
        Object.keys(res.data.original).forEach(key => {
          data.push({
            name: key,
            value: res.data.original[key]
          })
        })
        this.barOptions7.series[0].data = data
      })
  }
}
</script>
