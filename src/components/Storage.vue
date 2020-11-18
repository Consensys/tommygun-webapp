<template>
  <div class="ml-4 mr-4 mt-4">
    <b-form class="ml-2 mr-2" @reset="reset" @submit="createStorage">
      <b-alert v-model="alert.success.show" class="mt-3" dismissible variant="success">
        {{ alert.success.message }}
      </b-alert>
      <b-input-group class="mt-2" prepend="Smart contract iteration">
        <b-form-input
            v-model="form.smartContractIteration"
            placeholder="Enter the number of smart contract call"
            required
            type="number"
        ></b-form-input>
      </b-input-group>
      <b-input-group class="mt-2" prepend="Entries per iteration">
        <b-form-input
            v-model="form.entriesPerIteration"
            placeholder="Enter the number of entries per iteration"
            required
            type="number"
        ></b-form-input>
      </b-input-group>

      <b-button class="mr-2 mt-2" type="submit" variant="primary">Fire</b-button>
      <b-button class="ml-2 mt-2" type="reset" variant="danger">Reset</b-button>
      <b-button class="ml-2 mt-2" @click="deployContract">Deploy contract</b-button>

    </b-form>
  </div>
</template>

<script>

export default {
  name: "Storage",
  data() {
    return {
      alert: {
        success: {
          show: false,
          message: '',
        },
      },
      form: {
        smartContractIteration: 1,
        entriesPerIteration: 1,
      },
    }
  },
  methods: {
    async deployContract() {
      const response = await this.$store.state.services.state.deployContract();
      this.alert.success.message = `contract deployed at: ${response.deployedContractAddress}`;
      this.alert.success.show = true;
    },
    async createStorage(evt) {
      evt.preventDefault();
      const fireResponse = await this.$store.state.services.fire.fireState(this.form.smartContractIteration, this.form.entriesPerIteration);
      this.alert.success.message = `task submitted with id: ${fireResponse.taskID}`;
      this.alert.success.show = true;
    },
    reset(evt) {
      evt.preventDefault();
    },
  }
}

</script>

<style scoped>

</style>