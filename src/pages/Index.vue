<template>
  <q-page padding>
    <div class="row q-col-gutter-md">
      <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
        <bar-chart />
      </div>
      <div class="col"></div>
    </div>
  </q-page>
</template>

<script>
import BarChart from 'components/charts/BarChart'

export default {
  name: 'PageIndex',
  components: { BarChart }
}
</script>
