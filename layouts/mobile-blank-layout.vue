<template>
<div class="font-poppins">
    <div id="body-apps" style="padding-top: 55px; background: #F6F6F6; min-height: 100vh">
        <client-only>
            <notifications group="cart" position="bottom center" classes="xxx-notification" />
        </client-only>
        <nuxt keep-alive />
    </div>
</div>
</template>

<style>
.xxx-notification {
    margin: 0 5px 69px;
    padding: 10px;
    font-size: 12px;
    color: #ffffff;
    text-align: center;
    background: #44A4FC;
    border-left: 5px solid #187FE7;
    &.success {
        background: rgba(0, 0, 0, 0.80);
        border-left-color: rgba(107, 107, 107, 0.50);
        border-left: none
    }
    &.warn {
        background: #ffb648;
        border-left-color: #f48a06;
        border-left: none
    }
    &.error {
        background: #E54D42;
        border-left-color: #B82E24;
        border-left: none
    }
}
</style>