<template>
<div class="font-poppins">
    <!-- Navigation Bar -->
    <navbar-desktop id="navbar-desktop" />
        <div id="body-apps" style="padding-top: 55px">
            <nuxt keep-alive />
        </div>
    </div>
</template>

<script>
import NavbarDesktop from './navbar/desktop-navbar.vue'

export default {
    components: {
        NavbarDesktop
    },
    mounted() {},
    methods: {}
}
</script>