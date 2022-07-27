<template>
<div>
    <!-- Navigation Bar -->
    <div class="fixed top-0 left-0 w-full flex items-center py-3 px-3 shadow-md"
        style="background-color: #F6FAF8; z-index: 1000;">

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
    }
}

</script>