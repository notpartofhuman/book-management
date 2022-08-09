<template>
  <div style="background-color: #f6faf8">
    <div class="pt-24 backpicbook">
      <p
        class="font-bold text-4xl ml-12 mt-1 text-center"
        style="color: #27211e"
      >
        All Books
      </p>
      <center style="color: #6a645d">
        <SolidHomeIcon class="h-5 inline-flex" /> &nbsp;> Books
      </center>
      <div class="pt-32 pb-2"></div>
    </div>
    <div class="grid grid-cols-5 px-3 pt-5">
      <div
        v-for="(book, index) in books"
        :key="index"
        class="relative overflow-hidden rounded-lg"
      >
        <book-card-helper :book="book" :index="index" />
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
import BookCardHelper from "./helper/BookCardHelper.vue";

export default {
  components: {
    InfiniteLoading,
    BookCardHelper,
  },
  data() {
    return {
      books: [],
      backendStorageHosts: backendStorageHosts,
      page: 1,
    };
  },
  methods: {
    getCategories($state) {
      this.$bookManagementApi
        .get("v1/books", {
          params: {
            page: this.page,
          },
        })
        .then((resp) => {
          if (resp.data.data.length > 0) {
            this.books.push(...resp.data.data);
            this.page += 1;
            $state.loaded();
          } else {
            $state.complete();
          }
        });
    },
  },
};
</script>

<style scoped>
.backpicbook {
  background-image: url("~/assets/resources/bgbook.png");
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: center;
}
</style>
