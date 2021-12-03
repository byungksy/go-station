<template>
  <router-link :to="{name: 'login'}">Login Page</router-link>
  <router-link :to="{name: 'channels'}">Channels Page</router-link>
  <router-link :to="{name: 'live-channel'}">Channel - Live Page</router-link>
  <router-link :to="{name: 'record-channel'}">Channel - Record Page</router-link>
</template>

<script>
export default {
  name: 'Sitemap.vue'
};
</script>

<style scoped>

</style>
