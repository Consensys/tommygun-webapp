<template>
  <b-modal id="modal-settings" size="xl" title="Settings">
    <b-input-group class="mt-2" prepend="Backend URL">
      <b-form-input
          v-model="settings.backend.url"
          placeholder="Enter url"
          required
          type="url"
      ></b-form-input>
    </b-input-group>
  </b-modal>
</template>

<script>

import {mapState} from "vuex";

export default {
  name: "settings",
  data() {
    return {};
  },
  methods: {},
  computed: {
    ...mapState([
      'settings',
    ])
  },
}
</script>

<style scoped>

</style>