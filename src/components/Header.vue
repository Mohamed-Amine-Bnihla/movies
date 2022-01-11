<template>
  <header class="bg-sky-700 h-16 absolute top-0 left-0 w-full z-10">
    <div class="container h-full flex justify-between items-center">
      <a href="#" class="text-xl font-bold text-white">Movies</a>
      <ul class="flex gap-5">
        <li>
          <a href="#" class="text-white hover:text-gray-200 text-base">Home</a>
        </li>
        <li>
          <a href="#" class="text-white hover:text-gray-200 text-base">About</a>
        </li>
        <li>
          <a href="#" class="text-white hover:text-gray-200 text-base"
            >Contact</a
          >
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "headerMovie",
  setup() {},
};
</script>