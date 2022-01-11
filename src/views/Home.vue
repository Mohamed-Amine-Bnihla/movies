<template>
  <section class="home h-screen relative">
    <div
      class="
        overlay
        absolute
        w-full
        h-full
        bg-gradient-to-r
        from-sky-800
        via-sky-700
        to-sky-600
        md:to-transparent
        opacity-90
      "
    ></div>
    <div class="container h-full flex items-center relative">
      <div class="content max-w-lg flex flex-col maxMD:justify-center">
        <h2 class="text-4xl md:text-5xl font-bold uppercase text-white mb-8">
          Watch And Enjoy
        </h2>
        <p class="text-gray-200 leading-8 mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde tempore
          quod odit delectus ad aliquam assumenda amet, quia alias ratione.
        </p>
        <a
          href="#"
          class="
            text-sky-800
            rounded-xl
            hover:bg-sky-600 hover:text-white
            duration-150
            font-medium
            cursor-pointer
            bg-white
            py-3
            w-fit
            px-5
          "
          >Learn more</a
        >
      </div>
    </div>
  </section>
  <section>
    <slider :list="list"></slider>
  </section>
</template>
<script>
import { reactive } from "vue";
import Slider from "../components/Slider.vue";
export default {
  name: "HomeView",
  components: {
    Slider,
  },
  setup() {
    const list = reactive([
      { title: "don't look up" },
      { title: "avengers" },
      { title: "nobody" },
      { title: "spiderman" },
      { title: "don't look up" },
      { title: "don't look up" },
      { title: "don't look up" },
      { title: "don't look up" },
    ]);
    console.log(list);
    return {
      list,
    };
  },
};
</script>
<style>
.home {
  background-image: url("../assets/images/moviesBG.jpg");
  background-size: cover;
}
</style>