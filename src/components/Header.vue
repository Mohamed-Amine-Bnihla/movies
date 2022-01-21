<template>
  <header
    class="h-16 absolute top-0 left-0 w-full z-10"
    :class="{ relative: showHeader, 'bg-sky-800': showHeader }"
  >
    <div class="container h-full flex justify-between items-center">
      <router-link to="/" class="text-xl font-bold text-white"
        >Movies</router-link
      >
      <ul class="flex gap-5">
        <!--  <li>
          <a href="#" class="text-white hover:text-gray-200 text-base">Home</a>
        </li>
        <li>
          <a href="#" class="text-white hover:text-gray-200 text-base">About</a>
        </li>
        <li>
          <a href="#" class="text-white hover:text-gray-200 text-base"
            >Contact</a
          >
        </li> -->
      </ul>
    </div>
  </header>
</template>

<script>
import { watch, ref } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "headerMovie",

  setup() {
    const route = useRoute();
    const showHeader = ref(false);
    watch(
      () => route.name,
      (newVal) => {
        if (newVal != "home") {
          showHeader.value = true;
        } else {
          showHeader.value = false;
        }
      }
    );
    return {
      showHeader,
    };
  },
};
</script>