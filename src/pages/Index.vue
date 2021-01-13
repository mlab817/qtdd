<template>
  <q-page padding>
    <div class="row q-col-gutter-md">
      <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
        <div class="q-py-md">
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
