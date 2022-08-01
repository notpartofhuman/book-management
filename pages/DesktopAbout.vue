<template>
<div>
    <client-only>
        <div style="background: #F6FAF8">
            <div v-if="$device.isDesktop">
                <!-- Navigation Bar -->
<div class="fixed top-0 left-0 w-full flex items-center py-3 px-3" id="change" style="color:orangered; z-index: 1000">

        <!-- Buttom show menu -->
        <!-- <div class="px-1 mr-2" @click="showMenu()"> -->
        <!-- <solid-menu-icon class="w-5 text-gray" /> -->
        <!-- </div> -->

        <!-- Logo -->
        <NuxtLink to="/">
            <div class="inline-flex">
            <img class="w-10" src="/favicon.png" />
            <div class="ml-2 font-semibold text-2xl">Autumn Athenaeum</div>
            </div>
        </NuxtLink>

        <!-- Menu -->
        <div class="ml-auto pr-1 inline-flex items-center">
            <NuxtLink to="/DesktopAbout" class="mx-5"> About Us </NuxtLink>
            <NuxtLink to="/DesktopCategories" class="mx-5"> Categories </NuxtLink>
            <NuxtLink to="/DesktopBooks" class="mx-5"> Books </NuxtLink>
            <SolidUserCircleIcon class="w-10 ml-5" />
        </div>
                </div>
                <!-- Content -->
                <DesktopAboutComp />
            </div>
        </div>
    </client-only>
</div>
</template>

<script>
export default {
    mounted() {
        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                document.getElementById("change").style.background = "#F6FAF8";
                document.getElementById("change").style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
                document.getElementById("change").style.color = "black";
            } else {
                document.getElementById("change").style.background = "transparent";
                document.getElementById("change").style.boxShadow = "none";
                document.getElementById("change").style.color = "orangered";
            }
        }
    },
}
</script>