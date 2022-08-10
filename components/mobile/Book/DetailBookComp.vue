<template>
  <div style="background-color: #f6faf8" class="pt-16">
    <!-- Navigation Bar -->
    <div
      class="fixed top-0 left-0 w-full flex items-center py-3 px-3 shadow md"
      style="z-index: 1000"
    >
      <div class="flex items-center font-bold" @click="$router.go(-1)">
        <SolidChevronLeftIcon class="w-8 mr-1.5 text-blue-lochmara" /> Book
        Detail
      </div>
    </div>
    <!-- Content -->
    <div v-if="book != null" style="padding-bottom: 77px">
      <!-- Cover Book -->

      <div style="position: relative; width: 100%; padding-top: 100%">
        <div
          class="flex justify-center items-center"
          style="position: absolute; top: 0; left: 0; bottom: 0; right: 0"
        >
          <img
            :src="backendStorageHosts.bookManagement.books + book.cover"
            style="max-height: 100%; max-width: 100%"
          />
        </div>
      </div>
      <!-- Title, Author, and Price -->
      <div
        class="py-3 px-3.5 rounded-xl shadow-lg"
        style="background-color: #f6faf8"
      >
        <div class="py-3 px-3.5">
          <div class="font-bold" style="font-size: 17px">
            {{ toTitleCase(book.title) }}
          </div>
          <div class="text-grey-600" style="font-size: 15px">
            by {{ book.author }}
          </div>
        </div>
        <!-- Product Detail -->
        <div class="py-3 px-3.5" style="color: #27211e">
          <div class="mb-3 font-bold">Product Detail</div>
          <!-- Publisher, Stock, Weight -->
          <div class="mb-3" style="font-size: 14px; color: #27211e">
            <div class="flex mb-1">
              <div class="w-1/5">Publisher</div>
              <div class="w-4/5 pl-4">: {{ book.publisher }}</div>
            </div>
            <div class="flex mb-1" style="font-size: 14px">
              <div class="w-1/5">Stock</div>
              <div class="w-4/5 pl-4">: {{ book.stock }}</div>
            </div>
            <div class="flex mb-1" style="font-size: 14px">
              <div class="w-1/5">Status</div>
              <div class="w-4/5 pl-4">: {{ toTitleCase(book.status) }}</div>
            </div>
            <div class="flex mb-1" style="font-size: 14px">
              <div class="w-1/5">Weight</div>
              <div class="w-4/5 pl-4">: {{ book.weight }} kg</div>
            </div>
          </div>
          <!-- Description -->
          <div class="text-justify" style="font-size: 14px">
            &nbsp;&nbsp;&nbsp;&nbsp;{{ book.description }}
          </div>
        </div>
      </div>
      <!-- Button to Cart -->
      <div
        class="w-full p-3 fixed bottom-0 left-0 z-50"
        style="background-color: #ff4500"
      >
        <div
          class="flex items-center justify-center py-2 px-auto"
          style="color: #f6faf8"
        >
          <SolidShoppingCartIcon class="w-6 mr-3" /> Rp.
          {{ setRupiah(book.price).replace("..00", "") }}
        </div>
      </div>

      <div class="mt-8 font-semibold" style="font-size: 18px; color: #27211e">
        &nbsp;&nbsp; Recommendation
        <hr />
        <div id="outer_wrapper">
          <div class="px-3 pt-5" id="inner_wrapper">
            <div v-for="(top4s, index) in top4s" :key="index" class="box">
              <!-- Book Card -->
              <book-card-helper :book="top4s" :index="index" />
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-10 mb- font-semibold"
        style="font-size: 18px; color: #27211e"
      >
        &nbsp;&nbsp;Category Suggestions
        <hr />
        <div id="outer_wrapperctg">
          <div class="px-3 pt-5" id="inner_wrapperctg">
            <div
              v-for="(categori, index) in categories"
              :key="index"
              @click="goCategoriesDetail(categori.slug)"
              class="relative mx-2 box"
            >
              <img
                class="w-full rounded-md"
                :src="
                  backendStorageHosts.bookManagement.categories + categori.image
                "
              />
              <div class="absolute top-0 left-3" style="color: #f6faf8">
                <div class="mt-2 mb-3 flex flex-col">
                  <h1 class="text-md font-bold">
                    {{ toTitleCase(categori.name) }}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { backendStorageHosts } from "../../../app.config";
import InfiniteLoading from "vue-infinite-loading";
import BookCardHelper from "../helper/BookCardHelper";

export default {
  components: {
    InfiniteLoading,
    BookCardHelper,
  },

  data() {
    return {
      bookSlug: this.$route.params.slug,
      backendStorageHosts: backendStorageHosts,
      book: null,
      categories: [],
      page: 1,
    };
  },

  created() {
    this.getBookDetail(), this.getCategories(), this.getTop4s();
  },

  methods: {
    getCategories() {
      this.$bookManagementApi.get("v1/categories/random/5").then((resp) => {
        this.categories = resp.data.data;
        console.log(this.categories);
      });
    },
    goCategoriesDetail(category_slug) {
      this.$router.push({
        name: "category-slug",
        params: {
          slug: category_slug,
        },
      });
    },
    getTop4s() {
      this.$bookManagementApi.get("v1/books/top/10").then((resp) => {
        this.top4s = resp.data.data;
      });
    },
    getBookDetail() {
      this.$bookManagementApi
        .get("v1/books/slug/" + this.bookSlug)
        .then((resp) => {
          this.book = resp.data.data;
        });
    },
    toTitleCase(str) {
      if (str != null) {
        return str.replace(/\w\S*/g, function (txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
      }
    },
    setRupiah(angka) {
      if (angka != undefined) {
        var rupiah = "";
        var angkarev = angka.toString().split("").reverse().join("");
        for (var i = 0; i < angkarev.length; i++)
          if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + ".";
        return rupiah
          .split("", rupiah.length - 1)
          .reverse()
          .join("");
      }
    },
  },
};
</script>

<style scoped>
#outer_wrapper {
  overflow: scroll;
  width: 100%;
}
#outer_wrapper #inner_wrapper {
  width: 1665px; /* If you have more elements, increase the width accordingly */
}
#outer_wrapper #inner_wrapper div.box {
  /* Define the properties of inner block */
  width: 10rem;
  height: fit-content;
  float: left;
  margin: 0 4px 0 0;
}
#outer_wrapperctg {
  overflow: scroll;
  width: 100%;
}
#outer_wrapperctg #inner_wrapperctg {
  width: 1164px; /* If you have more elements, increase the width accordingly */
}
#outer_wrapperctg #inner_wrapperctg div.box {
  /* Define the properties of inner block */
  width: 14rem;
  height: fit-content;
  float: left;
  margin: 0 4px 0 0;
}
</style>
