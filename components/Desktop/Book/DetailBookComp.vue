<template>
<div style="background-color: #F6FAF8" class="flex lg:overflow-hidden xs:flex-col lg:flex-row">
    <!-- Content -->
    <div v-if="book != null" class="grid grid-cols-3">
        <div class="relative">
            <!-- Cover Book -->
            <div class="fixed h-full w-full object-cover">
                <img :src="backendStorageHosts.bookManagement.books + book.cover" class="h-full">
            </div>
        </div>

        <div class="col-span-2 mr-5 mt-5">
            <!-- Title, Author, and Price -->
            <div class="py-3 px-3.5 rounded-lg shadow-lg" style="background-color: #F6FAF8;">
                <div class="font-bold" style="font-size: 24px; color: #27211e">{{toTitleCase(book.title)}}</div>
                <div class="mb-8" style="font-size: 15px; color: #94898D">by {{book.author}}</div>
                <!-- </div> -->
                <!-- Product Detail -->
                <!-- <div class="mt-3 py-3 px-3.5" style="border-radius: 8px; background-color: #EDEAE2;"> -->
                <div class="mb-1 font-bold" style="color: #27211e">Product Detail</div>
                <!-- Publisher, Stock, Weight -->
                <div class="mb-6" style="font-size: 14px; color: #27211e">
                    <div class="flex mb-1">
                        <div class="w-1/6">Publisher</div>
                        <div class="w-5/6 pl-1">: {{toTitleCase(book.publisher)}}</div>
                    </div>
                    <div class="flex mb-1" style="font-size: 14px">
                        <div class="w-1/6">Stock</div>
                        <div class="w-5/6 pl-1">: {{book.stock}}</div>
                    </div>
                    <div class="flex mb-1" style="font-size: 14px">
                        <div class="w-1/6">Status</div>
                        <div class="w-5/6 pl-1">: {{toTitleCase(book.status)}}</div>
                    </div>
                    <div class="flex mb-1" style="font-size: 14px">
                        <div class="w-1/6">Weight</div>
                        <div class="w-5/6 pl-1">: {{book.weight}} kg</div>
                    </div>                                  
                </div>
                <!-- Description -->
                <div class="text-justify" style="font-size: 14px; color: #27211e">
                    &nbsp;&nbsp;&nbsp; {{book.description}}
                </div>
            </div>
            <!-- Button to Cart -->
            <div class="w-full p-3 mt-10 shadow-md" style="background-color: orangered; border-radius: 8px;">
                <div class="flex items-center justify-center py-2 rounded-lg" style="color: #EDEAE2">
                    <SolidShoppingCartIcon class="w-6 mr-3"/> Rp. {{setRupiah(book.price).replace('..00', '')}}
                </div>
            </div>
            <div>
            <div class="mt-8 font-semibold" style="font-size:18px; color: #27211e">
                Recommendation
                <hr>
                <div class="grid grid-cols-5 px-3 pt-5">
                    <div v-for="(top4s, index) in top4s" :key="index">
                        <!-- Book Card -->
                        <book-card-helper :book="top4s" :index="index" />
                    </div>
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
import BookCardHelper from '../helper/BookCardHelper'

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
        this.getTop4s()
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
        getTop4s() {
            this.$bookManagementApi.get('v1/books/top/5')
            .then(resp => {
                this.top4s = resp.data.data
            })
        },
    }
}
</script>