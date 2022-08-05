<template>
  <div class="font-poppins">
    <div
      id="body-apps"
      style="padding-top: 55px; background: #f6f6f6; min-height: 100vh"
    >
      <client-only>
        <notifications
          group="cart"
          position="bottom center"
          classes="xxx-notification"
        />
      </client-only>
      <nuxt keep-alive />
    </div>
  </div>
</template>

<!-- <style>
.xxx-notification {
  margin: 0 5px 69px;
  padding: 10px;
  font-size: 12px;
  color: #ffffff;
  text-align: center;
  background: #44a4fc;
  border-left: 5px solid #187fe7;
  &.success {
    background: rgba(0, 0, 0, 0.8);
    border-left-color: rgba(107, 107, 107, 0.5);
    border-left: none;
  }
  &.warn {
    background: #ffb648;
    border-left-color: #f48a06;
    border-left: none;
  }
  &.error {
    background: #e54d42;
    border-left-color: #b82e24;
    border-left: none;
  }
}
</style> -->
