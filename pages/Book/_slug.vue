<template>
<div>
    <client-only>
        <div v-if="$device.isDesktop" style="padding-top: 55px">
            <!-- Navigation Bar -->
            <div class="fixed top-0 left-0 w-full flex items-center py-3 px-3 shadow-md" style="z-index: 1000; background-color: #F6FAF8; color: #27211e">
                <!-- <div class="flex items-center font-bold" @click="$router.go(-1)"> -->
                <NuxtLink to="/"> <SolidHomeIcon class="w-8 mb-2 inline-flex items-center"/></NuxtLink>
                    <p class="font-semibold text-xl inline-flex">&nbsp; Book Details </p>

                <div class="ml-auto pr-1 inline-flex items-center">
                    <NuxtLink to="/DesktopAbout" class="mx-5"> About Us </NuxtLink>
                    <NuxtLink to="/DesktopCategories" class="mx-5"> Categories </NuxtLink>
                    <NuxtLink to="/DesktopBooks" class="mx-5" style="color: #FF4500"> Books <hr></NuxtLink>
                    <SolidUserCircleIcon class="w-10 ml-5" />
                </div>
            </div>
            <!-- Content -->
            <DesktopBookDetailBookComp />
        </div>

        <div v-else-if="$device.isMobileOrTablet">
                <!-- Navigation Bar -->
                <div class="bg-white fixed top-0 left-0 w-full flex items-center py-3 px-3" style="z-index: 1000">
                    <div class="flex items-center font-bold" @click="$router.go(-1)">
                        <SolidChevronLeftIcon class="w-8 mr-1.5 text-blue-lochmara" /> Book Detail
                    </div>
                </div>
                <!-- Content -->
                <MobileBookDetailBookComp />
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
    mounted() {
        window.onscroll = null;
    },
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
                name: 'Autumn Athenaeum',
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

<style scoped>
a:hover {
  color: #FF4500;
}
</style>