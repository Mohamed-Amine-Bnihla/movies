<template>
  <header-movie></header-movie>
  <router-view />
  <footer-movie></footer-movie>
</template>
<script>
import headerMovie from "./components/Header.vue";
import footerMovie from "./components/Footer.vue";
export default {
  components: {
    headerMovie,
    footerMovie,
  },
};
</script>
<style>
</style>
