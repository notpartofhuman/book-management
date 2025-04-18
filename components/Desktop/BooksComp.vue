<template>
  <div style="background-color: #f6faf8">
    <div class="pt-24 backpicbook">
      <div class="pt-32 pb-2"></div>
    </div>
    <div class="my-20">
      <p
        class="font-bold text-3xl mx-auto text-center underline mb-8"
        style="color: #300057"
      >
        Tentang Kami
      </p>
      <p class="font-normal text-3xl text-center mx-auto">
        Tim Profesional Kami Siap Membantu Anda Mencapai Penampilan Impian dari
        Potongan Rambut hingga Perawatan Kulit<br />Kami Menyediakan Semua yang
        Anda Butuhkan Setiap Hari
      </p>
    </div>

    <div>
      <img class="mx-auto w-full" src="~/assets/resources/asalon/hari.png" />
    </div>

    <div class="mt-36 mx-36">
      <img class="mx-auto w-full" src="~/assets/resources/asalon/style.png" />
    </div>

    <div class="gradienthome">
      <div class="py-20 mx-36 relative w-full">
        <img
          class="w-full relative"
          src="~/assets/resources/asalon/bg promo.png"
        />
        <div style="margin-top: -58rem" class="absolute -ml-36 w-full">
          <!-- <div> -->
          <img
            class="mx-auto shadow-md rounded-lg py-4 px-2"
            style="
              width: 600px;
              border: 0.5ps solid #ececec;
              background-color: rgba(246, 250, 248, 0.5);
            "
            src="~/assets/resources/asalon/price.png"
          />
          <!-- </div> -->
        </div>
      </div>
      <!-- <div class="grid grid-cols-5 px-3 pt-5">
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
    </infinite-loading> -->

      <div class="grid-rows-2">
        <!-- #192F37 -->
        <!-- #27211e -->
        <!-- style="color: #372923" -->
        <div class="grid grid-cols-5 flex-col mt-20" style="color: #f6faf8">
          <div class="pt-12 relative col-span-3 ml-20 pl-20">
            <p class="font-bold text-3xl mb-1">Klinik Gasanda</p>
            <p class="text-justify leading-7 mb-5">
              Setiap senyum sehat yang kembali pulih adalah alasan kami terus
              melayani sepenuh hati. Di setiap ruang periksa, di setiap sentuhan
              perawatan, ada dedikasi dan kasih yang kami berikan untuk
              memastikan Anda merasa aman, dimengerti, dan didukung. Kesehatan
              bukan hanya tentang obat dan alat medis—tapi juga tentang rasa
              nyaman, harapan, dan kepercayaan. Di sinilah tempat Anda merasa
              dipedulikan, bukan sekadar dilayani. Mari jalani perjalanan menuju
              kesehatan bersama kami—karena Anda tidak pernah sendiri.
            </p>
            <div class="w-full">
              <div class="rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.544189432106!2d110.92762147605505!3d-7.9425787920816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7bd2c62e8feddf%3A0x8501de9a40864488!2sKlinik%20Gasanda!5e0!3m2!1sen!2sid!4v1744541110536!5m2!1sen!2sid"
                  width="980"
                  height="150"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          <div class="relative pt-12 pl-16" style="color: #f6faf8">
            <!-- <img class="w-2/5 float-right mr-16" src="~/assets/resources/favicon.png" /> -->
            <p class="font-bold text-xl mb-5">Links</p>
            <div class="mb-2.5">
              <NuxtLink to="/" class="ahover">Beranda</NuxtLink>
            </div>
            <div class="mb-2.5">
              <NuxtLink to="/DesktopAbout" class="ahover">Klinik</NuxtLink>
            </div>
            <div class="mb-2.5">
              <NuxtLink to="/DesktopCategories" class="ahover"
                >Skincare</NuxtLink
              >
            </div>
            <div class="mb-2.5">
              <NuxtLink to="/DesktopBooks" class="ahover">Salon</NuxtLink>
            </div>
            <!-- <div class="mb-2.5">
            <NuxtLink to="#" class="ahover">Terms & Condition</NuxtLink>
          </div>
          <div class="mb-2.5">
            <NuxtLink to="#" class="ahover">Privacy Policy</NuxtLink>
          </div> -->
          </div>

          <div class="relative pt-12" style="color: #f6faf8">
            <p class="font-bold text-xl mb-5">Kontak Kami</p>
            <div class="mb-2.5">
              <NuxtLink to="#" class="my-2 ahover">Instagram</NuxtLink>
            </div>
            <div class="mb-2.5">
              <NuxtLink to="#" class="my-2 ahover">Facebook</NuxtLink>
            </div>
            <div class="mb-2.5">
              <NuxtLink to="#" class="my-2 ahover">Whatsapp</NuxtLink>
            </div>
          </div>
        </div>
        <center>
          <div
            class="justify-center py-4 h-1/6 mb-0 font-semibold"
            style="color: #f6faf8"
          >
            Copyright &copy;2025 Klinik Gasanda
          </div>
        </center>
      </div>
    </div>
  </div>
</template>

<script>
// import { backendStorageHosts } from "../../app.config";
// import InfiniteLoading from "vue-infinite-loading";
// import BookCardHelper from "./helper/BookCardHelper.vue";

export default {
  // components: {
  //   InfiniteLoading,
  //   BookCardHelper,
  // },
  // data() {
  //   return {
  //     books: [],
  //     backendStorageHosts: backendStorageHosts,
  //     page: 1,
  //   };
  // },
  // methods: {
  //   getCategories($state) {
  //     this.$bookManagementApi
  //       .get("v1/books", {
  //         params: {
  //           page: this.page,
  //         },
  //       })
  //       .then((resp) => {
  //         if (resp.data.data.length > 0) {
  //           this.books.push(...resp.data.data);
  //           this.page += 1;
  //           $state.loaded();
  //         } else {
  //           $state.complete();
  //         }
  //       });
  //   },
  // },
};
</script>

<style scoped>
.backpicbook {
  background-image: url("~/assets/resources/asalon/asalon banner.png");
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: center;
}
.gradienthome {
  background: linear-gradient(
    to bottom,
    rgba(48, 0, 87, 0),
    rgba(48, 0, 87, 1)
  );
}
</style>
