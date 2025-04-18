<template>
  <div>
    <client-only>
      <div style="background: #f6faf8">
        <div v-if="$device.isDesktop">
          <!-- Navigation Bar -->
          <div
            class="fixed top-0 left-0 w-full flex items-center py-3 px-3"
            id="changecategory"
            style="color: #27211e; z-index: 1000"
          >
            <!-- Buttom show menu -->
            <!-- <div class="px-1 mr-2" @click="showMenu()"> -->
            <!-- <solid-menu-icon class="w-5 text-gray" /> -->
            <!-- </div> -->

            <!-- Logo -->
            <NuxtLink to="/">
              <div class="inline-flex">
                <img
                  class="w-10"
                  src="~/assets/resources/skincare/logo skincare.png"
                />
                <div class="ml-2 font-semibold text-2xl" style="color: #cd9b7b">
                  HBeauty Care
                </div>
              </div>
            </NuxtLink>

            <!-- Menu -->
            <div class="ml-auto pr-1 inline-flex items-center">
              <NuxtLink to="/DesktopAbout" class="mx-5 anav"> Klinik </NuxtLink>
              <NuxtLink
                to="/DesktopCategories"
                class="mx-5 font-bold"
                style="color: #cd9b7b"
              >
                Skincare
                <hr />
              </NuxtLink>
              <NuxtLink to="/DesktopBooks" class="mx-5 anav"> Salon </NuxtLink>
              <!-- <SolidUserCircleIcon class="w-10 ml-5" /> -->
            </div>
          </div>
          <!-- Content -->
          <DesktopCategoriesComp />
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
export default {
  mounted() {
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        document.getElementById("changecategory").style.background = "#F6FAF8";
        document.getElementById("changecategory").style.boxShadow =
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
        document.getElementById("changecategory").style.color = "#27211e";
      } else {
        document.getElementById("changecategory").style.background =
          "transparent";
        document.getElementById("changecategory").style.boxShadow = "none";
        document.getElementById("changecategory").style.color = "#27211e";
      }
    }
  },
};
</script>

<style scoped>
#changecategory {
  z-index: 1000;
  transition: 0.4s; /* Add a transition effect (when scrolling - and font size is decreased) */
}
a.nuxt-link-exact-active {
  color: #27211e;
}
.anav:hover {
  color: #cd9b7b;
}
</style>
