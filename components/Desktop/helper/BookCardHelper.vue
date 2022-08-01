<template>
<div @click="goDetailBook(book.slug)" class="rounded-lg overflow-hidden mb-3 shadow-md gradient"
    :class="index % 5 == 0 ? 'mr-1.5' : 'ml-1.5'">
    <!-- style="background-color: " -->
    <div class="relative px-4 w-full">
        <div class="flex justify-center items-center">
            <img :src="backendStorageHosts.bookManagement.books + book.cover"
                style="max-height: 100%;">
        </div>
    </div>
    <div class="px-1 py-1 mb-4">
        <p class="mb-2 mt-1 truncate"
            style="font-size: 13px; line-height: 1.4; height: 20px; text-align: center">
            {{book.title}}
        </p>
        <div class="font-bold" style="font-size: 15px; text-align: center">
            <span style="font-size: 13px;">IDR</span> {{setRupiah(book.price).replace('..00', '')}}
        </div>
    </div>
</div>
</template>

<script>
import {
    backendStorageHosts,
    } from '../../../app.config'

export default {
    props: {
        book: Object,
        index: Number
    },
    data() {
        return {
            backendStorageHosts: backendStorageHosts
        }
    },
    methods: {
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
                },
            })
        },
    }
}
</script>

<style scoped>
.text-multiline-ellipsis {
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box !important;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
}
.gradient {
    background: linear-gradient(
        to bottom right,
        rgba(255, 69, 0, 0), rgba(255, 69, 0, 0.2)
    );
}
</style>