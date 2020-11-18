<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="warning">
      <b-navbar-brand @click="navToHome">TommyGun</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item @click="navToAccount">Account</b-nav-item>
          <b-nav-item @click="navToStorage">Storage</b-nav-item>
          <b-nav-item @click="navToTask">Task</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-button variant="light" @click="onClickSettings">
            <b-icon aria-hidden="true" icon="gear-fill"></b-icon>
          </b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<script>

export default {
  name: "AppNavBar",
  methods: {
    navToHome() {
      this.$router.push({path: '/'});
    },
    navToAccount() {
      this.$router.push({path: '/account'});
    },
    navToStorage() {
      this.$router.push({path: '/storage'});
    },
    navToTask() {
      this.$router.push({path: '/task'});
    },
    onClickSettings() {
      this.$bvModal.show('modal-settings');
    },
  },
}
</script>

<style scoped>

</style>