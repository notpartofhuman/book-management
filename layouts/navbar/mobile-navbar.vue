<template>
  <div>
    <main>
      <!-- Navigation Bar -->
      <div
        class="fixed top-0 left-0 w-full flex items-center py-3 px-3 shadow-lg z-50"
        style="color: #27211e; background-color: #f6faf8"
      >
        <!-- Buttom show menu -->
        <div class="px-1 mr-2" @click="showMenu()">
          <solid-menu-icon class="w-5 text-gray" />
        </div>

        <!-- Logo -->
        <img class="w-7" src="/favicon.png" />
        <div class="ml-2 font-semibold text-lg">Autumn Athenaeum</div>

        <!-- User -->
        <div class="ml-auto pr-1">
          <SolidUserCircleIcon class="w-8 ml-5" />
        </div>
      </div>
    </main>

    <!-- Pop Up Menu -->
    <div
      class="fixed top-0 left-0 w-72 min-h-screen z-50 gradientsidebar"
      v-if="isShowMenu == true"
    >
      <!-- Judul -->
      <div class="flex items-center w-full py-3 pl-4 pr-2">
        <div class="font-bold" style="font-size: 16px; letter-spacing: 0.5px">
          Menu
        </div>

        <!-- Button Close Menu -->
        <div class="ml-auto" @click="showMenu()">
          <OutlineXIcon class="w-7" />
        </div>
      </div>
      <hr style="border-top: 5px solid orangered" />
      <ul class="list-none">
        <li class="my-6">
          <NuxtLink to="/Books" class="mx-5" id="books"> Books </NuxtLink>
        </li>
        <li class="my-6">
          <NuxtLink to="/Categories" class="mx-5" id="categories">
            Categories
          </NuxtLink>
        </li>
        <li class="my-6">
          <NuxtLink to="/about" class="mx-5" id="about"> About Us </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowMenu: false,
    };
  },

  methods: {
    showMenu() {
      if (this.isShowMenu) {
        this.isShowMenu = false;
      } else {
        this.isShowMenu = true;
      }
    },
  },
};
</script>

<style scoped>
.gradientsidebar {
  background: linear-gradient(
    to bottom,
    /* rgba(255, 69, 0, 0), */ #f6faf8,
    rgba(255, 69, 0, 1)
  );
  color: #27211e;
}
</style>
