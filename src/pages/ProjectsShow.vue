<template>
  <q-page>
    <q-card square flat bordered class="bg-primary text-white" v-if="project">
      <q-card-section>
        <div class="text-caption">
          Code: {{project.code}}
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
          <q-btn outline label="Edit" icon-right="edit" />
          <q-btn outline label="Delete" icon-right="delete" />
          <q-btn outline label="Share" icon-right="share" />
        </div>
      </q-card-section>
    </q-card>
    <div class="q-pa-md q-gutter-md">
      <q-card square flat bordered class="bg-grey-1 q-pa-md">
        <div class="row">
          ...
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
