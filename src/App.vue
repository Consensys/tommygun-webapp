<template>
  <div id="app">
    <app-nav-bar/>
    <app-settings/>
    <router-view/>
  </div>
</template>

<script>

import AppNavBar from "@/components/AppNavBar";
import AppSettings from "@/components/AppSettings";

export default {
  name: 'App',
  components: {
    AppNavBar,
    AppSettings
  },
}
</script>

<style>
</style>
