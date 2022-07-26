<template>
<div class="flex lg:h-screen w-screen lg:overflow-hidden xs:flex-col lg:flex-row" >

    <!-- <div class="relative lg:w-1/2 xs:w-full xs:h-84 lg:h-full post-left" v-if="category != null"> -->
      <!-- <img class="absolute h-full w-full object-cover" :src="backendStorageHosts.bookManagement.categories + category.image" alt=""/> -->
    <!-- </div> -->
    <!-- <div class="overlay"></div> -->
    <!-- <div class="absolute top-32 left-32 text-white"> -->
      <!-- <div class="mt-16 -mb-3 flex flex-col uppercase text-sm"> -->
        <!-- <h1 class="text-4xl font-bold"> -->
          <!-- {{toTitleCase(category.name)}} -->
        <!-- </h1> -->
        <!-- <p class="mb-4">{{toTitleCase(category.name)}}</p> -->
      <!-- </div> -->
    <!-- </div> -->

    <div class="relative lg:w-1/2 xs:w-full xs:h-84 lg:h-full post-left" v-if="category != null">
        <img class="absolute h-full w-full object-cover" :src="backendStorageHosts.bookManagement.categories + category.image" alt="">
            <!-- Overlay Categori Name -->
            <div class="overlay"></div>
            <div class="absolute top-20 ml-8 text-white">
                <div class="mt-3 -mb-3 flex flex-col text-sm">
                    <h1 class="text-4xl font-bold">
                    {{toTitleCase(category.name)}}
                    </h1>
                    <p class="mb-4">{{toTitleCase(category.status)}}</p>
                </div>
            </div>
    </div>

    
    <div class="relative xs:py-8 xs:px-8 lg:pt-20 lg:px-16 lg:w-1/2 xs:w-full h-full overflow-y-scroll markdown-body post-right custom-scroll">
        <h3 class="mb-4 font-bold text-4xl">
            Daftar buku
        </h3>
            <!-- <div class="grid grid-cols-3 px-3 pt-2"> -->
                <!-- <div v-for="(book, index) in books" :key="index" class="relative overflow-hidden rounded-lg"> -->
                    <!-- <book-card-helper :book="book" :index="index" /> -->
                <!-- </div> -->
            <!-- </div> -->

            <ul>
                <li
                    v-for="(book, index) in books"
                    :key="index"
                    class="w-full px-2 xs:mb-6 md:mb-12 article-card"
                >
                    <div @click="goDetailBook(book.slug)"
                        class="flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col"
                    >
                        <img
                        v-if="backendStorageHosts.bookManagement.books + book.cover"
                        class="h-48 xxlmin:w-1/2 xxlmax:w-full object-cover"
                        :src="backendStorageHosts.bookManagement.books + book.cover"
                        
                        />

                        <div class="pt-5 pl-8 flex flex-col xxlmin:w-1/2 xxlmax:w-full">
                            <p class="font-bold" style="font-size: 19px">{{ book.title }}</p>
                            <p style="font-size: 15px; color: #94898D">by {{book.author}}</p>
                            <p class="font-bold text-sm pt-8" style="font-size: 17px">
                            <span>IDR</span> {{setRupiah(book.price).replace('..00', '')}}
                            </p>
                        </div>
                    </div>
                </li>
            </ul>

            <infinite-loading @distance="1" @infinite="getCategoryDetail">
                <div spinner="waveDots">
                </div>
            </infinite-loading>
        </div>
    </div>
</template>

<script>
import {
backendStorageHosts,
} from '../../../app.config'
import InfiniteLoading from 'vue-infinite-loading'
import BookCardHelper from '../helper/BookCardHelper.vue'

export default {
    components: {
        InfiniteLoading,
        BookCardHelper
    },
    data() {
        return {
            slug: this.$route.params.slug,
            page: 1,
            category: null,
            books: [],
            backendStorageHosts: backendStorageHosts,
        }
    },
    methods: {
        getCategoryDetail($state) {
            this.$bookManagementApi.get('v1/categories/slug/' + this.slug, {
                params: {
                    page: this.page
                }
            })
            .then(resp => {
                if (resp.data.data.books.data.length > 0) {
                    this.category = resp.data.data
                    this.books.push(...this.category.books.data)
                    this.page += 1;
                    $state.loaded();
                } else {
                    $state.complete();
                }
            })
        },
        toTitleCase(str) {
            if (str != null) {
                return str.replace(
                    /\w\S*/g,
                    function (txt) {
                        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                    }
                );
            }
        },
        setRupiah(angka) {
            if (angka != undefined) {
                var rupiah = '';
                var angkarev = angka.toString().split('').reverse().join('');
                for (var i = 0; i < angkarev.length; i++)
                if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + '.';
                return rupiah.split('', rupiah.length - 1).reverse().join('');
            }
        },
        goDetailBook(bookSlug) {
            this.$router.push({
                name: 'book-slug',
                params: {
                    slug: bookSlug
                }
            })
        },
    }
}
</script>