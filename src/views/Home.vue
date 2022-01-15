<template>
  <section class="home min-h-screen lg:h-screen relative">
    <div
      class="
        overlay
        absolute
        top-0
        left-0
        w-full
        h-full
        bg-gradient-to-r
        from-sky-800
        via-sky-700
        to-sky-500
        opacity-90
      "
    ></div>
    <div
      class="
        container
        h-full
        flex flex-col-reverse
        lg:flex-row
        items-center
        gap-14
        justify-between
        relative
        py-20
      "
      v-if="trending"
    >
      <div
        class="
          content
          w-full
          md:max-w-xl
          flex flex-col
          maxMD:justify-center maxMD:text-center
        "
      >
        <h2 class="text-4xl md:text-5xl font-bold uppercase text-white mb-8">
          {{ checkTitle(trending.title, trending.original_title) }}
        </h2>
        <p class="text-gray-200 leading-8 mb-8 line-clamp-4">
          {{ trending.overview }}
        </p>
        <router-link :to="`/movie/${trending.id}`">
          <span
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
            >Learn more</span
          >
        </router-link>
      </div>
      <div
        class="
          w-4/5
          lg:w-2/5
          flex
          justify-center
          lg:justify-start
          image-container
        "
      >
        <v-lazy-image
          :src="checkImage(trending.poster_path)"
          :alt="checkTitle(trending.title, trending.original_title)"
          class="latest-movie-image rounded-md"
        />
      </div>
    </div>
  </section>
  <section class="py-11">
    <h1
      class="
        font-semibold
        text-2xl
        md:text-3xl
        text-sky-800
        mx-auto
        w-fit
        my-5
        capitalize
      "
    >
      Popular Movies
    </h1>
    <div class="container">
      <slider :list="popular" type="movie"></slider>
    </div>
  </section>
  <section class="py-11">
    <h1
      class="
        font-semibold
        text-2xl
        md:text-3xl
        text-sky-800
        mx-auto
        w-fit
        my-5
        capitalize
      "
    >
      Top Rated Movies
    </h1>
    <div class="container">
      <slider :list="topRated" type="movie"></slider>
    </div>
  </section>
  <section class="py-11">
    <h1
      class="
        font-semibold
        text-2xl
        md:text-3xl
        text-sky-800
        mx-auto
        w-fit
        my-5
        capitalize
      "
    >
      popular Tv Shows
    </h1>
    <div class="container">
      <slider :list="popularTv" type="tv"></slider>
    </div>
  </section>
  <section class="py-11">
    <h1
      class="
        font-semibold
        text-2xl
        md:text-3xl
        text-sky-800
        mx-auto
        w-fit
        my-5
        capitalize
      "
    >
      Top Rated Tv Shows
    </h1>
    <div class="container">
      <slider :list="topRatedTv" type="tv"></slider>
    </div>
  </section>
</template>
<script>
import { computed, defineAsyncComponent } from "vue";
import { useStore } from "vuex";
import { checkImage, checkTitle } from "@/mixins/index";
import VLazyImage from "v-lazy-image";
const Slider = defineAsyncComponent(() => import("@/components/Slider.vue"));
export default {
  name: "HomeView",
  components: {
    Slider,
    VLazyImage,
  },
  setup() {
    const store = useStore();

    const popular = computed(() => store.getters["movies/popular"]);
    const topRated = computed(() => store.getters["movies/topRated"]);
    const popularTv = computed(() => store.getters["tvShows/popular"]);
    const topRatedTv = computed(() => store.getters["tvShows/topRated"]);
    const trending = computed(() => store.getters["movies/trending"]);

    store.dispatch("movies/fetchPopularMovies");
    store.dispatch("movies/fetchTopMovies");
    store.dispatch("tvShows/fetchPopularTv");
    store.dispatch("tvShows/fetchTopTv");
    store.dispatch("movies/fetchTrending");

    return {
      popular,
      topRated,
      popularTv,
      topRatedTv,
      trending,
      checkImage,
      checkTitle,
    };
  },
};
</script>
<style >
.image-container {
  transform-style: preserve-3d;
  perspective: 550px;
}
.latest-movie-image {
  transform: rotateY(347deg) rotateX(10deg);
  box-shadow: 4px 20px 13px #1c1c1c87;
  transition: transform 0.6s;
}
.latest-movie-image:hover {
  transform: rotateY(359deg) rotateX(0deg);
}
.home {
  background-image: url("../assets/images/moviesBG.jpg");
  background-size: cover;
}
</style>