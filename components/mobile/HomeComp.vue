<template>
  <div style="background-color: #f6faf8">
    <div class="pt-28 backpicmobile">
      <center>
        <p class="font-bold text-4xl mt-2 text-center" style="color: #27211e">
          Discover Your Favorite Books
        </p>
        <p class="max-w-xs mt-3 text-center" style="color: #6a645d">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet
          malesuada enim, vel varius velit cursus non. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Maecenas non nisi tempor quam
          posuere semper.
        </p>
      </center>

      <div class="mx-10">
        <NuxtLink to="/books">
          <div
            class="w-full p-1 mt-28 shadow-md btnhover"
            style="border-radius: 8px"
          >
            <div class="flex items-center justify-center py-2 rounded-lg">
              All Books
            </div>
          </div>
        </NuxtLink>

        <NuxtLink to="/categories">
          <div
            class="w-full p-1 mt-7 shadow-md btnhover"
            style="border-radius: 8px"
          >
            <div class="flex items-center justify-center py-2 rounded-lg">
              All Categories
            </div>
          </div>
        </NuxtLink>
      </div>
      <center class="pt-12 pb-2"></center>
    </div>

    <div class="text-center mt-16">
      <p class="font-bold text-3xl mb-8" style="color: #27211e">
        Try Our Best Seller
      </p>
      <div class="grid grid-cols-2 flex-cols px-10">
        <div v-for="(top4, index) in top4s" :key="index">
          <!-- Book Card -->
          <book-card-helper :book="top4" :index="index" />
        </div>
      </div>
    </div>

    <div class="relative mx-10">
      <p
        class="font-bold text-2xl text-center my-10 pt-10"
        style="color: #27211e"
      >
        Welcome To <br />Autumn Athenaeum
      </p>
      <div class="pt-2 relative">
        <img class="w-56 mx-auto" src="~/assets/resources/bookleaves.png" />
      </div>
      <p class="max-w-md mt-3 text-justify" style="color: #6a645d">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi
        lorem, porttitor in ipsum quis, hendrerit luctus lacus. Sed ipsum enim,
        eleifend eu rhoncus sit amet, fermentum ac felis.
      </p>
      <p class="ml-2 my-1 mt-3 inline-flex" style="color: #6a645d">
        <OutlineCheckIcon class="h-8" style="color: orangered" /> Lorem ipsum
        dolor sit amet, consectetur adipiscing elit
      </p>
      <p class="ml-2 my-1 inline-flex" style="color: #6a645d">
        <OutlineCheckIcon class="h-8" style="color: orangered" /> Lorem ipsum
        dolor sit amet, consectetur adipiscing elit
      </p>
      <p class="ml-2 my-1 inline-flex" style="color: #6a645d">
        <OutlineCheckIcon class="h-8" style="color: orangered" /> Lorem ipsum
        dolor sit amet, consectetur adipiscing elit
      </p>
      <p class="ml-2 my-1 inline-flex" style="color: #6a645d">
        <OutlineCheckIcon class="h-8" style="color: orangered" /> Lorem ipsum
        dolor sit amet, consectetur adipiscing elit
      </p>

      <NuxtLink to="/">
        <center>
          <div
            class="w-full p-1 mt-10 shadow-md btnhover"
            style="border-radius: 8px"
          >
            <div class="flex items-center justify-center py-2 rounded-lg">
              Read More
            </div>
          </div>
        </center>
      </NuxtLink>
    </div>
    <div class="gradienthome">
      <!-- #192F37 -->
      <!-- #27211e -->
      <!-- style="color: #372923" -->
      <div class="grid flex-col mt-20" style="color: #27211e">
        <div class="pt-12 relative col-span-3 px-10">
          <p class="font-bold text-2xl mb-5 text-center">Autumn Athenaeum</p>
          <p class="max-w-xl text-justify leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et
            cursus justo, id dignissim enim. Cras lacinia viverra odio, a auctor
            odio rutrum et. Aliquam congue laoreet lorem, non congue quam
            commodo eget. Praesent iaculis est id mi scelerisque, sed
            condimentum lacus varius.
          </p>
        </div>

        <div
          class="grid-rows-2 relative pt-12 pl-10 mr-10"
          style="color: #27211e"
        >
          <!-- <img class="w-2/5 float-right mr-16" src="~/assets/resources/favicon.png" /> -->
          <p class="font-bold text-xl mb-5">Quick Links</p>
          <div class="mb-2.5">
            <NuxtLink to="/DesktopBooks" class="ahover">Books</NuxtLink>
          </div>
          <div class="mb-2.5">
            <NuxtLink to="/DesktopCategories" class="ahover"
              >Categories</NuxtLink
            >
          </div>
          <div class="mb-2.5">
            <NuxtLink to="/DesktopAbout" class="ahover">About Us</NuxtLink>
          </div>
          <div class="mb-2.5">
            <NuxtLink to="#" class="ahover">Terms & Condition</NuxtLink>
          </div>
          <div class="mb-2.5">
            <NuxtLink to="#" class="ahover">Privacy Policy</NuxtLink>
          </div>
        </div>

        <div class="relative pt-12 ml-5" style="color: #27211e">
          <p class="font-bold text-xl mb-5">Community</p>
          <div class="mb-2.5">
            <NuxtLink to="#" class="my-2 ahover">Discord</NuxtLink>
          </div>
          <div class="mb-2.5">
            <NuxtLink to="#" class="my-2 ahover">Facebook</NuxtLink>
          </div>
          <div class="mb-2.5">
            <NuxtLink to="#" class="my-2 ahover">Twitter</NuxtLink>
          </div>
          <div class="mb-2.5">
            <NuxtLink to="#" class="my-2 ahover">GitHub</NuxtLink>
          </div>
        </div>
      </div>
      <center>
        <div
          class="justify-center py-4 h-1/6 mb-0 font-semibold"
          style="color: #1e0d05"
        >
          Copyright &copy;2022 Autumn Athenaeum
        </div>
      </center>
    </div>
  </div>
</template>

<script>
import { backendStorageHosts } from "../../app.config";
import BookCardHelper from "./helper/BookCardHelper.vue";

export default {
  components: {
    BookCardHelper,
  },
  data() {
    return {
      backendStorageHosts: backendStorageHosts,
      top4s: [],
    };
  },
  created() {
    this.getTop4();
  },
  methods: {
    getTop4() {
      this.$bookManagementApi.get("v1/books/top/4").then((resp) => {
        this.top4s = resp.data.data;
      });
    },
  },
};
</script>

<style scoped>
.gradienthome {
  background: linear-gradient(
    to bottom,
    rgba(255, 69, 0, 0),
    rgba(255, 69, 0, 1)
  );
}
.backpicmobile {
  background-image: url("~/assets/resources/bgphone.png");
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: left;
}
.chevron {
  color: orangered;
}
.chevron:hover {
  color: white;
}
.ahover:hover {
  color: #f6faf8;
  font-weight: 500;
}
.btnhover {
  background-color: #ff4500;
  color: #f6faf8;
  border-style: solid;
  border-color: #ff4500;
  border-width: 1px;
}
.btnhover:hover {
  background-color: #f6faf8;
  color: #ff4500;
  font-weight: 600;
  border-style: solid;
  border-color: #ff4500;
  border-width: 1px;
}
</style>
