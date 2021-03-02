<template>
  <q-page padding>
    <pre>
      {{ modifications }}
    </pre>
    <q-list>
      <q-item-label header class="text-uppercase">
        Pending Approval
      </q-item-label>
      <q-item v-for="mod in modifications" :key="mod.id">
        <q-item-section avatar></q-item-section>
        <q-item-section>
          <q-item-label>
            {{ mod.modifications.title.modified }}
          </q-item-label>
          <q-item-label caption>
            By {{ mod.modifier.name }}
          </q-item-label>
        </q-item-section>
        <q-item-section side>
          <div class="row">
            <q-btn color="positive" icon="thumb_up_alt" flat round @click="confirmApproval(mod.id)"></q-btn>
            <q-btn color="negative" icon="thumb_down_alt" flat round @click="confirmDisapproval(mod.id)"></q-btn>
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: 'PagePending',
  data() {
    return {
      modifications: null
    }
  },
  methods: {
    confirmApproval() {
      //
      this.$q.dialog({
        title: 'Confirm Approval',
        message: 'This will add the project into the list. This action cannot be undone.',
        cancel: true
      })
    },
    confirmDisapproval() {
      //
      this.$q.dialog({
        title: 'Confirm Disapproval',
        message: 'This will delete the project from the pending approval permanently. This action cannot be undone.',
        cancel: true
      })
    }
  },
  mounted() {
    this.$axios.get('/modifications')
      .then(res => {
        this.modifications = res.data
      })
  }
}
</script>
