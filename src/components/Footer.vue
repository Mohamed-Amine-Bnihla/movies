<template>
  <footer class="bg-sky-700">
    <div class="container flex justify-between items-center py-2">
      <div class="attribution flex gap-5 items-center">
        <img
          src="@/assets/images/movie_logo.png"
          class="aspect-square w-12 h-12 opacity-95"
          alt="movieDb logo"
        />
        <p class="text-white">
          This product uses the TMDB API but is not endorsed or certified by
          TMDB.
        </p>
      </div>
      <div class="copyright text-white">copyright &copy; - MAB</div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footerMovie",
  setup() {},
};
</script>