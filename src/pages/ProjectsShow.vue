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
        <div class="text-subtitle1">
          {{project.description}}
        </div>
        <div class="row items-center">
          <q-icon name="person" /> &nbsp;Created by {{(project.creator && project.creator.name) || '-'}}
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
          <div class="col-3">
            <q-item>
              <q-item-section>
                <q-item-label caption>PAP Type</q-item-label>
                <q-item-label>{{ project.pap_type && project.pap_type.name }}</q-item-label>
              </q-item-section>
            </q-item>
          </div>
          <div class="col-3">
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
          <div class="col-3">
            <q-item>
              <q-item-section>
                <q-item-label caption>Spatial Coverage</q-item-label>
                <q-item-label>{{ project.spatial_coverage && project.spatial_coverage.name }}</q-item-label>
              </q-item-section>
            </q-item>
          </div>
          <div class="col-9">
            <q-item>
              <q-item-section>
                <q-item-label caption>Regions Covered</q-item-label>
                <q-item-label>{{ (project.regions && project.regions.length && project.regions.map(r => r.name).join(', ')) || '-' }}</q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </div>
        <div class="row">
          <div class="col-3">
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
          <div class="col-3">
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
          <div class="col-3">
            <q-item>
              <q-item-section>
                <q-item-label caption>Typology</q-item-label>
                <q-item-label>{{ (project.pip_typology && project.pip_typology.name) || '-' }}</q-item-label>
              </q-item-section>
            </q-item>
          </div>
          <div class="col-3">
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
          <div class="col-3">
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
          <div class="col-3">
            <q-item>
              <q-item-section>
                <q-item-label caption>Type of CIP</q-item-label>
                <q-item-label>{{ (project.cip_type && project.cip_type.name) || '-' }}</q-item-label>
              </q-item-section>
            </q-item>
          </div>
          <div class="col-3">
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
          <div class="col-3">
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
          <div class="col-3">
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
          <div class="col-3">
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
          <div class="col-3">
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
          <div class="col-9">
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
  created() {
    const slug = this.$route.params.slug
    this.getProject(slug)
  }
}
</script>
