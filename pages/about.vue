<template>
  <div style="background-color: #f6faf8">
    <client-only>
      <div style="background: #f6faf8">
        <div v-if="$device.isMobileOrTablet" style="padding-top: 55px">
          <!-- Navigation Bar -->
          <div
            class="shadow-lg fixed top-0 left-0 w-full flex items-center py-3 px-3 z-50"
            style="background-color: #f6faf8"
          >
            <div class="flex items-center font-bold" @click="$router.go(-1)">
              <SolidChevronLeftIcon class="w-8 mr-1.5 text-blue-lochmara" />
              About Us
            </div>
          </div>
          <!-- Content -->
          <MobileAboutComp />
        </div>
      </div>
    </client-only>
  </div>
</template>
