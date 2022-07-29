<template>
<div style="background-color: #F6FAF8">
    <div class="relative pt-28 backpic">
            <p class="font-bold text-5xl pt-16 ml-10 mt-20 text-left">Discover Your Favorite Books</p>
            <p class="max-w-xl ml-10 mt-3" style="color: #6A645D">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet malesuada enim, vel varius velit cursus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas non nisi tempor quam posuere semper.</p>
            
            <div class="inline-flex ml-10">
            <NuxtLink to="/DesktopBooks">
                <div class="w-32 p-1 mt-10 shadow-md" style="background-color: orangered; border-radius: 8px;">
                    <div class="flex items-center justify-center py-2 fontbold rounded-lg" style="color: #EDEAE2">
                        All Books
                    </div>
                </div>
            </NuxtLink>

            <NuxtLink to="/DesktopCategories">
                <div class="w-32 p-1 mt-10 ml-6 shadow-md" style="background-color: orangered; border-radius: 8px;">
                    <div class="flex items-center justify-center py-2 fontbold rounded-lg" style="color: #EDEAE2">
                        All Categories
                    </div>
                </div>
            </NuxtLink>
            </div>
            <center class="pt-24 pb-2"><a href="#top4"> <OutlineChevronDownIcon class="h-20 chevron animate-pulse" /> </a></center>
    </div>
    
    <div class="h-20" id="top4"></div>
    <div class="text-center px-48">
        <p class="font-bold text-4xl mb-8">Try Our Best Seller</p>
        <div class="grid grid-cols-4 fex-cols">
            <div v-for="(top4, index) in top4s" :key="index">
                <!-- Book Card -->
                <book-card-helper :book="top4" :index="index" />
            </div>
        </div>
    </div>

    <div class="grid grid-cols-2 flex-col my-20">
        <div class="pt-2 relative">
            <img class="w-full" src="~/assets/resources/bookleaves.png" />
        </div>
        <div class="relative">
            <p class="font-bold text-4xl text-right mr-20">Welcome To Autumn Athenaeum</p>
            <p class="ml-10 max-w-xl mt-3" style="color: #6A645D">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi lorem, porttitor in ipsum quis, hendrerit luctus lacus. Sed ipsum enim, eleifend eu rhoncus sit amet, fermentum ac felis.</p>
            <p class="ml-10 max-w-xl mt-3 inline-flex items-center" style="color: #6A645D"><OutlineCheckIcon class="h-8" style="color: orangered"/> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <p class="ml-10 max-w-xl inline-flex items-center" style="color: #6A645D"><OutlineCheckIcon class="h-8" style="color: orangered"/> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <p class="ml-10 max-w-xl inline-flex items-center" style="color: #6A645D"><OutlineCheckIcon class="h-8" style="color: orangered"/> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <p class="ml-10 max-w-xl inline-flex items-center" style="color: #6A645D"><OutlineCheckIcon class="h-8" style="color: orangered"/> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            
            <NuxtLink to="/">
                <center>
                <div class="w-32 p-1 mt-10 shadow-md" style="background-color: orangered; border-radius: 8px;">
                    <div class="flex items-center justify-center py-2 fontbold rounded-lg" style="color: #EDEAE2">
                        See More
                    </div>
                </div>
                </center>
            </NuxtLink>
        </div>
    </div>

        <div class="grid grid-cols-2 flex-col my-20">
        <div class="pt-2 relative">
            <h1 class="font-bold">&nbsp;</h1>
        </div>
        <div class="relative">
            <img class="w-3/5 float-right mr-16" src="~/assets/resources/favicon.png" />
        </div>
    </div>
</div>
</template>

<script>
import {
    backendStorageHosts,
} from '../../app.config'
import BookCardHelper from '../desktop/helper/BookCardHelper.vue'

export default {
    components: {
        BookCardHelper
    },
    data() {
        return {
            backendStorageHosts: backendStorageHosts,
            top4s: [],
        }
    },
    created() {
        this.getTop4()
    },
    methods: {
        getTop4() {
            this.$bookManagementApi.get('v1/books/top/4')
            .then(resp => {
                this.top4s = resp.data.data
            })
        },
    },
}
</script>

<style scoped>
.gradient {
    background: linear-gradient(
        to bottom left,
        #F6FAF8, #AB3E29
    );
}
.backpic {
  background-image: url("~/assets/resources/bgpsd.png");
}
.chevron {
    color: orangered;
}
.chevron:hover {
    color: white;
}
</style>