<template>
  <div>
    <b-form class="ml-2 mr-2" @reset="reset" @submit="createAccounts">
      <b-alert v-model="alert.success.show" class="mt-3" dismissible variant="success">
        {{ alert.success.message }}
      </b-alert>

      <b-form-row class="mt-2 ml-1">
        <b-button class="mr-2" type="submit" variant="primary">Fire</b-button>
        <b-button class="ml-2" type="reset" variant="danger">Reset</b-button>
      </b-form-row>
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
      form: {},
    }
  },
  methods: {
    createAccounts(evt) {
      evt.preventDefault();
    },
    reset(evt) {
      evt.preventDefault();
    },
  }
}

</script>

<style scoped>

</style>