<template>
  <div class="min-h-screen w-full bg-[#0f161d]">
    <div class="w-full h-screen relative pack-train">
      <img
        src="../assets/images/cover.svg"
        class="object-cover w-full h-full"
        alt="..."
      />
      <div
        class="
          background-image
          absolute
          top-0
          left-0
          h-full
          w-full
          svelte-16x78e
        "
      ></div>
      <div
        class="absolute bottom-[54px] md:bottom-[140px] md:left-[108px] px-3"
      >
        <h1
          class="
            font-extrabold
            text-white text-4xl
            md:text-[54px]
            leading-[63.28px]
            mb-5
            md:mb-[7px]
          "
        >
          Explore 50.000+ Movies
        </h1>
        <p
          class="
            text-white text-[24px]
            leading-[28.13px]
            md:py-[7px] md:text-[42px] md:leading[49.22px] md:h-[49px]
            mb-6
            md:mb-[56px]
          "
        >
          Watch anywhere. Cancel anytime
        </p>
        <div class="flex justify-start">
          <button
            class="
              w-full
              md:w-auto
              px-12
              py-2.5
              md:py-4
              font-bold
              text-white
              bg-[#FF4244]
              rounded-[10px]
              text-[24px]
              md:text-[32px]
              hover:scale-105
              active:scale-105
              flex
              items-center
              justify-center
            "
            to="/list-movie"
          >
            <router-link to="/list-movie"> Get Started </router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

import axios from "axios";

export default {
  components: {},
  setup({ root }) {
    const movies = ref([]);

    onMounted(() => {
      onFetchRecords();
    });
    const onFetchRecords = () => {
      return new Promise((resolve, reject) => {
        axios
          .get(
            "https://api.themoviedb.org/3/genre/movie/list?api_key=30524f455f7dd9239270faa005d68374&language=en-US&page=1"
          )
          .then((response) => (movies.value = response.data.results))

          .catch((error) => reject(error));
      });
    };

    const onClickGenre = () => {
      console.log("Hallo");
    };

    const onShowListMovie = () => {
      console.log("Hallo");
      root.$router.push({
        name: "list-movie",
      });
    };
    return {
      //variable
      movies,

      onFetchRecords,
      onShowListMovie,
      onClickGenre,
    };
  },
};
</script>

<style>
.background-image {
  background: linear-gradient(180deg, rgba(15, 22, 29, 0.29) 0%, #0f161d 100%);
}
</style>
