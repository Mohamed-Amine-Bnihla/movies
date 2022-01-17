<template>
  <swiper
    :modules="modules"
    :slides-per-view="3.5"
    :space-between="10"
    :loop="true"
    :pagination="{ clickable: true }"
    :grabCursor="true"
    :breakpoints="{
      '1024': {
        slidesPerView: 5.5,
        spaceBetween: 20,
      },
    }"
  >
    <swiper-slide class="py-5" v-for="(credit, index) in actors" :key="index">
      <div class="relative flex flex-col justify-center items-center">
        <v-lazy-image
          :src="checkProfileImage(credit.profile_path)"
          class="rounded-full w-20 h-20 object-cover"
          alt="movie"
        />
        <div class="text-center">
          <h3>{{ credit.name }}</h3>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
// import Swiper core and required modules
import { A11y, Pagination } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { checkProfileImage } from "@/mixins/index";
import VLazyImage from "v-lazy-image";

// Import Swiper Vue.js components

// Import Swiper styles

// Import Swiper styles
export default {
  name: "creditsView",
  props: ["actors"],
  components: {
    Swiper,
    SwiperSlide,
    VLazyImage,
  },
  setup() {
    return {
      checkProfileImage,
      modules: [A11y, Pagination],
    };
  },
};
</script>
<style scoped>
.swiper {
  position: absolute;
  padding-bottom: 20px;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  user-select: none;
}
.swiper::before {
  content: "";
  position: absolute;
  width: 60px;
  background-image: linear-gradient(
    to left,
    #fff 0%,
    #fff 25%,
    rgba(255, 255, 255, 0.26) 100%
  );
  height: 100%;
  right: -3px;
  top: 0;

  z-index: 2;
}
.swiper-pagination-bullet {
  border-radius: 0;
  width: 10px;
  height: 5px;
}
</style>