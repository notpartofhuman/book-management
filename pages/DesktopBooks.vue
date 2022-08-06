<template>
  <div>
    <client-only>
      <div style="background: #f6faf8">
        <div v-if="$device.isDesktop">
          <!-- Navigation Bar -->
          <div
            class="fixed top-0 left-0 w-full flex items-center py-3 px-3"
            id="changebook"
            style="color: orangered; z-index: 1000"
          >
            <!-- Buttom show menu -->
            <!-- <div class="px-1 mr-2" @click="showMenu()"> -->
            <!-- <solid-menu-icon class="w-5 text-gray" /> -->
            <!-- </div> -->

            <!-- Logo -->
            <NuxtLink to="/">
              <div class="inline-flex">
                <img class="w-10" src="/favicon.png" />
                <div class="ml-2 font-semibold text-2xl" style="color: #ff4500">
                  Autumn Athenaeum
                </div>
              </div>
            </NuxtLink>

            <!-- Menu -->
            <div class="ml-auto pr-1 inline-flex items-center">
              <NuxtLink to="/DesktopAbout" class="mx-5"> About Us </NuxtLink>
              <NuxtLink to="/DesktopCategories" class="mx-5">
                Categories
              </NuxtLink>
              <NuxtLink to="/DesktopBooks" class="mx-5">
                Books
                <hr
              /></NuxtLink>
              <SolidUserCircleIcon class="w-10 ml-5" />
            </div>
          </div>
          <!-- Content -->
          <DesktopBooksComp />
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
        document.body.scrollTop > 10 ||
        document.documentElement.scrollTop > 10
      ) {
        document.getElementById("changebook").style.background = "#F6FAF8";
        document.getElementById("changebook").style.boxShadow =
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
        document.getElementById("changebook").style.color = "#27211e";
      } else {
        document.getElementById("changebook").style.background = "transparent";
        document.getElementById("changebook").style.boxShadow = "none";
        document.getElementById("changebook").style.color = "orangered";
      }
    }
  },
};
</script>

<style scoped>
#changebook {
  z-index: 1000;
  transition: 0.4s; /* Add a transition effect (when scrolling - and font size is decreased) */
}
a.nuxt-link-exact-active {
  color: #ff4500;
}
a:hover {
  color: #ff4500;
}
</style>
