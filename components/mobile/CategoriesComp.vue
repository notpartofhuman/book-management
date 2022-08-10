<template>
  <div style="background-color: #f6faf8">
    <div class="pt-10 backpiccategory">
      <p
        class="font-bold text-2xl ml-12 mt-1 text-center"
        style="color: #27211e"
      >
        All Categories
      </p>
      <center style="color: #6a645d">
        <SolidHomeIcon class="h-5 inline-flex" /> &nbsp;> Categories
      </center>
      <div class="pt-10 pb-2"></div>
    </div>

    <div class="grid grid-cols-2 px-3 pt-3">
      <div
        v-for="(categori, index) in categories"
        :key="index"
        @click="goCategoriesDetail(categori.slug)"
        class="relative overflow-hidden rounded-lg mb-3"
        :class="index % 2 == 0 ? 'mr-1.5' : 'ml-1.5'"
      >
        <img
          class="w-full rounded-md"
          :src="backendStorageHosts.bookManagement.categories + categori.image"
        />
        <!-- Overlay Categori Name -->
        <div
          class="absolute top-0 left-0"
          style="
            background: linear-gradient(
              180deg,
              rgba(255, 255, 255, 0) 0%,
              rgba(67, 67, 67, 0.5) 56.27%,
              rgba(0, 0, 0, 0.52) 76.51%,
              rgba(0, 0, 0, 0.67) 100%
            );
            height: 100%;
            width: 100%;
          "
        >
          <div
            class="absolute bottom-0 left-0 whitespace-normal text-white pl-3 pb-2 font-semibold"
          >
            {{ toTitleCase(categori.name) }}
          </div>
        </div>
      </div>
    </div>
    <infinite-loading @distance="1" @infinite="getCategories">
      <div spinner="waveDots" slot="no-more"></div>
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
