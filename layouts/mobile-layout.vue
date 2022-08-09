<template>
  <div class="font-poppins">
    <!-- Navigation Bar -->
    <navbar-mobile id="navbar-mobile" />
    <div id="body-apps">
      <nuxt keep-alive />
    </div>
  </div>
</template>

<script>
import NavbarMobile from "./navbar/mobile-navbar.vue";

export default {
  components: {
    NavbarMobile,
  },
  mounted() {},
  methods: {},
};
</script>
