<template>
  <div style="background-color: #f6faf8">
    <div class="pt-28 backpic">
      <div class="grid grid-cols-3">
        <div></div>
        <div></div>
        <div class="justify-end">
          <p
            class="font-bold text-5xl pt-16 ml-2.5 mt-20"
            style="color: #0a8643"
          >
            KLINIK GASANDA
          </p>
          <p class="font-semibold text-4xl ml-2.5 mt-2" style="color: #0a8643">
            Klinik Pratama Rawat Inap
          </p>
          <p
            class="max-w-xl mr-10 ml-auto mt-3 text-justify"
            style="color: #6a645d"
          >
            Selamat datang di Klinik Pratama Rawat Inap Gasanda yang
            mengutamakan mutu, kecepatan, dan kenyamanan. Kami menyediakan
            berbagai layanan mulai dari konsultasi dokter umum, radiologi,
            laboratorium, medikasi luka, hingga layanan gawat darurat yang siap
            24 jam. Didukung oleh teknologi medis dan tim tenaga kesehatan yang
            berpengalaman, kami berkomitmen memberikan pelayanan terbaik dengan
            sepenuh hati untuk membantu Anda menjalani hidup yang lebih sehat.
          </p>

          <div class="inline-flex mr-10 ml-2.5 w-full">
            <NuxtLink to="/DesktopAbout">
              <div
                class="w-32 p-1 mt-10 shadow-md btnhover"
                style="border-radius: 8px"
              >
                <div class="flex items-center justify-center py-2 rounded-lg">
                  Klinik
                </div>
              </div>
            </NuxtLink>

            <NuxtLink to="/DesktopCategories">
              <div
                class="w-32 p-1 mt-10 ml-6 shadow-md btnhover"
                style="border-radius: 8px"
              >
                <div class="flex items-center justify-center py-2 rounded-lg">
                  Skincare
                </div>
              </div>
            </NuxtLink>

            <NuxtLink to="/DesktopBooks">
              <div
                class="w-32 p-1 mt-10 ml-6 mr-10 shadow-md btnhover"
                style="border-radius: 8px"
              >
                <div class="flex items-center justify-center py-2 rounded-lg">
                  Salon
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
      <center class="pt-24 pb-2">
        <a href="#top4">
          <OutlineChevronDownIcon class="h-20 chevron animate-pulse" />
        </a>
      </center>
    </div>

    <div class="h-20" id="top4"></div>
    <div class="text-center px-48 mt-6">
      <p class="font-bold text-4xl mb-2" style="color: #0a8643">
        Melayani Dengan Sepenuh Hati
      </p>
      <p class="font-normal text-lg mb-8 italic" style="color: #27211e">
        Sehat, Semangat, Senyum selalu demi pelayanan
      </p>
      <div class="grid grid-cols-7 fex-cols">
        <div class="rounded-lg overflow-hidden mb-3 shadow-md mr-4">
          <!-- style="background-color: " -->
          <div class="relative p-2 w-full">
            <div class="flex justify-center items-center">
              <img
                src="~/assets/resources/carousel/1.png"
                style="max-height: 100%"
              />
            </div>
          </div>
        </div>
        <div class="rounded-lg overflow-hidden mb-3 shadow-md mr-4">
          <!-- style="background-color: " -->
          <div class="relative p-2 w-full">
            <div class="flex justify-center items-center">
              <img
                src="~/assets/resources/carousel/2.jpg"
                style="max-height: 100%"
              />
            </div>
          </div>
        </div>
        <div class="rounded-lg overflow-hidden mb-3 shadow-md mr-4">
          <!-- style="background-color: " -->
          <div class="relative p-2 w-full">
            <div class="flex justify-center items-center">
              <img
                src="~/assets/resources/carousel/3.png"
                style="max-height: 100%"
              />
            </div>
          </div>
        </div>
        <div class="rounded-lg overflow-hidden mb-3 shadow-md mr-4">
          <!-- style="background-color: " -->
          <div class="relative p-2 w-full">
            <div class="flex justify-center items-center">
              <img
                src="~/assets/resources/carousel/4.jpg"
                style="max-height: 100%"
              />
            </div>
          </div>
        </div>
        <div class="rounded-lg overflow-hidden mb-3 shadow-md mr-4">
          <!-- style="background-color: " -->
          <div class="relative p-2 w-full">
            <div class="flex justify-center items-center">
              <img
                src="~/assets/resources/carousel/5.png"
                style="max-height: 100%"
              />
            </div>
          </div>
        </div>
        <div class="rounded-lg overflow-hidden mb-3 shadow-md mr-4">
          <!-- style="background-color: " -->
          <div class="relative p-2 w-full">
            <div class="flex justify-center items-center">
              <img
                src="~/assets/resources/carousel/6.jpg"
                style="max-height: 100%"
              />
            </div>
          </div>
        </div>
        <div class="rounded-lg overflow-hidden mb-3 shadow-md">
          <!-- style="background-color: " -->
          <div class="relative p-4 w-full">
            <div class="flex justify-center items-center">
              <img
                src="~/assets/resources/carousel/7.png"
                style="max-height: 100%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 flex-col mt-20 pt-10">
      <div class="pt-2 relative w-full">
        <img
          class="mx-auto"
          style="height: 800px"
          src="~/assets/resources/gsd karyawan.png"
        />
      </div>
      <div class="relative">
        <p class="font-bold text-4xl ml-16" style="color: #0a8643">
          Layanan Kami
        </p>
        <p class="ml-16 max-w-xl mt-3" style="color: #6a645d">
          Siap Selalu, Dokter Pintar dan Menarik akan melayani anda dengan
          sepenuh hati
        </p>
        <p
          class="ml-16 max-w-xl mt-3 flex items-center font-semibold"
          style="color: #6a645d"
        >
          <OutlineCheckIcon class="h-8 mr-2" style="color: #0a8643" /> IGD
          (Instalasi Gawat Darurat)
        </p>
        <p
          class="ml-16 max-w-xl flex items-center font-semibold"
          style="color: #6a645d"
        >
          <OutlineCheckIcon class="h-8 mr-2" style="color: #0a8643" />
          Medikasi Luka
        </p>
        <p
          class="ml-16 max-w-xl flex items-center font-semibold"
          style="color: #6a645d"
        >
          <OutlineCheckIcon class="h-8 mr-2" style="color: #0a8643" />
          Laboratorium
        </p>
        <p
          class="ml-16 max-w-xl flex items-center font-semibold"
          style="color: #6a645d"
        >
          <OutlineCheckIcon class="h-8 mr-2" style="color: #0a8643" /> Khitan
          Modern
        </p>
        <p
          class="ml-16 max-w-xl flex items-center font-semibold"
          style="color: #6a645d"
        >
          <OutlineCheckIcon class="h-8 mr-2" style="color: #0a8643" /> Rawat
          Inap
        </p>
        <p
          class="ml-16 max-w-xl flex items-center font-semibold"
          style="color: #6a645d"
        >
          <OutlineCheckIcon class="h-8 mr-2" style="color: #0a8643" /> EKG
        </p>
        <p
          class="ml-16 max-w-xl flex items-center font-semibold"
          style="color: #6a645d"
        >
          <OutlineCheckIcon class="h-8 mr-2" style="color: #0a8643" />
          Radiologi
        </p>
        <p
          class="ml-16 max-w-xl flex items-center font-semibold"
          style="color: #6a645d"
        >
          <OutlineCheckIcon class="h-8 mr-2" style="color: #0a8643" />
          Ambulance
        </p>
        <p
          class="ml-16 max-w-xl flex items-center font-semibold"
          style="color: #6a645d"
        >
          <OutlineCheckIcon class="h-8 mr-2" style="color: #0a8643" />
          Konsultasi Dokter
        </p>

        <NuxtLink to="/DesktopAbout">
          <!-- <center> -->
          <div
            class="w-32 p-1 ml-16 mt-10 shadow-md btnhover"
            style="border-radius: 8px"
          >
            <div class="flex items-center justify-center py-2 rounded-lg">
              Selengkapnya
            </div>
          </div>
          <!-- </center> -->
        </NuxtLink>
      </div>
    </div>

    <hr class="mx-64" style="color: #0a8643; border: 1.5px solid #0a8643" />

    <div class="grid grid-cols-2 flex-col mb-20 pt-10 items-center">
      <div class="ml-32">
        <p class="font-bold text-4xl ml-16" style="color: #cd9b7b">
          HBeauty Care
        </p>
        <p class="ml-16 max-w-xl mt-3" style="color: #6a645d">
          Dapatkan kulit wajah cerah alami dengan produk HBeauty Care
          <br />Mengandung bahan alami untuk menutrisi kulit, mampu mengangkat
          sel kulit mati, mengurangi minyak berlebih, menyamarkan bintik hitam,
          melembapkan kulit wajah dan mencegah penuaan dini dengan tekstur
          ringan dan nyaman digunakan.

          <br />Terbukti aman dan sudah tersertifikasi BPOM
          <!-- <br />Tampil lebih
          pede dengan paket cantik dari HBeauty Care -->
        </p>

        <NuxtLink to="/DesktopCategories">
          <!-- <center> -->
          <div
            class="w-32 p-1 ml-16 mt-10 shadow-md btnhoverskincare"
            style="border-radius: 8px"
          >
            <div class="flex items-center justify-center py-2 rounded-lg">
              Pesan Disini
            </div>
          </div>
          <!-- </center> -->
        </NuxtLink>
      </div>
      <div class="relative">
        <div class="pt-2 relative w-full">
          <img
            style="height: 800px"
            src="~/assets/resources/hbeautycare.baturetno aset.png"
          />
        </div>
      </div>
    </div>

    <hr class="mx-64" style="color: #300057; border: 1.5px solid #300057" />

    <div class="mx-24">
      <div class="relative">
        <div class="pt-2 pr-36 relative w-full">
          <img class="w-full" src="~/assets/resources/ASalon.png" />
        </div>
      </div>
      <div class="grid grid-cols-2">
        <div>
          <p class="font-semibold text-2xl text-center" style="color: #300057">
            Perawatan Kecantikan Ekslusif<br />
            dengan Sentuhan Profesional Terbaik
          </p>
          <div class="">
            <NuxtLink to="/DesktopBooks">
              <!-- <center> -->
              <div
                class="w-32 py-1 px-4 mt-4 mx-auto shadow-md btnhoversalon"
                style="border-radius: 8px"
              >
                <div class="flex items-center justify-center py-2 rounded-lg">
                  Selengkapnya
                </div>
              </div>
              <!-- </center> -->
            </NuxtLink>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>

    <div class="grid-rows-2 gradienthome">
      <!-- #192F37 -->
      <!-- #27211e -->
      <!-- style="color: #372923" -->
      <div class="grid grid-cols-5 flex-col mt-20" style="color: #27211e">
        <div class="pt-12 relative col-span-3 ml-20 pl-20">
          <p class="font-bold text-3xl mb-1">Klinik Gasanda</p>
          <p class="text-justify leading-7 mb-5">
            Setiap senyum sehat yang kembali pulih adalah alasan kami terus
            melayani sepenuh hati. Di setiap ruang periksa, di setiap sentuhan
            perawatan, ada dedikasi dan kasih yang kami berikan untuk memastikan
            Anda merasa aman, dimengerti, dan didukung. Kesehatan bukan hanya
            tentang obat dan alat medis—tapi juga tentang rasa nyaman, harapan,
            dan kepercayaan. Di sinilah tempat Anda merasa dipedulikan, bukan
            sekadar dilayani. Mari jalani perjalanan menuju kesehatan bersama
            kami—karena Anda tidak pernah sendiri.
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

        <div class="relative pt-12 pl-16" style="color: #27211e">
          <!-- <img class="w-2/5 float-right mr-16" src="~/assets/resources/favicon.png" /> -->
          <p class="font-bold text-xl mb-5">Links</p>
          <div class="mb-2.5">
            <NuxtLink to="/" class="ahover">Beranda</NuxtLink>
          </div>
          <div class="mb-2.5">
            <NuxtLink to="/DesktopAbout" class="ahover">Klinik</NuxtLink>
          </div>
          <div class="mb-2.5">
            <NuxtLink to="/DesktopCategories" class="ahover">Skincare</NuxtLink>
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

        <div class="relative pt-12" style="color: #27211e">
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
          style="color: #1e0d05"
        >
          Copyright &copy;2025 Klinik Gasanda
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
    rgba(10, 134, 67, 0),
    rgba(10, 134, 67, 1)
  );
}
.backpic {
  background-image: url("~/assets/resources/gsd bg.jpg");
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: center;
}
.chevron {
  color: #000000;
}
.chevron:hover {
  color: white;
}
.ahover:hover {
  color: #f6faf8;
  font-weight: 500;
}
.btnhover {
  background-color: #0a8643;
  color: #f6faf8;
  border-style: solid;
  border-color: #0a8643;
  border-width: 1px;
}
.btnhover:hover {
  background-color: #f6faf8;
  color: #0a8643;
  font-weight: 600;
  border-style: solid;
  border-color: #0a8643;
  border-width: 1px;
}
.btnhoverskincare {
  background-color: #cd9b7b;
  color: #f6faf8;
  border-style: solid;
  border-color: #cd9b7b;
  border-width: 1px;
}
.btnhoverskincare:hover {
  background-color: #f6faf8;
  color: #cd9b7b;
  font-weight: 600;
  border-style: solid;
  border-color: #cd9b7b;
  border-width: 1px;
}
.btnhoversalon {
  background-color: #300057;
  color: #f6faf8;
  border-style: solid;
  border-color: #300057;
  border-width: 1px;
}
.btnhoversalon:hover {
  background-color: #f6faf8;
  color: #300057;
  font-weight: 600;
  border-style: solid;
  border-color: #300057;
  border-width: 1px;
}
</style>
