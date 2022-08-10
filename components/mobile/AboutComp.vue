<template>
  <div style="background-color: #f6faf8">
    <div class="pt-10 backpics">
      <p
        class="font-bold text-4xl mx-auto mt-1 text-center"
        style="color: #27211e"
      >
        About Us
      </p>
      <center style="color: #6a645d">
        <SolidHomeIcon class="h-5 inline-flex" /> &nbsp;> About Us
      </center>
      <div class="pt-10 pb-2"></div>
    </div>

    <div class="mx-auto px-16">
      <img class="w-full" src="~/assets/resources/story.png" />
    </div>
    <div class="my-6" style="color: #27211e">
      <div class="mx-6 text-justify">
        <p>
          &nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nunc vitae massa blandit neque sodales consequat at non augue.
          Quisque dignissim a enim ut fermentum. Integer mattis lorem ut rutrum
          ultricies. Sed a mi nec est vulputate rutrum. Aliquam maximus
          consectetur ante, sit amet lobortis lacus bibendum id. Aenean tellus
          turpis, suscipit ut porta a, scelerisque ac dui. Proin rhoncus mollis
          consequat. Duis tempor risus convallis metus vestibulum iaculis.
          Phasellus ultricies leo ut purus dapibus maximus. Morbi euismod sapien
          odio, ac tempor neque laoreet eu. Sed in lacus nec dolor volutpat
          tincidunt vel auctor magna. Aenean at diam ac mi sodales mattis mollis
          et elit.
        </p>
        <br />
        <p>
          &nbsp;&nbsp;&nbsp;Praesent pharetra leo eget arcu pharetra suscipit.
          Nunc facilisis a enim at ultrices. Cras ligula mauris, volutpat et
          fringilla in, auctor eget mi. Donec accumsan dignissim nulla. Fusce
          lacinia, risus ac semper rutrum, dolor turpis vehicula dolor, et
          dignissim magna nunc a ipsum.
        </p>
      </div>
    </div>

    <img class="w-full mx-auto px-16 mt-16" src="~/assets/resources/we.png" />
    <!-- <p class="font-semibold text-center text-lg">Meet Our Awesome Team</p> -->

    <!-- style="background-color: " -->
    <div class="grid flex-row mt-5">
      <div class="grid grid-cols-2 mx-4 my-4">
        <div class="w-4/5 ml-auto">
          <img src="~/assets/resources/p3.png" />
        </div>
        <div class="flex-cols my-auto" style="color: #ff4500">
          <p class="font-bold" style="color: #ff4500">Daniel Anderson</p>
          <p class="font-semibold" style="color: #27211e">CEO/Founder</p>
        </div>
      </div>

      <div class="grid grid-cols-2 flex-col mx-4 my-4">
        <div class="flex-cols my-auto text-right">
          <p class="font-bold" style="color: #ff4500">Vivian Taylor</p>
          <p class="font-semibold" style="color: #27211e">Bookstore Manager</p>
        </div>
        <div class="w-4/5">
          <img src="~/assets/resources/p2.png" />
        </div>
      </div>

      <div class="grid grid-cols-2 mx-4 my-4">
        <div class="w-4/5 ml-auto">
          <img src="~/assets/resources/p1.png" />
        </div>
        <div class="flex-cols my-auto" style="color: #ff4500">
          <p class="font-bold" style="color: #ff4500">Albert Brightwell</p>
          <p class="font-semibold" style="color: #27211e">Legal Manager</p>
        </div>
      </div>

      <div class="grid grid-cols-2 flex-col mx-4 my-4">
        <div class="flex-cols my-auto text-right">
          <p class="font-bold" style="color: #ff4500">Joe Davidson</p>
          <p class="font-semibold" style="color: #27211e">Web Developer</p>
        </div>
        <div class="w-4/5">
          <img src="~/assets/resources/p4.png" />
        </div>
      </div>

      <div class="grid grid-cols-2 mx-4 my-4">
        <div class="w-4/5 ml-auto">
          <img src="~/assets/resources/p5.png" />
        </div>
        <div class="flex-cols my-auto" style="color: #ff4500">
          <p class="font-bold" style="color: #ff4500">Alisa Richardson</p>
          <p class="font-semibold" style="color: #27211e">UI/UX Designer</p>
        </div>
      </div>
    </div>

    <div class="text-center text-xl font-semibold max-w-xl mx-4 my-20 pb-8">
      &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
      sit amet justo lobortis ante sodales viverra ut id ipsum.&rdquo;
    </div>

    <div class="gradienthome">
      <!-- #192F37 -->
      <!-- #27211e -->
      <!-- style="color: #372923" -->
      <div class="grid flex-col mt-20" style="color: #27211e">
        <div class="pt-12 relative col-span-3 px-10">
          <p class="font-bold text-2xl mb-5 text-center">Autumn Athenaeum</p>
          <p class="max-w-xl text-justify leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et
            cursus justo, id dignissim enim. Cras lacinia viverra odio, a auctor
            odio rutrum et. Aliquam congue laoreet lorem, non congue quam
            commodo eget. Praesent iaculis est id mi scelerisque, sed
            condimentum lacus varius.
          </p>
        </div>

        <div
          class="grid-rows-2 relative pt-12 pl-10 mr-10"
          style="color: #27211e"
        >
          <!-- <img class="w-2/5 float-right mr-16" src="~/assets/resources/favicon.png" /> -->
          <p class="font-bold text-xl mb-5">Quick Links</p>
          <div class="mb-2.5">
            <NuxtLink to="/DesktopBooks" class="ahover">Books</NuxtLink>
          </div>
          <div class="mb-2.5">
            <NuxtLink to="/DesktopCategories" class="ahover"
              >Categories</NuxtLink
            >
          </div>
          <div class="mb-2.5">
            <NuxtLink to="/DesktopAbout" class="ahover">About Us</NuxtLink>
          </div>
          <div class="mb-2.5">
            <NuxtLink to="#" class="ahover">Terms & Condition</NuxtLink>
          </div>
          <div class="mb-2.5">
            <NuxtLink to="#" class="ahover">Privacy Policy</NuxtLink>
          </div>
        </div>

        <div class="relative pt-12 ml-5" style="color: #27211e">
          <p class="font-bold text-xl mb-5">Community</p>
          <div class="mb-2.5">
            <NuxtLink to="#" class="my-2 ahover">Discord</NuxtLink>
          </div>
          <div class="mb-2.5">
            <NuxtLink to="#" class="my-2 ahover">Facebook</NuxtLink>
          </div>
          <div class="mb-2.5">
            <NuxtLink to="#" class="my-2 ahover">Twitter</NuxtLink>
          </div>
          <div class="mb-2.5">
            <NuxtLink to="#" class="my-2 ahover">GitHub</NuxtLink>
          </div>
        </div>
      </div>
      <center>
        <div
          class="justify-center py-4 h-1/6 mb-0 font-semibold"
          style="color: #1e0d05"
        >
          Copyright &copy;2022 Autumn Athenaeum
        </div>
      </center>
    </div>
  </div>
</template>

<style scoped>
.backpics {
  background-image: url("~/assets/resources/bg.png");
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: center;
}
.story {
  background-image: url("~/assets/resources/leaffalls.png");
  object-fit: contain;
  background-repeat: no-repeat;
}
.gradienthome {
  background: linear-gradient(
    to bottom,
    rgba(255, 69, 0, 0),
    rgba(255, 69, 0, 1)
  );
}
</style>
