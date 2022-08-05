<template>
  <div>
    <client-only>
      <div style="background: #f6faf8; color: #27211e">
        <div v-if="$device.isDesktop" style="padding-top: 55px">
          <!-- Navigation Bar -->
          <div
            class="fixed top-0 left-0 w-full flex items-center py-3 px-3 shadow-md"
            style="z-index: 1000; background-color: #f6faf8"
          >
            <!-- <div class="flex items-center font-bold" @click="$router.go(-1)"> -->
            <NuxtLink to="/">
              <SolidHomeIcon class="w-8 mb-2 inline-flex items-center"
            /></NuxtLink>
            <p class="font-semibold text-xl inline-flex">&nbsp; All Books</p>

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
    window.onscroll = null;
  },
};
</script>

<style scoped>
a.nuxt-link-exact-active {
  color: #ff4500;
}
a:hover {
  color: #ff4500;
}
</style>
