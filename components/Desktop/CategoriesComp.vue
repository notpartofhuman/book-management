<template>
<div>
    <div class="grid grid-cols-4 px-3 pt-5 ">
        <div v-for="(categori, index) in categories" :key="index" @click="goCategoriesDetail(categori.slug)"
            class="relative overflow-hidden rounded-lg mb-3" :class="index % 4 == 0 ? 'mr-1.5' : 'ml-1.5'">
            <img class="w-full" :src="backendStorageHosts.bookManagement.categories + categori.image" style="height: 275px">
                <!-- Overlay Categori Name -->
                <div class="absolute top-0 left-0" style="height: 100%; width: 100%; color: #F6FAF8">
                    <div class="absolute bottom-0 left-0 whitespace-normal pl-3 pb-2 font-semibold">
                        {{toTitleCase(categori.name)}}
                    </div>
                </div>
        </div>
    </div>
    <infinite-loading @distance="1" @infinite="getCategories">
        <div spinner="waveDots">
        </div>
    </infinite-loading>

    <div class="container" id="flavoursContainer">
  This is a really long sentence to demo my code, it's just going on and on. Still going. I should have used some default placeholder text but I've started now so I'll keep going.
</div>
</div>
</template>

<script>
import {
    backendStorageHosts,
} from '../../app.config'
import InfiniteLoading from 'vue-infinite-loading'

export default {
    components: {
        InfiniteLoading
    },
    data() {
        return {
            backendStorageHosts: backendStorageHosts,
            categories: [],
            page: 1
        }
    },
    methods: {
        getCategories($state) {
            this.$bookManagementApi.get('v1/categories', {
                params: {
                    page: this.page
                }
            })
            .then(resp => {
                if (resp.data.data.length > 0) {
                    this.categories.push(...resp.data.data)
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
        goCategoriesDetail(category_slug) {
            this.$router.push({
                name: 'category-slug',
                params: {
                    slug: category_slug
                }
            })
        },
    },
    mounted() {
        const flavoursContainer = document.getElementById('flavoursContainer');
        const flavoursScrollWidth = flavoursContainer.scrollWidth;

        window.addEventListener('load', () => {
            self.setInterval(() => {
                if (flavoursContainer.scrollLeft !== flavoursScrollWidth) {
                    flavoursContainer.scrollTo(flavoursContainer.scrollLeft + 1, 0);
                }
            }, 15);
        });
    }
}
</script>

<style scoped>
.container {
  width: 300px;
  overflow-x: scroll;
  white-space: nowrap;
  background-color: #fff;
}
</style>