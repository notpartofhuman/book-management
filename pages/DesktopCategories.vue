<template>
<div>
    <client-only>
        <div style="background: #403E3E">
            <div v-if="$device.isDesktop" style="padding-top: 55px">
                <!-- Navigation Bar -->
                <div class="bg-white fixed top-0 left-0 w-full flex items-center py-3 px-3" style="z-index: 1000; background-color: #EDEAE2; color: #403E3E;">
                    <div class="flex items-center font-bold" @click="$router.go(-1)">
                        <SolidChevronLeftIcon class="w-8 mr-1.5 text-blue-lochmara" /> All Categories
                    </div>
                </div>
                <!-- Content -->
                <DesktopCategoriesComp />
            </div>
        </div>
    </client-only>
</div>
</template>

