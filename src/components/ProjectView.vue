<template>
  <div class="q-gutter-md">
    <div class="row justify-end">
      <q-btn label="Collapse All" dense @click="collapseAll"></q-btn>
      <q-btn class="q-ml-md" label="Expand All" dense @click="expandAll"></q-btn>
    </div>
    <q-card flat bordered class="bg-grey-1">
      <q-card-section class="row bg-primary text-white">
        <span class="text-h6">
          Basic Information
        </span>
        <q-space />
        <q-btn :icon="expanded1 ? 'expand_less' : 'expand_more'" flat round @click="expanded1 = !expanded1"></q-btn>
      </q-card-section>
      <q-card-section v-show="expanded1">
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
                <q-item-label>
                  <q-icon
                    :name="project.regular_program ? 'check_box' : 'indeterminate_check_box'"
                    :color="project.regular_program ? 'positive' : 'negative'" />
                  {{ project.regular_program ? 'Yes' : 'No' }}</q-item-label>
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
      </q-card-section>
    </q-card>

    <q-card flat bordered class="bg-grey-1">
      <q-card-section class="row bg-primary text-white">
        <span class="text-h6">
          Inclusion to Planning Documents
        </span>
        <q-space />
        <q-btn :icon="expanded2 ? 'expand_less' : 'expand_more'" flat round @click="expanded2 = !expanded2"></q-btn>
      </q-card-section>
      <q-card-section v-show="expanded2">
        <div class="row">
          <div class="col">
            <q-item>
              <q-item-section>
                <q-item-label caption>Public Investment Program</q-item-label>
                <q-item-label>
                  <q-icon
                    :name="project.pip ? 'check_box' : 'indeterminate_check_box'"
                    :color="project.pip ? 'positive' : 'negative'" />
                  {{ project.pip ? 'Yes' : 'No' }}
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
                <q-item-label>
                  R&D?
                </q-item-label>
                <q-item-label>
                  <q-icon
                    :name="project.research ? 'check_box' : 'indeterminate_check_box'"
                    :color="project.research ? 'positive' : 'negative'" />
                  {{ project.research ? 'Yes' : 'No' }}
                </q-item-label>
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
                  {{ project.cip ? 'Yes' : 'No' }}
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
                <q-item-label>
                  <q-icon
                    :name="project.iccable ? 'check_box' : 'indeterminate_check_box'"
                    :color="project.iccable ? 'positive' : 'negative'" />
                  {{ project.iccable ? '' : 'No' }}
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
                  {{ project.trip ? 'Yes' : 'No' }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </div>
          <div class="col">
            <q-item>
              <q-item-section>
                <q-item-label caption>Regional Development Investment Program</q-item-label>
                <q-item-label>
                  <q-icon
                    :name="project.rdip ? 'check_box' : 'indeterminate_check_box'"
                    :color="project.rdip ? 'positive' : 'negative'" />
                  {{ project.rdip ? 'Yes' : 'No' }}
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
      </q-card-section>
    </q-card>

    <q-card flat bordered class="bg-grey-1">
      <q-card-section class="row bg-primary text-white">
        <span class="text-h6">
          TRIP Information
        </span>
        <q-space />
        <q-btn :icon="expanded3 ? 'expand_less' : 'expand_more'" flat round @click="expanded3 = !expanded3"></q-btn>
      </q-card-section>
      <q-card-section v-show="expanded3">
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
        </div>
        <div class="row">
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
        <div class="row">
          <div class="col">
            <q-item>
              <q-item-section>
                <q-item-label caption>Investment Requirement by Funding Source (PhP)</q-item-label>
                <q-item-label>
                  <q-markup-table flat bordered dense square class="bg-transparent">
                    <thead>
                    <tr>
                      <th style="width: 8.33%">Funding Source</th>
                      <th style="width: 8.33%" class="text-right" v-for="i in 10" :key="i">{{ 2015+i }}</th>
                      <th style="width: 8.33%" class="text-right">Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(fs, index) in project.fs_infrastructures" :key="index">
                      <td>{{ fs.funding_source && fs.funding_source.name }}</td>
                      <td class="text-right" v-for="i in 10" :key="i">{{ fs[`y${2015+i}`] | money }}</td>
                      <td class="text-right">{{ fs.total | money }}</td>
                    </tr>
                    </tbody>
                  </q-markup-table>
                </q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <q-card flat bordered class="bg-grey-1">
      <q-card-section class="row bg-primary text-white">
        <span class="text-h6">
          Strategic Alignment
        </span>
        <q-space></q-space>
        <q-btn :icon="expanded4 ? 'expand_less' : 'expand_more'" flat round @click="expanded4 = !expanded4"></q-btn>
      </q-card-section>
      <q-card-section v-show="expanded4">
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
                <q-item-label>
                  {{ (project.sdgs
                  && project.sdgs.length
                  && project.sdgs.map(pc => `${pc.id} - ${pc.name}`).join(', ')) || '-' }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <q-item>
              <q-item-section>
                <q-item-label caption>0 + 10 Point Socio-Economic Agenda</q-item-label>
                <q-item-label>
                  {{ (project.ten_point_agendas
                  && project.ten_point_agendas.length
                  && project.ten_point_agendas.map(pc => `${pc.id} - ${pc.name}`).join(', ')) || '-' }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <q-item>
              <q-item-section>
                <q-item-label caption>Gender and Development Responsiveness</q-item-label>
                <q-item-label>
                  {{ (project.gad && project.gad.name) || '-' }}
                </q-item-label>
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
      </q-card-section>
    </q-card>

    <q-card flat bordered class="bg-grey-1">
      <q-card-section class="row bg-primary text-white">
        <span class="text-h6">
          Readiness
        </span>
        <q-space></q-space>
        <q-btn :icon="expanded5 ? 'expand_less' : 'expand_more'" flat round @click="expanded5 = !expanded5"></q-btn>
      </q-card-section>

      <q-card-section v-show="expanded5">

        <div class="row">
          <div class="col">
            <q-item>
              <q-item-section>
                <q-item-label caption>Prerequisites</q-item-label>
                <q-item-label>
                  {{ (project.prerequisites
                  && project.prerequisites.length
                  && project.prerequisites.map(x => x.name).join(', ')) || '-' }}</q-item-label>
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
                  <q-markup-table flat dense square class="bg-transparent" bordered wrap-cells>
                    <thead>
                    <tr>
                      <th style="width: 8.33%"></th>
                      <th style="width: 8.33%" class="text-right" v-for="i in 10" :key="i">{{ 2015+i }}</th>
                      <th style="width: 8.33%" class="text-right">Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>Feasibility Study</td>
                      <td v-for="i in 10" :key="i" class="text-right">
                        {{ project.feasibility_study[`y${2015+i}`] }}
                      </td>
                      <td class="text-right">
                        {{ project.feasibility_study.total | money }}
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
                  <q-markup-table flat dense square class="bg-transparent" bordered wrap-cells>
                    <thead>
                    <tr>
                      <th style="width: 8.33%"></th>
                      <th style="width: 8.33%" class="col text-right" v-for="i in 10" :key="i">{{ 2015+i }}</th>
                      <th style="width: 8.33%" class="col text-right">Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>Right of Way</td>
                      <td v-for="i in 10" :key="i" class="text-right">
                        {{ project.right_of_way[`y${2015+i}`] }}
                      </td>
                      <td class="text-right">
                        {{ project.right_of_way.total | money }}
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
                  <q-markup-table flat dense square class="bg-transparent" bordered wrap-cells>
                    <thead>
                    <tr>
                      <th style="width: 8.33%"></th>
                      <th style="width: 8.33%" class="col text-right" v-for="i in 10" :key="i">{{ 2015+i }}</th>
                      <th style="width: 8.33%" class="col text-right">Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>Resettlement Action Plan</td>
                      <td v-for="i in 10" :key="i" class="text-right">
                        {{ project.resettlement_action_plan[`y${2015+i}`] }}
                      </td>
                      <td class="text-right">
                        {{ project.resettlement_action_plan.total | money }}
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
      </q-card-section>
    </q-card>

    <q-card flat bordered class="bg-grey-1">
      <q-card-section class="row bg-primary text-white">
        <span class="text-h6">
          Financial Information
        </span>
        <q-space></q-space>
        <q-btn :icon="expanded6 ? 'expand_less' : 'expand_more'" flat round @click="expanded6 = !expanded6"></q-btn>
      </q-card-section>

      <q-card-section v-show="expanded6">
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
                <q-item-label>
                  {{ (project.funding_sources
                  && project.funding_sources.length
                  && project.funding_sources.map(x => x.name).join(', ')) || '-' }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </div>
          <div class="col">
            <q-item>
              <q-item-section>
                <q-item-label caption>Funding Institutions</q-item-label>
                <q-item-label>
                  {{ (project.funding_institutions
                  && project.funding_institutions.length
                  && project.funding_institutions.map(x => x.name).join(', ')) || '-' }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <q-item>
              <q-item-section>
                <q-item-label caption>Implementation Mode</q-item-label>
                <q-item-label>
                  {{ (project.implementation_mode && project.implementation_mode.name) || '-' }}
                </q-item-label>
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
                <q-item-label caption>Investment Requirement by Funding Source (PhP)</q-item-label>
                <q-item-label>
                  <q-markup-table flat bordered dense square class="bg-transparent">
                    <thead>
                    <tr>
                      <th style="width: 8.33%">Funding Source</th>
                      <th style="width: 8.33%" class="text-right" v-for="i in 10" :key="i">{{ 2015+i }}</th>
                      <th style="width: 8.33%" class="text-right">Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(fs, index) in project.fs_investments" :key="index">
                      <td>{{ fs.funding_source && fs.funding_source.name }}</td>
                      <td class="text-right" v-for="i in 10" :key="i">{{ fs[`y${2015+i}`] | money }}</td>
                      <td class="text-right">{{ fs.total | money }}</td>
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
                <q-item-label caption>Investment Requirement by Region (PhP)</q-item-label>
                <q-item-label>
                  <q-markup-table flat bordered dense square class="bg-transparent">
                    <thead>
                    <tr>
                      <th style="width: 8.33%">Region</th>
                      <th style="width: 8.33%" class="text-right" v-for="i in 10" :key="i">{{ 2015+i }}</th>
                      <th style="width: 8.33%" class="text-right">Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(ri, index) in project.region_investments" :key="index">
                      <td>{{ ri.region && ri.region.name }}</td>
                      <td class="text-right" v-for="i in 10" :key="i">{{ ri[`y${2015+i}`] | money }}</td>
                      <td class="text-right">{{ ri.total | money }}</td>
                    </tr>
                    </tbody>
                  </q-markup-table>
                </q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <q-card flat bordered class="bg-grey-1">
      <q-card-section class="row bg-primary text-white">
        <span class="text-h6">
          Updates
        </span>
        <q-space></q-space>
        <q-btn :icon="expanded7 ? 'expand_less' : 'expand_more'" flat round @click="expanded7 = !expanded7"></q-btn>
      </q-card-section>

      <q-card-section v-show="expanded7">
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
                          <th style="width: 8.33%"></th>
                          <th style="width: 8.33%" class="text-right" v-for="i in 10" :key="i">{{ 2015+i }}</th>
                          <th style="width: 8.33%" class="text-right">Total</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td>NEP</td>
                          <td class="text-right" v-for="i in 10" :key="i">{{ project.nep[`y${2015+i}`] | money }}</td>
                          <td class="text-right">
                            {{ project.nep.total | money }}
                          </td>
                        </tr>
                        <tr>
                          <td>GAA</td>
                          <td class="text-right" v-for="i in 10" :key="i">{{ project.allocation[`y${2015+i}`]  | money }}</td>
                          <td class="text-right">
                            {{ project.allocation.total | money }}
                          </td>
                        </tr>
                        <tr>
                          <td>Disbursement</td>
                          <td class="text-right" v-for="i in 10" :key="i">{{ project.disbursement[`y${2015+i}`] | money }}</td>
                          <td class="text-right">
                            {{ project.disbursement.total | money }}
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
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'ProjectView',
  props: [
    'project'
  ],
  data() {
    return {
      expanded1: true,
      expanded2: false,
      expanded3: false,
      expanded4: false,
      expanded5: false,
      expanded6: false,
      expanded7: false
    }
  },
  methods: {
    collapseAll() {
      console.log('collapsing all')
      let i
      for (i = 0; i <= 7; i++) {
        this[`expanded${i}`] = false
      }
    },
    expandAll() {
      console.log('expanding all')
      let i
      for (i = 0; i <= 7; i++) {
        this[`expanded${i}`] = true
      }
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
  }
}
</script>
