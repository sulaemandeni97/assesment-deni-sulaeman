<template>
  <nav-bar />
  <router-view />
</template>
<script>
import NavBar from "./layout/NavBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>

<style></style>
