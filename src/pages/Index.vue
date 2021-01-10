<template>
  <q-page padding>
    <div class="row q-col-gutter-md">
      <div class="col">
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
