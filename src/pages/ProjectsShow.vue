<template>
  <q-page>
    <q-card square flat bordered class="bg-primary text-white" v-if="project">
      <q-card-section>
        <div class="text-caption">
          PIPOL Code: {{project.code}}
        </div>
        <div class="text-h5 text-weight-bolder">
          {{project.title}}
        </div>
        <div class="text-subtitle1 q-mt-sm">
          <q-item-label :lines="5">
            {{project.description}}
          </q-item-label>
        </div>
        <div class="row items-center">
          <q-icon name="person" /> &nbsp;Created by {{(project.creator && project.creator.name) || '-'}} on {{project.created_at}}
        </div>
        <div class="row items-center">
          <q-icon name="event" /> &nbsp;Last updated by {{ (project.updater && project.updater.name) || '-'}} on {{project.updated_at}}
        </div>
        <div class="row q-gutter-sm q-mt-md">
          <q-btn outline label="Edit" icon-right="edit" :disable="!project.permissions.update" />
          <q-btn outline label="Delete" icon-right="delete" :disable="!project.permissions.delete" />
          <q-btn outline label="Share" icon-right="share" />
        </div>
      </q-card-section>
    </q-card>
    <div class="q-pa-md q-gutter-md">
      <q-card square flat bordered class="bg-grey-1 q-pa-md">
        <q-item-label header>Basic Information</q-item-label>
        <div class="row">
          <div class="col">
            <q-item>
              <q-item-section>
                <q-item-label caption>PAP Type</q-item-label>
                <q-item-label>{{ project.pap_type && project.pap_type.name }}</q-item-label>
              </q-item-section>
            </q-item>
          </div>
          <div class="col">
            <q-item>
              <q-item-section>
                <q-item-label caption>Regular Program</q-item-label>
                <q-item-label>{{ project.regular_program ? 'Yes' : 'No' }}</q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </div>
        <div class="row">
          <q-item>
            <q-item-section>
              <q-item-label caption>Description</q-item-label>
              <q-item-label>{{ project.description }}</q-item-label>
            </q-item-section>
          </q-item>
        </div>
        <div class="row">
          <q-item>
            <q-item-section>
              <q-item-label caption>Expected Outputs/Deliverables</q-item-label>
              <q-item-label>{{ project.expected_outputs }}</q-item-label>
            </q-item-section>
          </q-item>
        </div>
        <div class="row">
          <q-item>
            <q-item-section>
              <q-item-label caption>Basis for Implementation</q-item-label>
              <q-item-label>{{ (project.bases && project.bases.length && project.bases.map(ia => ia.name).join(', ')) || '-' }}</q-item-label>
            </q-item-section>
          </q-item>
        </div>
        <div class="row">
          <q-item>
            <q-item-section>
              <q-item-label caption>Implementing Agencies</q-item-label>
              <q-item-label>{{ (project.implementing_agencies && project.implementing_agencies.length && project.implementing_agencies.map(ia => ia.name).join(', ')) || '-' }}</q-item-label>
            </q-item-section>
          </q-item>
        </div>
        <div class="row">
          <div class="col">
            <q-item>
              <q-item-section>
                <q-item-label caption>Spatial Coverage</q-item-label>
                <q-item-label>{{ project.spatial_coverage && project.spatial_coverage.name }}</q-item-label>
              </q-item-section>
            </q-item>
          </div>
          <div class="col">
            <q-item>
              <q-item-section>
                <q-item-label caption>Regions Covered</q-item-label>
                <q-item-label>{{ (project.regions && project.regions.length && project.regions.map(r => r.name).join(', ')) || '-' }}</q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <q-item>
              <q-item-section>
                <q-item-label caption>Implementation Period</q-item-label>
                <q-item-label>{{ project.target_start_year + ' - ' + project.target_end_year }}</q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </div>
        <q-separator />
        <q-item-label header>Inclusion to Planning Documents</q-item-label>
        <div class="row">
          <div class="col">
            <q-item>
              <q-item-section>
                <q-item-label caption>Public Investment Program</q-item-label>
                <q-item-label>
                  <q-icon
                    :name="project.pip ? 'check_box' : 'indeterminate_check_box'"
                    :color="project.pip ? 'positive' : 'negative'" />
                </q-item-label>
              </q-item-section>
            </q-item>
          </div>
          <div class="col">
            <q-item>
              <q-item-section>
                <q-item-label caption>Typology</q-item-label>
                <q-item-label>{{ (project.pip_typology && project.pip_typology.name) || '-' }}</q-item-label>
              </q-item-section>
            </q-item>
          </div>
          <div class="col">
            <q-item>
              <q-item-section>
                <q-item-label caption>R&D?</q-item-label>
                <q-icon
                  :name="project.research ? 'check_box' : 'indeterminate_check_box'"
                  :color="project.research ? 'positive' : 'negative'" />
              </q-item-section>
            </q-item>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <q-item>
              <q-item-section>
                <q-item-label caption>Core Investment Program/Project</q-item-label>
                <q-item-label>
                  <q-icon
                    :name="project.cip ? 'check_box' : 'indeterminate_check_box'"
                    :color="project.cip ? 'positive' : 'negative'" />
                </q-item-label>
              </q-item-section>
            </q-item>
          </div>
          <div class="col">
            <q-item>
              <q-item-section>
                <q-item-label caption>Type of CIP</q-item-label>
                <q-item-label>{{ (project.cip_type && project.cip_type.name) || '-' }}</q-item-label>
              </q-item-section>
            </q-item>
          </div>
          <div class="col">
            <q-item>
              <q-item-section>
                <q-item-label caption>ICC-able and Status</q-item-label>
                <q-item-label caption>
                  <q-icon
                    :name="project.iccable ? 'check_box' : 'indeterminate_check_box'"
                    :color="project.iccable ? 'positive' : 'negative'" />
                  {{ project.approval_level && project.approval_level.name }}
                </q-item-label>
                <q-item-label>
                  {{ project.approval_date ? project.approval_date : void 0 }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <q-item>
              <q-item-section>
                <q-item-label caption>Three-Year Rolling Infrastructure Program</q-item-label>
                <q-item-label>
                  <q-icon
                    :name="project.trip ? 'check_box' : 'indeterminate_check_box'"
                    :color="project.trip ? 'positive' : 'negative'" />
                </q-item-label>
              </q-item-section>
            </q-item>
          </div>
          <div class="col">
            <q-item>
              <q-item-section>
                <q-item-label caption>Regional Development Investment Program</q-item-label>
                <q-item-label caption>
                  <q-icon
                    :name="project.rdip ? 'check_box' : 'indeterminate_check_box'"
                    :color="project.rdip ? 'positive' : 'negative'" />
                </q-item-label>
                <q-item-label caption v-if="project.rdip">
                  <q-icon
                    :name="project.rdc_endorsed ? 'check_box' : 'indeterminate_check_box'"
                    :color="project.rdc_endorsed ? 'positive' : 'negative'" /> Endorsed
                  {{ project.rdc_endorsed_date ? `on ${rdc_endorsed_date}` : '' }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </div>
        <q-separator />
        <q-item-label header>TRIP Information</q-item-label>
        <div class="row">
          <div class="col">
            <q-item>
              <q-item-section>
                <q-item-label caption>
                  Infrastructure Sector/Subsector
                </q-item-label>
                <q-item-label>
                  {{ (project.infrastructure_subsectors && project.infrastructure_subsectors.length && project.infrastructure_subsectors.map(is => is.name).join(', ')) || '-' }}
                  {{ project.other_infrastructure }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </div>
          <div class="col">
            <q-item>
              <q-item-section>
                <q-item-label caption>
                  Prerequisites
                </q-item-label>
                <q-item-label>
                  {{ (project.prerequisites && project.prerequisites.length && project.prerequisites.map(is => is.name).join(', ')) || '-' }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </div>
          <div class="col">
            <q-item>
              <q-item-section>
                <q-item-label caption>
                  Implementation Risk and Mitigation Strategies
                </q-item-label>
                <q-item-label>
                  {{ project.risk }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </div>
        <q-separator></q-separator>
        <q-item-label header>Strategic Alignment</q-item-label>
        <div class="row">
          <div class="col">
            <q-item>
              <q-item-section>
                <q-item-label caption>Main PDP Chapter</q-item-label>
                <q-item-label>{{ project.pdp_chapter && project.pdp_chapter.name }}</q-item-label>
              </q-item-section>
            </q-item>
          </div>
          <div class="col">
            <q-item>
              <q-item-section>
                <q-item-label caption>Other PDP Chapters</q-item-label>
                <q-item-label>{{ (project.pdp_chapters && project.pdp_chapters.length && project.pdp_chapters.map(pc => pc.name).join(', ')) || '-' }}</q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <q-item>
              <q-item-section>
                <q-item-label caption>PDP Results Matrix Indicators</q-item-label>
                <q-item-label>{{ (project.pdp_indicators && project.pdp_indicators.length && project.pdp_indicators.map(pc => pc.name).join(', ')) || '-' }}</q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <q-item>
              <q-item-section>
                <q-item-label caption>Sustainable Development Goals</q-item-label>
                <q-item-label>{{ (project.sdgs && project.sdgs.length && project.sdgs.map(pc => `${pc.id} - ${pc.name}`).join(', ')) || '-' }}</q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <q-item>
              <q-item-section>
                <q-item-label caption>0 + 10 Point Socio-Economic Agenda</q-item-label>
                <q-item-label>{{ (project.ten_point_agendas && project.ten_point_agendas.length && project.ten_point_agendas.map(pc => `${pc.id} - ${pc.name}`).join(', ')) || '-' }}</q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <q-item>
              <q-item-section>
                <q-item-label caption>Gender and Development Responsiveness</q-item-label>
                <q-item-label>{{ (project.gad && project.gad.name) || '-' }}</q-item-label>
              </q-item-section>
            </q-item>
          </div>
          <div class="col">
            <q-item>
              <q-item-section>
                <q-item-label caption>Employment Generated</q-item-label>
                <q-item-label>{{ project.employment_generated || '-' }}</q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </div>

        <q-separator />

        <q-item-label header>Readiness</q-item-label>

        <div class="row">
          <div class="col">
            <q-item>
              <q-item-section>
                <q-item-label caption>Prerequisites</q-item-label>
                <q-item-label>{{ (project.prerequisites && project.prerequisites.length && project.prerequisites.map(x => x.name).join(', ')) || '-' }}</q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <q-item>
              <q-item-section>
                <q-item-label caption>Feasibility Study</q-item-label>
                <q-item-label>
                  Does the conduct of the FS need assistance (e.g. from NEDA)? {{ project.feasibility_study.needs_assistance ? 'Yes' : 'No' }}
                </q-item-label>
                <q-item-label>
                  <q-markup-table flat dense square class="bg-transparent" bordered>
                    <thead>
                    <tr>
                      <th class="text-right" v-for="i in 10" :key="i">{{ 2015+i }}</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td v-for="i in 10" :key="i" class="text-right">
                        {{ project.feasibility_study[`y${2015+i}`] }}
                      </td>
                    </tr>
                    </tbody>
                  </q-markup-table>
                </q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <q-item>
              <q-item-section>
                <q-item-label caption>Right of Way</q-item-label>
                <q-item-label>
                  <q-markup-table flat dense square class="bg-transparent" bordered>
                    <thead>
                      <tr>
                        <th class="text-right" v-for="i in 10" :key="i">{{ 2015+i }}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td v-for="i in 10" :key="i" class="text-right">
                          {{ project.right_of_way[`y${2015+i}`] }}
                        </td>
                      </tr>
                    </tbody>
                  </q-markup-table>
                </q-item-label>
                <q-item-label>
                  Affected households: {{ project.right_of_way.affected_households }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <q-item>
              <q-item-section>
                <q-item-label caption>Resettlement Action Plan</q-item-label>
                <q-item-label>
                  <q-markup-table flat dense square class="bg-transparent" bordered>
                    <thead>
                    <tr>
                      <th class="text-right" v-for="i in 10" :key="i">{{ 2015+i }}</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td v-for="i in 10" :key="i" class="text-right">
                        {{ project.resettlement_action_plan[`y${2015+i}`] }}
                      </td>
                    </tr>
                    </tbody>
                  </q-markup-table>
                </q-item-label>
                <q-item-label>
                  Affected households: {{ project.resettlement_action_plan.affected_households }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </div>

        <q-separator />

        <q-item-label header>Financial Information</q-item-label>

        <div class="row">
          <div class="col">
            <q-item>
              <q-item-section>
                <q-item-label caption>Main Funding Source</q-item-label>
                <q-item-label>{{ (project.funding_source && project.funding_source.name) || '-' }}</q-item-label>
              </q-item-section>
            </q-item>
          </div>
          <div class="col">
            <q-item>
              <q-item-section>
                <q-item-label caption>Other Funding Sources</q-item-label>
                <q-item-label>{{ (project.funding_sources && project.funding_sources.length && project.funding_sources.map(x => x.name).join(', ')) || '-' }}</q-item-label>
              </q-item-section>
            </q-item>
          </div>
          <div class="col">
            <q-item>
              <q-item-section>
                <q-item-label caption>Funding Institutions</q-item-label>
                <q-item-label>{{ (project.funding_institutions && project.funding_institutions.length && project.funding_institutions.map(x => x.name).join(', ')) || '-' }}</q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <q-item>
              <q-item-section>
                <q-item-label caption>Implementation Mode</q-item-label>
                <q-item-label>{{ (project.implementation_mode && project.implementation_mode.name) || '-' }}</q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <q-item>
              <q-item-section>
                <q-item-label caption>Budget Tier (2TBA) Classification</q-item-label>
                <q-item-label>{{ (project.tier && project.tier.name) || '-' }}</q-item-label>
              </q-item-section>
            </q-item>
          </div>
          <div class="col">
            <q-item>
              <q-item-section>
                <q-item-label caption>UACS Code</q-item-label>
                <q-item-label>{{ project.uacs_code || '-' }}</q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <q-item>
              <q-item-section>
                <q-item-label>
                  <q-markup-table flat bordered dense square class="bg-transparent">
                    <thead>
                      <tr>
                        <th>Funding Source</th>
                        <th class="text-right" v-for="i in 10" :key="i">{{ 2015+i }}</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(fs, index) in project.fs_investments" :key="index">
                        <td>{{ fs.funding_source && fs.funding_source.name }}</td>
                        <td class="text-right" v-for="i in 10" :key="i">{{ fs[`y${2015+i}`] | money }}</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </q-markup-table>
                </q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </div>

        <q-separator />

        <q-item-label header>Updates</q-item-label>

        <div class="row">
          <div class="col">
            <q-item>
              <q-item-section>
                <q-item-label caption>Project Status</q-item-label>
                <q-item-label>{{ (project.project_status && project.project_status.name) || '-' }}</q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <q-item>
              <q-item-section>
                <q-item-label caption>Financial Accomplishments</q-item-label>
                <q-item-label>
                  <div class="row">
                    <div class="col">
                      <q-markup-table dense flat bordered class="bg-transparent" square>
                        <thead>
                        <tr>
                          <th></th>
                          <th class="text-right" v-for="i in 10" :key="i">{{ 2015+i }}</th>
                          <th class="text-right">Total</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td>NEP</td>
                          <td class="text-right" v-for="i in 10" :key="i">{{ project.nep[`y${2015+i}`] | money }}</td>
                          <td class="text-right">
                            {{
                              Object.keys(project.nep).reduce((acc, d) => {
                                const exclude = ['id','uuid','links']

                                if (exclude.includes(d)) {
                                  return acc += 0
                                }

                                acc += parseFloat(project.nep[d]) || 0

                                return acc
                              }, 0) | money
                            }}
                          </td>
                        </tr>
                        <tr>
                          <td>GAA</td>
                          <td class="text-right" v-for="i in 10" :key="i">{{ project.allocation[`y${2015+i}`]  | money }}</td>
                          <td class="text-right">
                            {{
                              Object.keys(project.allocation).reduce((acc, d) => {
                                const exclude = ['id','uuid','links']

                                if (exclude.includes(d)) {
                                  return acc += 0
                                }

                                acc += parseFloat(project.allocation[d]) || 0

                                return acc
                              }, 0) | money
                            }}
                          </td>
                        </tr>
                        <tr>
                          <td>Disbursement</td>
                          <td class="text-right" v-for="i in 10" :key="i">{{ project.disbursement[`y${2015+i}`] | money }}</td>
                          <td class="text-right">
                            {{
                              Object.keys(project.disbursement).reduce((acc, d) => {
                                const exclude = ['id','uuid','links']

                                if (exclude.includes(d)) {
                                  return acc += 0
                                }

                                acc += parseFloat(project.disbursement[d]) || 0

                                return acc
                              }, 0) | money
                            }}
                          </td>
                        </tr>
                        </tbody>
                      </q-markup-table>
                    </div>
                  </div>
                </q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <q-item>
              <q-item-section>
                <q-item-label caption>Updates</q-item-label>
                <q-item-label>{{ project.updates || '-' }}</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label caption>As of</q-item-label>
                <q-item-label>{{ project.updates_date || '-' }}</q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </div>
      </q-card>
    </div>

    <pre>
      {{project}}
    </pre>
  </q-page>
</template>

<script>
import { ProjectAPI } from 'src/api/projects'

export default {
  name: 'ProjectsShow',
  data() {
    return {
      project: {
        id: null,
        code: null,
        title: null,
        description: null,
        expected_outputs: null,
        pap_type: {},
        regular_program: false,
        spatial_coverage: {},
        iccable: false,
        pip: false,
        pip_typology: {},
        research: false,
        cip: false,
        cip_type_id: 6,
        cip_type: {},
        trip: false,
        rdip: false,
        rdc_endorsement_required: null,
        rdc_endorsed: false,
        rdc_endorsed_date: null,
        other_infrastructure: null,
        risk: null,
        pdp_chapter_id: null,
        pdp_chapter: {},
        no_pdp_indicator: false,
        gad_id: null,
        gad: {},
        target_start_year: null,
        target_end_year: null,
        preparation_document: {},
        has_fs: false,
        feasibility_study: {},
        has_row: false,
        right_of_way: {},
        has_rap: false,
        resettlement_action_plan: {},
        employment_generated: null,
        funding_source_id: null,
        funding_source: {},
        implementation_mode_id: null,
        implementation_mode: {},
        other_fs: null,
        project_status_id: null,
        project_status: {},
        updates: null,
        updates_date: null,
        uacs_code: null,
        tier_id: null,
        tier: {},
        approval_level_id: null,
        approval_level: {},
        approval_date: null,
        nep: {},
        allocation: {},
        disbursement: {},
        regions: [],
        creator: {},
        updater: {},
        deleter: {},
        created_at: null,
        updated_at: null,
        permissions: {
          view: false,
          update: false,
          delete: false,
          restore: false,
          forceDelete: false
        }
      }
    }
  },
  methods: {
    getProject(slug) {
      ProjectAPI.show(slug)
        .then(res => (this.project = res.data))
        .catch(err => console.log(err.message))
    }
  },
  filters: {
    money(value) {
      console.log(value)
      if (value) {
        return value.toLocaleString()
      }
      return 0
    }
  },
  created() {
    const slug = this.$route.params.slug
    this.getProject(slug)
  }
}
</script>

<style scoped>
.q-item__label--header {
  color: #00242c !important;
  font-weight: bold;
}
</style>
