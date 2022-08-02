<template>
<div style="background-color: #F6FAF8">
    <div class="relative pt-28 backpics">
        <p class="font-bold text-5xl pt-8 ml-10 mt-4 text-center" style="color: #27211e">About Us</p>
        <center style="color: #6A645D"><SolidHomeIcon class="h-5 inline-flex" /> &nbsp;> About Us </center>
        <div class="pt-32 pb-2"></div>
    </div>

    <div class="grid grid-cols-4 flex-col my-20" style="color: #27211e">
        <div class="text-3xl font-bold ml-20 my-auto story">
            Our Story
        </div>

        <div class="col-span-3 mr-16 text-justify">            
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae massa blandit neque sodales consequat at non augue. Quisque dignissim a enim ut fermentum. Integer mattis lorem ut rutrum ultricies. Sed a mi nec est vulputate rutrum. Aliquam maximus consectetur ante, sit amet lobortis lacus bibendum id. Aenean tellus turpis, suscipit ut porta a, scelerisque ac dui. Proin rhoncus mollis consequat. Duis tempor risus convallis metus vestibulum iaculis. Phasellus ultricies leo ut purus dapibus maximus. Morbi euismod sapien odio, ac tempor neque laoreet eu. Sed in lacus nec dolor volutpat tincidunt vel auctor magna. Aenean at diam ac mi sodales mattis mollis et elit.</p><br/>

<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Praesent pharetra leo eget arcu pharetra suscipit. Nunc facilisis a enim at ultrices. Cras ligula mauris, volutpat et fringilla in, auctor eget mi. Donec accumsan dignissim nulla. Fusce lacinia, risus ac semper rutrum, dolor turpis vehicula dolor, et dignissim magna nunc a ipsum. Integer convallis in odio sed condimentum. Curabitur ut ullamcorper dui.</p>
        </div>
    </div>
</div>
</template>

<style scoped>
.backpics {
  background-image: url("~/assets/resources/bg.jpg");
  /* object-fit: cover; */
  /* background-repeat: no-repeat; */
  /* width: 100vw; */
}
.story {
    background-image: url("~/assets/resources/leaffalls.png");
    object-fit: contain;
    background-repeat: no-repeat;
}
</style>