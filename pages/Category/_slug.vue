<template>
  <div style="background-color: #f6faf8">
    <client-only>
      <div v-if="$device.isDesktop">
        <!-- Navigation Bar -->
        <div
          class="fixed top-0 left-0 w-full flex items-center py-3 px-3 shadow-md"
          style="z-index: 1000; background-color: #f6faf8; color: #27211e"
        >
          <!-- <div class="flex items-center font-bold" @click="$router.go(-1)"> -->
          <NuxtLink to="/">
            <SolidHomeIcon class="w-8 mb-2 inline-flex items-center"
          /></NuxtLink>
          <p class="font-semibold text-xl inline-flex">
            &nbsp; Category Details
          </p>
          <!-- Menu -->
          <div class="ml-auto pr-1 inline-flex items-center">
            <NuxtLink to="/DesktopAbout" class="mx-5"> About Us </NuxtLink>
            <NuxtLink
              to="/DesktopCategories"
              class="mx-5"
              style="color: #ff4500"
            >
              Categories
              <hr
            /></NuxtLink>
            <NuxtLink to="/DesktopBooks" class="mx-5"> Books </NuxtLink>
            <SolidUserCircleIcon class="w-10 ml-5" />
          </div>
        </div>
        <!-- Content -->
        <DesktopCategoryDetailCategoryComp />
      </div>

      <div v-else-if="$device.isMobileOrTablet">
        <!-- Navigation Bar -->
        <div
          class="fixed top-0 left-0 w-full flex items-center py-3 px-3 shadow-md"
          style="z-index: 1000; background-color: #f6faf8; color: #27211e"
        >
          <div class="flex items-center font-bold" @click="$router.go(-1)">
            <SolidChevronLeftIcon class="w-8 mr-1.5 text-blue-lochmara" />
            Category Detail
          </div>
        </div>
        <!-- Content -->
        <MobileCategoryDetailCategoryComp />
      </div>
    </client-only>
  </div>
</template>

<script>
import { frontendHost, backendStorageHosts } from "../../app.config";

export default {
  mounted() {
    window.onscroll = null;
  },
  data() {
    return {
      seo: {
        name: "Autumn Athenaeum",
        description: "",
        image: "",
        url: "http://50.50.50.207:3000/favicon.png",
      },
      slug: this.$route.params.slug,
      hostname: frontendHost,
      backendStorageHosts: backendStorageHosts,
      slug: this.$route.params.slug,
    };
  },

  head() {
    return {
      title: this.seo.name,
      meta: [
        {
          charset: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          hid: "og:title",
          name: "og:title",
          content: this.seo.name,
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.seo.description,
        },
        {
          hid: "og:image",
          name: "og:image",
          content: this.seo.image,
        },
        {
          hid: "og:url",
          property: "og:url",
          content: this.seo.url,
        },
      ],
    };
  },

  async fetch() {
    await this.$bookManagementApi
      .get("v1/categories/slug/" + this.slug)
      .then((resp) => {
        this.seo.name = resp.data.data.name;
        this.seo.description = "Kategori Buku" + resp.data.data.name;
        this.seo.image =
          this.backendStorageHosts.bookManagement.categories +
          resp.data.data.image;
        this.seo.url = this.hostname + this.$route.path;
      });
  },
};
</script>

<style scoped>
a:hover {
  color: #ff4500;
}
</style>
