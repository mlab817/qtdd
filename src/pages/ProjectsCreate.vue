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
            <q-tab :name="1" label="Basic Information" />
            <q-tab :name="2" label="Plan Inclusion" />
            <q-tab :name="3" label="TRIP Information" />
            <q-tab :name="4" label="Strategic Alignment" />
            <q-tab :name="5" label="Financial Information" />
            <q-tab :name="6" label="Updates" />
            <q-tab :name="7" label="Review &amp; Submit" />
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
            <q-tab-panel :name="1">
              <div class="text-h5 text-weight-bolder text-primary">
                Basic Information
              </div>
              <q-separator />

              <form-label label="PAP Title" :required="true" />
              <custom-input v-model="project.title" placeholder="Insert PAP Title" />

              <form-label label="PAP Type" :required="true" />
              <q-select v-model="project.pap_type_id" :options="options.pap_types" placeholder="Choose PAP Type" outlined dense square />
              <q-checkbox size="sm" v-model="project.regular_program" label="Regular Program" />

              <form-label label="Description" :required="true" />
              <custom-input type="textarea" v-model="project.description" placeholder="Insert PAP description" />

              <form-label label="Expected Outputs" :required="true" />
              <custom-input type="textarea" v-model="project.expected_outputs" placeholder="Insert expected outputs/actual deliverables of the PAP" />

              <form-label label="Basis for Implementation" :required="true" />
              <q-option-group
                v-model="project.bases"
                :options="options.bases"
                type="checkbox"
              />

              <form-label label="Implementing Agencies" :required="true" />
              <q-option-group
                v-model="project.implementing_agencies"
                :options="options.operating_units"
                type="checkbox"
                />

              <form-label label="Spatial Coverage" :required="true" />
              <q-select v-model="project.spatial_coverage_id" :options="options.spatial_coverages" placeholder="Choose spatial coverage" outlined dense square />

              <form-label label="Regions" :required="true" />
              <q-option-group v-model="project.regions" :options="options.regions" type="checkbox" />

              <form-label label="Target Implementation Start Year" :required="true" />
              <q-input v-model="project.target_start_year" outlined dense square placeholder="e.g. 2017" type="number" />

              <form-label label="Target Implementation End Year" :required="true" />
              <q-input v-model="project.target_end_year" outlined dense square placeholder="e.g. 2022" type="number" />

              <div class="row justify-end q-mt-md">
                <q-btn icon-right="arrow_right" label="Next" no-caps @click="nextTab" color="primary" />
              </div>
            </q-tab-panel>

            <q-tab-panel :name="2">
              <div class="text-h5 text-weight-bolder text-primary">Plan Inclusion</div>
              <q-separator />

              <q-list>
                <custom-checkbox label="PIP" caption="For inclusion in the Public Investment Program" v-model="project.pip" />
                <q-item :inset-level="1">
                  <q-item-section>
                    <q-item-label>
                      <q-select v-model="project.pip_typology_id" label="PIP Typology" class="col" outlined dense square :options="options.pip_typologies"></q-select>
                    </q-item-label>
                    <q-item-label>
                      <q-checkbox v-model="project.research" dense size="sm" label="Is the PAP Research and Development?" />
                    </q-item-label>
                  </q-item-section>
                </q-item>
                <custom-checkbox label="CIP" caption="Classifiable as Core Investment Program/Project" v-model="project.cip" />
                <q-item :inset-level="1">
                  <q-item-section >
                    <q-item-label>
                      <q-select v-model="project.cip_type_id" label="CIP Type" class="col" outlined dense square :options="options.cip_types"></q-select>
                    </q-item-label>
                  </q-item-section>
                </q-item>
                <q-item :inset-level="1">
                  <q-item-section >
                    <q-item-label>
                      <q-select
                        v-model="project.approval_level_id"
                        :options="options.approval_levels"
                        label="Approval Level"
                        dense
                        outlined
                        square />
                    </q-item-label>
                    <q-item-label>
                      <q-input type="date" v-model="project.approval_date" stack-label label="Date of Submission/Approval" outlined dense square />
                    </q-item-label>
                  </q-item-section>
                </q-item>
                <custom-checkbox label="TRIP" caption="Classifiable as Three-Year Rolling Investment Program" v-model="project.trip" />
                <custom-checkbox label="RDIP" caption="Included in the Regional Development Investment Plan" v-model="project.rdip" />
                <q-item :inset-level="1">
                  <q-item-section >
                    <q-item-label>
                      <q-checkbox v-model="project.rdc_endorsement_required" label="RDC Endorsement Required" dense></q-checkbox>
                    </q-item-label>
                    <q-item-label>
                      <div class="row">
                        <q-checkbox v-model="project.rdc_endorsed" label="RDC Endorsed?" dense></q-checkbox>
                        <q-input class="q-ml-md" type="date" v-model="project.rdc_endorsed_date" dense></q-input>
                      </div>
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>

              <div class="row justify-between q-mt-md">
                <q-btn icon="arrow_left" label="Back" no-caps @click="previousTab" color="primary" />
                <q-btn icon-right="arrow_right" label="Next" no-caps @click="nextTab" color="primary" />
              </div>
            </q-tab-panel>

            <q-tab-panel :name="3">
              <div class="text-h5 text-weight-bolder text-primary">TRIP Information</div>
              <q-separator />

              <form-label label="Infrastructure Sectors" :required="true" />
              <!-- TODO: Include infrastructure sectors QTree -->
              <p>Infra Sectors</p>
              <custom-input v-model="project.other_fs" placeholder="Other infrastructure Sector" />

              <form-label label="Prerequisites" :required="true" />
              <q-option-group
                v-model="project.prerequisites"
                :options="options.prerequisites"
                type="checkbox"/>

              <form-label label="Implementation Risks and Mitigation Strategies" :required="true" />
              <custom-input type="textarea" v-model="project.risks" placeholder="Insert implementation risks and mitigation strategies" />

              <div class="row justify-between q-mt-md">
                <q-btn icon-right="arrow_left" label="Back" no-caps @click="previousTab" color="primary" />
                <q-btn icon-right="arrow_right" label="Next" no-caps @click="nextTab" color="primary" />
              </div>
            </q-tab-panel>

            <q-tab-panel :name="4">
              <div class="text-h5 text-weight-bolder text-primary">Strategic Alignment</div>
              <q-separator />

              <form-label label="Main PDP Chapter" :required="true" />
              <q-select v-model="project.pdp_chapter_id" :options="options.pdp_chapters" outlined dense square />

              <form-label label="Other PDP Chapter" :required="true" />
              <q-option-group v-model="project.pdp_chapters" :options="options.pdp_chapters" type="checkbox"></q-option-group>

              <p>PDP Results Matrix</p>
              <!-- TODO: Include PDP Results Matrix QTree -->

              <form-label label="0 + Ten Point Agenda" :required="true" />
              <q-option-group v-model="project.ten_point_agendas" :options="options.ten_point_agendas" type="checkbox"></q-option-group>

              <form-label label="Sustainable Development Goals" :required="true" />
              <q-option-group v-model="project.sdgs" :options="options.sdgs" type="checkbox"></q-option-group>

              <form-label label="Employment Generated" />
              <custom-input v-model="project.employment_generated" placeholder="e.g. 200 workers"></custom-input>

              <div class="row justify-between q-mt-md">
                <q-btn icon="arrow_left" label="Back" no-caps @click="previousTab" color="primary" />
                <q-btn icon-right="arrow_right" label="Next" no-caps @click="nextTab" color="primary" />
              </div>
            </q-tab-panel>

            <q-tab-panel :name="5">
              <div class="text-h5 text-weight-bolder text-primary">Financial Information</div>
              <q-separator />

              <q-list>
                <custom-checkbox v-model="project.has_fs" label="Feasibility Study" caption="The PAP requires a feasibility study" />
                <q-item :inset-level="1">
                  <q-item-section>
                    <q-item-label>
                      <custom-checkbox v-model="project.feasibility_study.needs_assistance" label="Does the conduct of the FS need assistance?" />
                    </q-item-label>
                    <q-item-label>
                      <div class="row q-col-gutter-sm">
                        <money-input label="2017" v-model="project.feasibility_study.y2017" />
                        <money-input label="2018" v-model="project.feasibility_study.y2018" />
                        <money-input label="2019" v-model="project.feasibility_study.y2019" />
                        <money-input label="2020" v-model="project.feasibility_study.y2020" />
                        <money-input label="2021" v-model="project.feasibility_study.y2021" />
                        <money-input label="2022" v-model="project.feasibility_study.y2022" />
                        <money-input label="2023" v-model="project.feasibility_study.y2023" />
                        <money-input label="2024" v-model="project.feasibility_study.y2024" />
                        <money-input label="2025" v-model="project.feasibility_study.y2025" />
                        <money-input label="Total" :value="fsTotal" stack-label :readonly="true" />
                      </div>
                    </q-item-label>
                  </q-item-section>
                </q-item>
                <custom-checkbox v-model="project.has_row" label="Right of Way" caption="The PAP requires a right of way acquisition" />
                <q-item :inset-level="1">
                  <q-item-section>
                    <q-item-label>
                      <div class="row q-col-gutter-sm">
                        <money-input label="2017" v-model="project.right_of_way.y2017" />
                        <money-input label="2018" v-model="project.right_of_way.y2018" />
                        <money-input label="2019" v-model="project.right_of_way.y2019" />
                        <money-input label="2020" v-model="project.right_of_way.y2020" />
                        <money-input label="2021" v-model="project.right_of_way.y2021" />
                        <money-input label="2022" v-model="project.right_of_way.y2022" />
                        <money-input label="2023" v-model="project.right_of_way.y2023" />
                        <money-input label="2024" v-model="project.right_of_way.y2024" />
                        <money-input label="2025" v-model="project.right_of_way.y2025" />
                        <money-input label="Total" :value="rowTotal" stack-label :readonly="true" />
                      </div>
                    </q-item-label>
                    <q-item-label>
                      <custom-input v-model="project.right_of_way.affected_households" placeholder="Number of affected individuals/households" dense outlined square />
                    </q-item-label>
                  </q-item-section>
                </q-item>
                <custom-checkbox v-model="project.has_rap" label="Resettlement Action Plan" caption="The PAP requires a resettlement action plan" />
                <q-item :inset-level="1">
                  <q-item-section>
                    <q-item-label>
                      <div class="row q-col-gutter-sm">
                        <money-input label="2017" v-model="project.resettlement_action_plan.y2017" />
                        <money-input label="2018" v-model="project.resettlement_action_plan.y2018" />
                        <money-input label="2019" v-model="project.resettlement_action_plan.y2019" />
                        <money-input label="2020" v-model="project.resettlement_action_plan.y2020" />
                        <money-input label="2021" v-model="project.resettlement_action_plan.y2021" />
                        <money-input label="2022" v-model="project.resettlement_action_plan.y2022" />
                        <money-input label="2023" v-model="project.resettlement_action_plan.y2023" />
                        <money-input label="2024" v-model="project.resettlement_action_plan.y2024" />
                        <money-input label="2025" v-model="project.resettlement_action_plan.y2025" />
                        <money-input label="Total" :value="rapTotal" stack-label :readonly="true" />
                      </div>
                    </q-item-label>
                    <q-item-label>
                      <custom-input v-model="project.resettlement_action_plan.affected_households" placeholder="Number of affected individuals/households" dense outlined square />
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>

              <q-separator />

              <form-label label="Main Funding Source" :required="true" />
              <q-select v-model="project.funding_source_id" :options="options.funding_sources" outlined dense square />

              <form-label label="Other Funding Source" />
              <q-option-group v-model="project.funding_sources" :options="options.fundig_sources" type="checkbox" />

              <form-label label="Funding Institutions" :required="true" />
              <q-select
                multiple
                v-model="project.funding_institutions"
                :options="options.funding_institutions"
                dense
                outlined
                square
                use-chips />

              <form-label label="Implementation Mode" :required="true" />
              <q-select v-model="project.implementation_mode_id" :options="options.implementation_modes" outlined dense square />

              <form-label label="Budget Tier (2TBA) Classification" :required="true" />
              <q-select v-model="project.tier_id" :options="options.tiers" outlined dense square />

              <form-label label="UACS Code" />
              <custom-input v-model="project.uacs_code" placeholder="e.g. 05001123456789" />

              <form-label label="Total Investment Requirement by Operating Unit" />
              <ou-investments v-model="project.ou_investments"></ou-investments>

              <div class="row justify-between q-mt-md">
                <q-btn icon="arrow_left" label="Back" no-caps @click="previousTab" color="primary" />
                <q-btn icon-right="arrow_right" label="Next" no-caps @click="nextTab" color="primary" />
              </div>
            </q-tab-panel>

            <q-tab-panel :name="6">
              <div class="text-h5 text-weight-bolder text-primary">Updates</div>
              <q-separator />

              <form-label label="Project Status" :required="true" />
              <q-select
                v-model="project.project_status_id"
                :options="options.project_statuses"
                dense
                outlined
                square />

              <form-label label="Financial Accomplishment" :required="true" />

              <q-markup-table dense bordered flat square separator="horizontal">
                <thead class="text-center">
                  <q-tr>
                    <q-td>Year</q-td>
                    <q-td>National Expenditure Program</q-td>
                    <q-td>General Appropriations Act</q-td>
                    <q-td>Actual Disbursement *</q-td>
                  </q-tr>
                </thead>
                <tbody>
                  <q-tr>
                    <q-td>2016 &amp; Prior</q-td>
                    <q-td>
                      <money-input v-model="project.nep.y2016" />
                    </q-td>
                    <q-td>
                      <money-input v-model="project.allocation.y2016" />
                    </q-td>
                    <q-td>
                      <money-input v-model="project.disbursement.y2016" />
                    </q-td>
                  </q-tr>
                  <q-tr>
                    <q-td>2017</q-td>
                    <q-td>
                      <money-input v-model="project.nep.y2017" />
                    </q-td>
                    <q-td>
                      <money-input v-model="project.allocation.y2017" />
                    </q-td>
                    <q-td>
                      <money-input v-model="project.disbursement.y2017" />
                    </q-td>
                  </q-tr>
                  <q-tr>
                    <q-td>2018</q-td>
                    <q-td>
                      <money-input v-model="project.nep.y2018" />
                    </q-td>
                    <q-td>
                      <money-input v-model="project.allocation.y2018" />
                    </q-td>
                    <q-td>
                      <money-input v-model="project.disbursement.y2018" />
                    </q-td>
                  </q-tr>
                  <q-tr>
                    <q-td>2019</q-td>
                    <q-td>
                      <money-input v-model="project.nep.y2019" />
                    </q-td>
                    <q-td>
                      <money-input v-model="project.allocation.y2019" />
                    </q-td>
                    <q-td>
                      <money-input v-model="project.disbursement.y2019" />
                    </q-td>
                  </q-tr>
                  <q-tr>
                    <q-td>2020</q-td>
                    <q-td>
                      <money-input v-model="project.nep.y2020" />
                    </q-td>
                    <q-td>
                      <money-input v-model="project.allocation.y2020" />
                    </q-td>
                    <q-td>
                      <money-input v-model="project.disbursement.y2020" />
                    </q-td>
                  </q-tr>
                  <q-tr>
                    <q-td>2021</q-td>
                    <q-td>
                      <money-input v-model="project.nep.y2021" />
                    </q-td>
                    <q-td>
                      <money-input v-model="project.allocation.y2021" />
                    </q-td>
                    <q-td>
                      <money-input v-model="project.disbursement.y2021" />
                    </q-td>
                  </q-tr>
                  <q-tr>
                    <q-td>2022</q-td>
                    <q-td>
                      <money-input v-model="project.nep.y2022" />
                    </q-td>
                    <q-td>
                      <money-input v-model="project.allocation.y2022" />
                    </q-td>
                    <q-td>
                      <money-input v-model="project.disbursement.y2022" />
                    </q-td>
                  </q-tr>
                  <q-tr>
                    <q-td>2023</q-td>
                    <q-td>
                      <money-input v-model="project.nep.y2023" />
                    </q-td>
                    <q-td>
                      <money-input v-model="project.allocation.y2023" />
                    </q-td>
                    <q-td>
                      <money-input v-model="project.disbursement.y2023" />
                    </q-td>
                  </q-tr>
                  <q-tr>
                    <q-td>2024</q-td>
                    <q-td>
                      <money-input v-model="project.nep.y2024" />
                    </q-td>
                    <q-td>
                      <money-input v-model="project.allocation.y2024" />
                    </q-td>
                    <q-td>
                      <money-input v-model="project.disbursement.y2024" />
                    </q-td>
                  </q-tr>
                  <q-tr>
                    <q-td>2025 &amp; Beyond</q-td>
                    <q-td>
                      <money-input v-model="project.nep.y2025" />
                    </q-td>
                    <q-td>
                      <money-input v-model="project.allocation.y2025" />
                    </q-td>
                    <q-td>
                      <money-input v-model="project.disbursement.y2025" />
                    </q-td>
                  </q-tr>
                  <q-tr>
                    <q-td>Total</q-td>
                    <q-td>
                      <money-input :value="nepTotal" readonly />
                    </q-td>
                    <q-td>
                      <money-input :value="allocationTotal" readonly />
                    </q-td>
                    <q-td>
                      <money-input :value="disbursementTotal" readonly />
                    </q-td>
                  </q-tr>
                </tbody>
              </q-markup-table>

              <form-label label="Updates" :required="true" />
              <custom-input type="textarea" v-model="project.updates" />

              <form-label label="As of" />
              <q-input type="date" v-model="project.updates_date" outlined dense square />

              <div class="row justify-between q-mt-md">
                <q-btn icon="arrow_left" label="Back" no-caps @click="previousTab" color="primary" />
                <q-btn icon-right="arrow_right" label="Next" no-caps @click="nextTab" color="primary" />
              </div>
            </q-tab-panel>

            <q-tab-panel :name="7">
              <div class="text-h5 text-weight-bolder text-primary">Review &amp; Submit</div>
              <q-separator />

              <p>Preview (Linked to Project Show)</p>
              <pre>
                {{ project }}
              </pre>

              <div class="row justify-between q-mt-md">
                <q-btn icon="arrow_left" label="Back" no-caps @click="previousTab" color="primary" />
                <q-btn outline label="Submit" no-caps color="primary" />
              </div>
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
import CustomCheckbox from 'components/CustomCheckbox'
import MoneyInput from 'components/MoneyInput'
import OuInvestments from 'components/ProjectsCreate/OuInvestments'

