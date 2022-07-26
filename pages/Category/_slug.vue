<template>
<div style="background-color: #EDEAE2">
    <client-only>
        <div v-if="$device.isDesktop">
            <!-- Navigation Bar -->
            <div class="fixed top-0 left-0 w-full flex items-center py-3 px-3 shadow-xl" style="z-index: 1000; background-color: #EDEAE2; color: #403E3E">
                <div class="flex items-center font-bold" @click="$router.go(-1)">
                    <SolidChevronLeftIcon class="w-8 mr-1.5 text-blue-lochmara" /> Category Detail
                </div>
            </div>
            <!-- Content -->
            <DesktopCategoryDetailCategoryComp />
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
data() {
    return {
        seo: {
            name: 'Book Management',
            description: '',
            image: '',
            url: 'http://50.50.50.207:3000/favicon.png'
        },
        slug: this.$route.params.slug,
        hostname: frontendHost,
        // backendStorageHosts: backendStorageHosts,
        // slug: this.$route.params.slug
    }
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

async fetch() {
    await this.$bookManagementApi.get('v1/categories/slug/' + this.slug)
    .then ( resp => {
        this.seo.name = resp.data.data.name
        this.seo.description = 'Kategori Buku' + resp.data.data.name
        this.seo.image = this.backendStrorageHosts.bookManagement.categories + resp.data.data.image
        this.seo.url = this.hostname + this.$route.path
    })
},

}
</script>