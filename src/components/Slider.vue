<template>
  <swiper
    :modules="modules"
    :slides-per-view="6"
    :space-between="10"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide class="py-5" v-for="(movie, index) in list" :key="index">
      <div class="w-20 h-28 bg-sky-500">
        {{ movie.title }}
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
// import Swiper core and required modules
import { Scrollbar, A11y } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// Import Swiper styles
export default {
  props: ["list"],

  name: "sliderView",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup(props) {
    console.log(props.list);
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Scrollbar, A11y],
    };
  },
};
</script>