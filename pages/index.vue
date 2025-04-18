<template>
  <div>
    <client-only>
      <!-- <MobileHomeComp v-if="$device.isMobileOrTablet" /> -->
      <!-- <DesktopHomeComp v-else /> -->
      <DesktopHomeComp />
    </client-only>
  </div>
</template>

<script>
export default {
  layout: (ctx) =>
    // ctx.$device.isMobileOrTablet ? "mobile-layout" : "desktop-layout",
    ctx.$device.isMobileOrTablet ? "desktop-layout" : "desktop-layout",
};
</script>
