<template>
  <swiper
    :modules="modules"
    :slides-per-view="2"
    :space-between="10"
    :loop="true"
    :pagination="{ clickable: true, dynamicBullets: true }"
    :grabCursor="true"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :breakpoints="{
      '768': {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      '1024': {
        slidesPerView: 5,
        spaceBetween: 10,
      },
    }"
  >
    <swiper-slide class="py-5" v-for="(movie, index) in list" :key="index">
      <router-link :to="`/${type}/${movie.id}`">
        <div class="relative">
          <span
            class="
              star
              absolute
              right-2
              top-2
              w-12
              h-12
              bg-yellow-400
              border border-yellow-700
              flex
              justify-center
              items-center
              clip-path-star
              font-semibold
              text-sm
            "
            >{{ movie.vote_average }}</span
          >
          <v-lazy-image
            :src="checkImage(movie.poster_path)"
            class="w-full"
            alt="movie"
          />
        </div>
      </router-link>
    </swiper-slide>
  </swiper>
</template>
<script>
// import Swiper core and required modules
import { A11y, Pagination } from "swiper";
import { checkImage } from "@/mixins/index";
import VLazyImage from "v-lazy-image";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import Swiper styles
export default {
  props: ["list", "type"],

  name: "sliderView",
  components: {
    Swiper,
    SwiperSlide,
    VLazyImage,
  },
  setup() {
    const onSwiper = () => {};
    const onSlideChange = () => {};
    return {
      onSwiper,
      onSlideChange,
      modules: [A11y, Pagination],
      checkImage,
    };
  },
};
</script>
<style>
.swiper {
  padding-bottom: 20px;
}
.swiper-pagination-bullet {
  border-radius: 0;
  width: 20px;
  height: 10px;
}
</style>