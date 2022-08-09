<template>
  <div style="background-color: #f6faf8">
    <div class="pt-24 backpiccategory">
      <p
        class="font-bold text-4xl ml-12 mt-1 text-center"
        style="color: #27211e"
      >
        All Categories
      </p>
      <center style="color: #6a645d">
        <SolidHomeIcon class="h-5 inline-flex" /> &nbsp;> Categories
      </center>
      <div class="pt-20 pb-2"></div>
    </div>

    <div class="grid grid-cols-4 pt-10">
      <div
        v-for="(categori, index) in categories"
        :key="index"
        @click="goCategoriesDetail(categori.slug)"
        class="relative mx-2 mt-2"
        :class="index % 4 == 0 ? 'mr-1.5' : 'ml-1.5'"
      >
        <img
          class="w-full rounded-md"
          :src="backendStorageHosts.bookManagement.categories + categori.image"
        />
        <!-- Overlay Categori Name -->
        <!-- <div
            class="absolute pt-48 pl-10"
            style="
              height: 100%;
              width: 100%;
              color: #f6faf8;
              background-color: rgba(225, 69, 0, 0.3);
            "
          >
            <div class="absolute whitespace-normal font-semibold">
              {{ toTitleCase(categori.name) }}
            </div>
          </div> -->

        <div class="absolute top-0 left-3" style="color: #f6faf8">
          <div class="mt-3 mb-3 flex flex-col text-sm">
            <h1 class="text-lg font-bold">
              {{ toTitleCase(categori.name) }}
            </h1>
          </div>
        </div>
      </div>
    </div>
    <infinite-loading @distance="1" @infinite="getCategories">
      <div spinner="waveDots"></div>
    </infinite-loading>
  </div>
</template>

<script>
import { backendStorageHosts } from "../../app.config";
import InfiniteLoading from "vue-infinite-loading";

export default {
  components: {
    InfiniteLoading,
  },
  data() {
    return {
      backendStorageHosts: backendStorageHosts,
      categories: [],
      page: 1,
    };
  },
  methods: {
    getCategories($state) {
      this.$bookManagementApi
        .get("v1/categories", {
          params: {
            page: this.page,
          },
        })
        .then((resp) => {
          if (resp.data.data.length > 0) {
            this.categories.push(...resp.data.data);
            this.page += 1;
            $state.loaded();
          } else {
            $state.complete();
          }
        });
    },
    toTitleCase(str) {
      if (str != null) {
        return str.replace(/\w\S*/g, function (txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
      }
    },
    goCategoriesDetail(category_slug) {
      this.$router.push({
        name: "category-slug",
        params: {
          slug: category_slug,
        },
      });
    },
  },
  mounted() {},
};
</script>

<style scoped>
.backpiccategory {
  background-image: url("~/assets/resources/bgctg.png");
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: center;
}
</style>
