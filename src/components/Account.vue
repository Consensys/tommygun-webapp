<template>
  <div class="ml-4 mr-4 mt-4">
    <b-form class="ml-2 mr-2" @reset="reset" @submit="createAccounts">
      <b-alert v-model="alert.success.show" class="mt-3" dismissible variant="success">
        {{ alert.success.message }}
      </b-alert>
      <b-input-group class="mt-2" prepend="Number of accounts">
        <b-form-input
            v-model="form.accountNumber"
            placeholder="Enter account number"
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
  name: "Account",
  data() {
    return {
      alert: {
        success: {
          show: false,
          message: '',
        },
      },
      form: {
        accountNumber: 1,
      },
    }
  },
  methods: {
    async deployContract() {
      const response = await this.$store.state.services.account.deployContract();
      this.alert.success.message = `contract deployed at: ${response.deployedContractAddress}`;
      this.alert.success.show = true;
    },
    async createAccounts(evt) {
      evt.preventDefault();
      const fireResponse = await this.$store.state.services.fire.fireAccounts(this.form.accountNumber);
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