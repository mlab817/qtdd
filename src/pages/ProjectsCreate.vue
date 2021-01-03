<template>
  <q-page>
    <div>
      <q-splitter
        v-model="splitterModel"
      >

        <template v-slot:before>
          <q-tabs
            v-model="tab"
            vertical
            class="text-primary"
            switch-indicator
            active-bg-color="primary"
            active-color="white"
            indicator-color="primary"
            no-caps
            align="right"
            stretch
          >
            <q-tab name="basic_information" label="Basic Information" />
            <q-tab name="trip_information" label="TRIP Information" />
            <q-tab name="alignment" label="Strategic Alignment" />
            <q-tab name="financial_information" label="Financial Information" />
            <q-tab name="updates" label="Updates" />
          </q-tabs>
        </template>

        <template v-slot:after>
          <q-tab-panels
            v-model="tab"
            animated
            swipeable
            vertical
            transition-prev="jump-up"
            transition-next="jump-up"
          >
            <q-tab-panel name="basic_information">
              <div class="text-h4 q-mb-md">Basic Information</div>
              <q-separator />

              <form-label label="PAP Title" :required="true" />
              <custom-input v-model="project.title" placeholder="Insert PAP Title" />

              <form-label label="PAP Type" :required="true" />
              <q-select v-model="project.pap_type_id" placeholder="Choose PAP Type" outlined dense square />

              <form-label label="Description" :required="true" />
              <custom-input type="textarea" v-model="project.description" placeholder="Insert PAP description" />

              <form-label label="Expected Outputs" :required="true" />
              <custom-input type="textarea" v-model="project.expected_outputs" placeholder="Insert expected outputs/actual deliverables of the PAP" />

              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>

              <div class="row justify-end">
                <q-btn icon-right="arrow_right" label="Next" no-caps />
              </div>
            </q-tab-panel>

            <q-tab-panel name="trip_information">
              <div class="text-h4 q-mb-md">TRIP Information</div>
              <q-separator />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            </q-tab-panel>

            <q-tab-panel name="alignment">
              <div class="text-h4 q-mb-md">Strategic Alignment</div>
              <q-separator />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            </q-tab-panel>

            <q-tab-panel name="financial_information">
              <div class="text-h4 q-mb-md">Financial Information</div>
              <q-separator />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            </q-tab-panel>

            <q-tab-panel name="updates">
              <div class="text-h4 q-mb-md">Updates</div>
              <q-separator />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            </q-tab-panel>
          </q-tab-panels>
        </template>

      </q-splitter>
    </div>
  </q-page>
</template>

<script>
import CustomInput from 'components/CustomInput'
import FormLabel from 'components/FormLabel'

export default {
  components: { FormLabel, CustomInput },
  data () {
    return {
      tab: 'basic_information',
      splitterModel: 20,
      project: {
        code: null,
        title: null,
        description: null,
        expected_outputs: null,
        pap_type_id: null,
        regular_program: false,
        spatial_coverage_id: null,
        iccable: false,
        pip: false,
        pip_typology_id: null,
        research: false,
        cip: false,
        cip_type_id: null,
        trip: false,
        rdip: false,
        rdc_endorsement_required: false,
        rdc_endorsed: false,
        rdc_endorsed_date: null,
        other_infrastructure: null,
        risk: null,
        pdp_chapter_id: null,
        no_pdp_indicator: false,
        gad_id: null,
        target_start_year: null,
        target_end_year: null,
        preparation_document_id: null,
        has_fs: false,
        feasibility_study: {
          needs_assistance: false,
          fs_status_id: null,
          y2017: 0,
          y2018: 0,
          y2019: 0,
          y2020: 0,
          y2021: 0,
          y2022: 0,
          y2023: 0,
          y2024: 0,
          y2025: 0
        },
        has_row: false,
        right_of_way: {
          y2017: 0,
          y2018: 0,
          y2019: 0,
          y2020: 0,
          y2021: 0,
          y2022: 0,
          y2023: 0,
          y2024: 0,
          y2025: 0,
          affected_households: null
        },
        has_rap: false,
        resettlement_action_plan: {
          y2017: 0,
          y2018: 0,
          y2019: 0,
          y2020: 0,
          y2021: 0,
          y2022: 0,
          y2023: 0,
          y2024: 0,
          y2025: 0,
          affected_households: null
        },
        employment_generated: null,
        funding_source_id: null,
        implementation_mode_id: null,
        other_fs: null,
        project_status_id: null,
        updates: null,
        updates_date: null,
        uacs_code: null,
        tier_id: null,
        approval_level_id: null,
        approval_date: null,
        nep: {
          y2016: 0,
          y2017: 0,
          y2018: 0,
          y2019: 0,
          y2020: 0,
          y2021: 0,
          y2022: 0,
          y2023: 0,
          y2024: 0,
          y2025: 0
        },
        allocation: {
          y2016: 0,
          y2017: 0,
          y2018: 0,
          y2019: 0,
          y2020: 0,
          y2021: 0,
          y2022: 0,
          y2023: 0,
          y2024: 0,
          y2025: 0
        },
        disbursement: {
          y2016: 0,
          y2017: 0,
          y2018: 0,
          y2019: 0,
          y2020: 0,
          y2021: 0,
          y2022: 0,
          y2023: 0,
          y2024: 0,
          y2025: 0
        },
        regions: [],
        bases: [],
        implementing_agencies: [],
        sdgs: [],
        ten_point_agendas: [],
        pdp_chapters: []
      }
    }
  }
}
</script>
