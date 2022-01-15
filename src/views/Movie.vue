<template>
  <section class="movie min-h-screen flex py-10">
    <div class="container">
      <div class="flex flex-col md:flex-row gap-7">
        <div class="movie-poster min-w-[250px]">
          <img
            :src="checkImage(movie.poster_path)"
            :alt="checkTitle(movie.title, movie.original_title)"
          />
        </div>
        <div class="movie-info">
          <h2 class="my-5 font-extrabold text-4xl text-sky-800 uppercase">
            {{ checkTitle(movie.title, movie.original_title) }}
          </h2>
          <p class="leading-7 text-gray-700">{{ movie.overview }}</p>
          <div
            class="genres flex flex-wrap gap-5 my-10"
            v-if="movie.genres.length > 0"
          >
            <span
              v-for="(genre, index) in movie.genres"
              :key="index"
              class="px-3 py-2 bg-sky-600 rounded-xl text-sm text-white"
            >
              {{ genre.name }}
            </span>
          </div>
          <div
            class="
              my-10
              grid grid-cols-2
              lg:grid-cols-3
              gap-y-8
              md:justify-items-center
              items-center
            "
          >
            <div class="flex items-center">
              <span
                class="
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
                  mr-2
                "
                >{{ movie.vote_average }}</span
              >({{ movie.vote_count }})
            </div>
            <div class="flex items-center">
              <span class="font-semibold">release :</span>
              {{ movie.release_date }}
            </div>
            <div class="flex items-center">
              <span class="font-semibold">time : </span>{{ movie.runtime }}m
            </div>
            <div class="flex items-center">
              <span class="font-semibold"> popularity :</span>
              {{ movie.popularity.toFixed(0) }}
            </div>
            <div class="flex items-center">
              <span class="font-semibold"> lang :</span>
              {{ movie.original_language }}
            </div>
          </div>
          <div
            class="
              movie-video
              justify-center
              items-center
              flex flex-col
              lg:flex-row
              gap-7
            "
            v-if="videos.length > 0"
          >
            <div
              v-for="(video, index) in videos"
              :key="index"
              class="flex maxMD:justify-center w-full md:w-9/12 lg:3/6"
            >
              <iframe
                :src="`https://www.youtube.com/embed/${video.key}`"
                height=""
                class="aspect-video w-full"
                frameborder="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { checkImage, checkTitle } from "../mixins/index";
export default {
  props: ["id"],
  name: "movieView",
  setup(props) {
    const store = useStore();

    const movie = computed(() => store.getters["movie/movie"]);
    const videos = computed(() => store.getters["movie/videos"]);

    store.dispatch("movie/fetchMovie", { id: props.id });
    console.log(movie);
    return {
      movie,
      videos,
      checkImage,
      checkTitle,
    };
  },
};
</script>
