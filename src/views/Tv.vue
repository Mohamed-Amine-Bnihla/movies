<template>
  <section class="tv min-h-screen flex py-10">
    <div class="container">
      <div class="flex flex-col md:flex-row gap-7">
        <div class="tv-poster min-w-[250px]">
          <img
            :src="checkImage(tv.poster_path)"
            :alt="checkName(tv.name, tv.original_name)"
          />
        </div>
        <div class="tv-info">
          <h2 class="my-5 font-extrabold text-4xl text-sky-800 uppercase">
            {{ checkName(tv.name, tv.original_name) }}
          </h2>
          <p class="leading-7 text-gray-700">{{ tv.overview }}</p>
          <div class="genres flex flex-wrap gap-5 my-10">
            <span
              v-for="(genre, index) in tv.genres"
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
                >{{ tv.vote_average }}</span
              >({{ tv.vote_count }})
            </div>
            <div class="flex items-center">
              <span class="font-semibold">release :</span>
              {{ tv.first_air_date }}
            </div>
            <div class="flex items-center">
              <span class="font-semibold">Seasons : </span
              >{{ tv.number_of_seasons }}
            </div>
            <div class="flex items-center">
              <span class="font-semibold"> popularity :</span>
              {{ tv.popularity.toFixed(0) }}
            </div>
            <div class="flex items-center">
              <span class="font-semibold"> lang :</span>
              {{ tv.original_language }}
            </div>
          </div>
          <div
            class="
              tv-video
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
import { checkImage, checkName } from "../mixins/index";
export default {
  props: ["id"],
  name: "tvView",
  setup(props) {
    const store = useStore();

    const tv = computed(() => store.getters["tv/tv"]);
    const videos = computed(() => store.getters["tv/videos"]);
    store.dispatch("tv/fetchTv", { id: props.id });

    return {
      tv,
      videos,
      checkImage,
      checkName,
    };
  },
};
</script>
