<template>
  <div>
    <div class="text-3xl font-semibold text-center mt-8">All Categories</div>
    <div class="flex lg:h-screen w-screen lg:overflow-hidden xs:flex-col">
      <div class="inline-flex">
        <div
          v-for="(categori, index) in categories"
          :key="index"
          @click="goCategoriesDetail(categori.slug)"
          class="relative lg:w-1/2 xs:w-full xs:h-84 lg:h-96 mt-20"
          :class="index % 8 == 0 ? 'mr-0.5' : 'ml-0.5'"
        >
          <img
            class="h-full w-full object-cover"
            :src="
              backendStorageHosts.bookManagement.categories + categori.image
            "
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

          <div
            class="absolute top-4 left-8"
            style="color: #f6faf8; background-color: rgba(225, 69, 0, 0.3)"
          >
            <div class="mt-3 mb-3 flex flex-col text-sm">
              <h1 class="text-xl font-bold">
                {{ toTitleCase(categori.name) }}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <infinite-loading @distance="1" @infinite="getCategories">
        <div spinner="waveDots" slot="no-more"></div>
      </infinite-loading>
    </div>
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

<style scoped></style>
