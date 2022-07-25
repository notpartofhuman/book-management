<template>
<div style="padding-top: 3.5%; padding-bottom: 4%; background-color: #403E3E">
    <!-- Content -->
    <div v-if="book != null" class="grid grid-cols-4">
        <div>
            <!-- Cover Book -->
            <div class="flex justify-center items-center">
                <img :src="backendStorageHosts.bookManagement.books + book.cover" class="h-full">
            </div>
        </div>

        <div class="col-span-2 px-3">
            <!-- Title, Author, and Price -->
            <div class="py-3 px-3.5" style="border-radius: 8px; background-color: #EDEAE2;">
                <div class="font-bold" style="font-size: 24px">{{toTitleCase(book.title)}}</div>
                <div class="mb-8" style="font-size: 15px; color: #94898D">by {{book.author}}</div>
                <!-- </div> -->
                <!-- Product Detail -->
                <!-- <div class="mt-3 py-3 px-3.5" style="border-radius: 8px; background-color: #EDEAE2;"> -->
                <div class="mb-1 font-bold">Product Detail</div>
                <!-- Publisher, Stock, Weight -->
                <div class="mb-6" style="font-size: 14px">
                    <div class="flex mb-1">
                        <div class="w-1/5">Publisher</div>
                        <div class="w-4/5 pl-1">: {{book.publisher}}</div>
                    </div>
                    <div class="flex mb-1" style="font-size: 14px">
                        <div class="w-1/5">Stock</div>
                        <div class="w-4/5 pl-1">: {{book.stock}}</div>
                    </div>
                    <div class="flex mb-1" style="font-size: 14px">
                        <div class="w-1/5">Weight</div>
                        <div class="w-4/5 pl-1">: {{book.weight}} kg</div>
                    </div>
                </div>
                <!-- Description -->
                <div class="text-justify" style="font-size: 14px">
                    &nbsp;&nbsp;&nbsp; {{book.description}}
                </div>
            </div>
        </div>

        <div class="px-3">
            <!-- Button to Cart -->
            <div class="w-full p-3" style="background-color: #787D84; border-radius: 8px;">
                <div class="flex items-center justify-center py-2 pr-7 fontbold rounded-lg" style="color: #EDEAE2">
                    <SolidShoppingCartIcon class="w-6 mr-3"/> Rp. {{setRupiah(book.price).replace('..00', '')}}
                </div>
            </div>
            <div>
                <div class="grid grid-rows-4 px-3">
                    <div v-for="(top4, index) in top4s" :key="index">
                        <!-- Book Card -->
                        <book-card-helper :book="top4" :index="index" />
                    </div>
                </div>
            </div>
        </div>
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
            bookSlug: this.$route.params.slug,
            backendStorageHosts: backendStorageHosts,
            book: null,
        }
    },

    created() {
        this.getBookDetail(),
        this.getTop4()
    },

    methods: {
        getBookDetail() {
            this.$bookManagementApi.get('v1/books/slug/' + this.bookSlug)
            .then(resp => {
                this.book = resp.data.data
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
        getTop4() {
            this.$bookManagementApi.get('v1/books/top/4')
            .then(resp => {
                this.top4s = resp.data.data
            })
        },
    }
}
</script>