export default {
  components: { OuInvestments, MoneyInput, CustomCheckbox, FormLabel, CustomInput },
  data () {
    return {
      tab: 5,
      splitterModel: 20,
      project: {
        code: null,
        title: null,
        pap_type_id: null,
        regular_program: false,
        description: null,
        bases: [],
        implementing_agencies: [],
        expected_outputs: null,
        spatial_coverage_id: null,
        regions: [],
        target_start_year: null,
        target_end_year: null,
        pip: false,
        pip_typology_id: null,
        research: false,
        cip: false,
        cip_type_id: null,
        iccable: false,
        trip: false,
        rdip: false,
        rdc_endorsement_required: false,
        rdc_endorsed: false,
        rdc_endorsed_date: null,
        prerequisites: [],
        other_infrastructure: null,
        risk: null,
        pdp_chapter_id: null,
        no_pdp_indicator: false,
        gad_id: null,
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
        funding_sources: [],
        funding_institutions: [],
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
        sdgs: [],
        ten_point_agendas: [],
        pdp_chapters: [],
        ou_investments: [],
        region_investments: [
          {
            region: {
              id: null,
              name: null
            },
            region_id: null,
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
          }
        ],
        fs_investments: [
          {
            funding_source: {
              id: null,
              name: null
            },
            funding_source_id: null,
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
          }
        ]
      }
    }
  },
  computed: {
    options() {
      return this.$store.state.options
    },
    fsTotal() {
      const project = this.project
      const y2017 = parseFloat(project.feasibility_study.y2017) || 0
      const y2018 = parseFloat(project.feasibility_study.y2018) || 0
      const y2019 = parseFloat(project.feasibility_study.y2019) || 0
      const y2020 = parseFloat(project.feasibility_study.y2020) || 0
      const y2021 = parseFloat(project.feasibility_study.y2021) || 0
      const y2022 = parseFloat(project.feasibility_study.y2022) || 0
      const y2023 = parseFloat(project.feasibility_study.y2023) || 0
      const y2024 = parseFloat(project.feasibility_study.y2024) || 0
      const y2025 = parseFloat(project.feasibility_study.y2025) || 0

      return y2017 +
              y2018 +
              y2019 +
              y2020 +
              y2021 +
              y2022 +
              y2023 +
              y2024 +
              y2025
    },
    rowTotal() {
      const project = this.project
      const y2017 = parseFloat(project.right_of_way.y2017) || 0
      const y2018 = parseFloat(project.right_of_way.y2018) || 0
      const y2019 = parseFloat(project.right_of_way.y2019) || 0
      const y2020 = parseFloat(project.right_of_way.y2020) || 0
      const y2021 = parseFloat(project.right_of_way.y2021) || 0
      const y2022 = parseFloat(project.right_of_way.y2022) || 0
      const y2023 = parseFloat(project.right_of_way.y2023) || 0
      const y2024 = parseFloat(project.right_of_way.y2024) || 0
      const y2025 = parseFloat(project.right_of_way.y2025) || 0

      return y2017 +
        y2018 +
        y2019 +
        y2020 +
        y2021 +
        y2022 +
        y2023 +
        y2024 +
        y2025
    },
    rapTotal() {
      const project = this.project
      const y2017 = parseFloat(project.resettlement_action_plan.y2017) || 0
      const y2018 = parseFloat(project.resettlement_action_plan.y2018) || 0
      const y2019 = parseFloat(project.resettlement_action_plan.y2019) || 0
      const y2020 = parseFloat(project.resettlement_action_plan.y2020) || 0
      const y2021 = parseFloat(project.resettlement_action_plan.y2021) || 0
      const y2022 = parseFloat(project.resettlement_action_plan.y2022) || 0
      const y2023 = parseFloat(project.resettlement_action_plan.y2023) || 0
      const y2024 = parseFloat(project.resettlement_action_plan.y2024) || 0
      const y2025 = parseFloat(project.resettlement_action_plan.y2025) || 0

      return y2017 +
        y2018 +
        y2019 +
        y2020 +
        y2021 +
        y2022 +
        y2023 +
        y2024 +
        y2025
    },
    nepTotal() {
      const item = this.project.nep
      const y2016 = parseFloat(item.y2016) || 0
      const y2017 = parseFloat(item.y2017) || 0
      const y2018 = parseFloat(item.y2018) || 0
      const y2019 = parseFloat(item.y2019) || 0
      const y2020 = parseFloat(item.y2020) || 0
      const y2021 = parseFloat(item.y2021) || 0
      const y2022 = parseFloat(item.y2022) || 0
      const y2023 = parseFloat(item.y2023) || 0
      const y2024 = parseFloat(item.y2024) || 0
      const y2025 = parseFloat(item.y2025) || 0
      return y2016 +
        y2017 +
        y2018 +
        y2019 +
        y2020 +
        y2021 +
        y2022 +
        y2023 +
        y2024 +
        y2025
    },
    allocationTotal() {
      const item = this.project.allocation
      const y2016 = parseFloat(item.y2016) || 0
      const y2017 = parseFloat(item.y2017) || 0
      const y2018 = parseFloat(item.y2018) || 0
      const y2019 = parseFloat(item.y2019) || 0
      const y2020 = parseFloat(item.y2020) || 0
      const y2021 = parseFloat(item.y2021) || 0
      const y2022 = parseFloat(item.y2022) || 0
      const y2023 = parseFloat(item.y2023) || 0
      const y2024 = parseFloat(item.y2024) || 0
      const y2025 = parseFloat(item.y2025) || 0
      return y2016 +
        y2017 +
        y2018 +
        y2019 +
        y2020 +
        y2021 +
        y2022 +
        y2023 +
        y2024 +
        y2025
    },
    disbursementTotal() {
      const item = this.project.disbursement
      const y2016 = parseFloat(item.y2016) || 0
      const y2017 = parseFloat(item.y2017) || 0
      const y2018 = parseFloat(item.y2018) || 0
      const y2019 = parseFloat(item.y2019) || 0
      const y2020 = parseFloat(item.y2020) || 0
      const y2021 = parseFloat(item.y2021) || 0
      const y2022 = parseFloat(item.y2022) || 0
      const y2023 = parseFloat(item.y2023) || 0
      const y2024 = parseFloat(item.y2024) || 0
      const y2025 = parseFloat(item.y2025) || 0
      return y2016 +
        y2017 +
        y2018 +
        y2019 +
        y2020 +
        y2021 +
        y2022 +
        y2023 +
        y2024 +
        y2025
    }
  },
  methods: {
    nextTab() {
      this.tab++
    },
    previousTab() {
      --this.tab
    },
    loadOptions() {
      this.$store.dispatch('options/loadOptions')
    }
  },
  mounted() {
    this.loadOptions()
  }
}
</script>
