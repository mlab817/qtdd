<template>
  <q-page padding>
    <div class="row q-col-gutter-md q-mt-md" v-if="showBanner">
      <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
        <div class="q-pb-md">
          <q-banner class="bg-primary text-white">
            <template v-slot:avatar>
              <q-icon name="warning"></q-icon>
            </template>
            Note: If the data is not loading, please click the link below to allow access to the backend.
            <template v-slot:action>
              <q-btn type="a" @click="showBanner = false" label="Dismiss" flat></q-btn>
              <q-btn type="a" href="https://ipms-v2.dapmsipd.org/" label="Go" flat></q-btn>
            </template>
          </q-banner>
        </div>
      </div>
    </div>
    <div class="row q-col-gutter-md">
      <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <pip-by-region></pip-by-region>
      </div>
      <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <pip-by-sdg></pip-by-sdg>
      </div>
      <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <pip-by-fs></pip-by-fs>
      </div>
      <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <pip-by-sc></pip-by-sc>
      </div>
      <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <pip-by-type></pip-by-type>
      </div>
      <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <pip-by-status></pip-by-status>
      </div>
    </div>
  </q-page>
</template>

<script>
import PipByRegion from 'components/charts/PipByRegion'
import PipBySdg from 'components/charts/PipBySdg'
import PipByFs from 'components/charts/PipByFs'
import PipBySc from 'components/charts/PipBySc'
import PipByType from 'components/charts/PipByPapType'
import PipByStatus from 'components/charts/PipByStatus'

export default {
  name: 'PageIndex',
  components: {
    PipByStatus,
    PipByType,
    PipBySc,
    PipByFs,
    PipBySdg,
    PipByRegion
  },
  data() {
    return {
      showBanner: true
    }
  },
  computed: {
    type: {
      get() {
        return this.$store.state.chart.type
      },
      set(val) {
        this.$store.dispatch('chart/setType', val)
      }
    }
  }
}
</script>
