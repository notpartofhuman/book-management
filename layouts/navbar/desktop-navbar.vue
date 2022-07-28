<template>
<div>
    <!-- Navigation Bar -->
    <div class="fixed top-0 left-0 w-full flex items-center py-3 px-3" id="change">

        <!-- Buttom show menu -->
        <!-- <div class="px-1 mr-2" @click="showMenu()"> -->
        <!-- <solid-menu-icon class="w-5 text-gray" /> -->
        <!-- </div> -->

        <!-- Logo -->
        <img class="w-10" src="/favicon.png" />
        <div class="ml-2 font-semibold text-xl">Book Management</div>

        <!-- Menu -->
        <div class="ml-auto pr-1 inline-flex items-center">
            <NuxtLink to="/DesktopCategories" class="mx-5"> Categories </NuxtLink>
            <NuxtLink to="/DesktopBooks" class="mx-5"> Books </NuxtLink>
            <SolidUserCircleIcon class="w-10 ml-5" />
        </div>
    </div>

    <!-- Pop Up Menu -->
    <!-- <div class="fixed top-0 left-0 w-full bg-white" style="min-height: 100vh" -->
    <!-- v-if="isShowMenu == true"> -->

    <!-- Judul -->
        <!-- <div class="flex items-center w-full py-3 pl-4 pr-2"> -->
            <!-- <div class="font-bold" style="font-size: 16px; letter-spacing: 0.5px">Menu</div> -->

            <!-- Button Close Menu --> 
            <!-- <div class="ml-auto" @click="showMenu()"> -->
            <!-- <OutlineXIcon class="w-7" /> -->
            <!-- </div> -->
        <!-- </div> -->
    <!-- </div> -->
</div>
</template>

<script>
export default {
    data() {
        return {
            isShowMenu: false
        }
    },

    methods: {
        showMenu() {
            if (this.isShowMenu) {
                this.isShowMenu = false
            } else {
                this.isShowMenu = true
            }
        }
    },
    mounted() {
        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                document.getElementById("change").style.background = "#F6FAF8";
                document.getElementById("change").style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
            } else {
                document.getElementById("change").style.background = "transparent";
                document.getElementById("change").style.boxShadow = "none";
            }
        }
    },
}

</script>

<style scoped>
#change {
    z-index: 1000;
    transition: 0.4s; /* Add a transition effect (when scrolling - and font size is decreased) */
}
</style>