<template>
<div>
    <client-only>
        <div style="background: #F6F6F6">
            <div v-if="$device.isDesktop" style="padding-top: 55px">
                <!-- Navigation Bar -->
                <div class="bg-white fixed top-0 left-0 w-full flex items-center py-3 px-3" style="z-index: 1000">
                    <div class="flex items-center font-bold" @click="$router.go(-1)">
                        <SolidChevronLeftIcon class="w-8 mr-1.5 text-blue-lochmara" /> Book Detail
                    </div>
                </div>
                <!-- Content -->
                <DesktopBookDetailBookComp />
            </div>
        </div>
     </client-only>
</div>
</template>


<script>
import {
    frontendHost,
    backendStorageHosts
} from '../../app.config'

export default {
    head() {
        return {
            title: this.seo.name,
            meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'og:title',
                name: 'og:title',
                content: this.seo.name
            },
            {
                hid: 'og:description',
                name: 'og:description',
                content: this.seo.description
            },
            {
                hid: 'og:image',
                name: 'og:image',
                content: this.seo.image
            },
            {
                hid: 'og:url',
                property: 'og:url',
                content: this.seo.url,
            },
            ],
        }
    },

    data() {
        return {
            seo: {
                name: 'book Management',
                description: '',
                image: '',
                url: 'http://50.50.50.207:3000/favicon.png'
            },
            hostname: frontendHost,
            backendStorageHosts: backendStorageHosts,
            bookSlug: this.$route.params.slug
        }
    },    

    async fetch() {
        await this.$bookManagementApi.get('v1/books/slug' + this.bookSlug)
        .then( resp => {
            this.seo.name = resp.data.data.title
            this.seo.description = resp.data.data.description
            this.seo.image = this.backendStorageHosts.bookManagement.books + resp.data.data.cover
            this.seo.url = this.$route.path
        })
    },
}
</script>