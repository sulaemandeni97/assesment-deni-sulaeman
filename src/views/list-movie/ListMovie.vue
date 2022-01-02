<template>
  <div class="bg-[#0f161d] w-full min-h-screen">
    <div class="pt-24 md:pt-26">
      <div
        class="
          scrollbar-hide
          min-w-full
          overflow-x-scroll
          flex
          align-center
          snap-x snap-mandatory
        "
      >
        <div
          class="
            relative
            snap-center
            items
            first:ml-7 first:md:ml-28
            last:mr-7 last:md:mr-28
            rounded-[20px]
            flex-shrink-0
            mx-4
            text-left
          "
          v-for="movie in tranding"
          :key="movie.id"
          @click="onPlayMovie(movie.id)"
        >
          <div
            class="
              hidden
              md:block
              absolute
              text-white
              bottom-16
              left-16
              z-20
              border-b-1
            "
          >
            <h1 class="font-black text-[32px] mb-4 font-title">
              {{ movie.original_title }}
            </h1>
            <div class="flex flex-col">
              <p
                class="
                  max-w-[522px]
                  mb-4
                  mt-4
                  md:mt-0
                  order-last
                  md:order-first
                "
              >
                {{ movie.overview }}
              </p>
              <p class="text-white/70 mb-4 leading-none hidden md:block">
                Adventure, Actions, Fantasy
              </p>

              <div class="flex items-center mb-4">
                <span class="mr-6">
                  <img
                    src="../../assets/icons/dolbi-atmos.svg"
                    alt="..."
                    style="
                      width: 72px;
                      height: 19px;
                      viewbox: 0 0 72 19;
                      fill: white;
                    "
                    class="text-white"
                  />
                </span>
                <img
                  src="../../assets/icons/dolby-atmos-rectangle.svg"
                  alt="..."
                  style="
                    width: 22px;
                    height: 29px;
                    viewbox: 0 0 22 29;
                    fill: white;
                  "
                  class="text-white"
                />
              </div>
            </div>

            <div class="pt-9">
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
                  z-20
                "
              >
                <router-link to="/detail-movie"> Watch Now</router-link>

                <span class="ml-4">
                  <router-link to="/detail-movie">
                    <img
                      src="../../assets/icons/carbon_play-outline.svg"
                      alt=""
                    />
                  </router-link>
                </span>
              </button>
            </div>
          </div>

          <div
            class="
              background-image
              absolute
              top-0
              left-0
              h-full
              w-full
              rounded-[20px]
            "
          ></div>
          <img
            :src="'https://image.tmdb.org/t/p/original/' + movie.backdrop_path"
            class="
              w-[331px]
              md:w-[1237px]
              h-[167px]
              md:h-[646px]
              rounded-[20px]
            "
            alt="..."
          />
        </div>
      </div>
    </div>

    <div class="w-full flex items-center justify-center mt-4 mb-4">
      <button
        aria-label="Carousel Navigation"
        class="bg-white rounded-full mx-1 h-3 w-3 transition ease-out"
        disabled
      />
      <button
        aria-label="Carousel Navigation"
        class="bg-white rounded-full mx-1 h-2.5 w-2.5 transition ease-out"
        disabled
      />
      <button
        aria-label="Carousel Navigation"
        class="bg-white rounded-full mx-1 h-2 w-2 transition ease-out"
        disabled
      />
    </div>

    <div v-if="movieId !== null ? movieId == 0 : movieId == null">
      <best-movie />
    </div>

    <div v-if="movieId !== null ? movieId == 28 : movieId == null">
      <action />
    </div>

    <div v-if="movieId !== null ? movieId == 12 : movieId == null">
      <adventure />
    </div>

    <div v-if="movieId !== null ? movieId == 16 : movieId == null">
      <animation />
    </div>

    <div v-if="movieId !== null ? movieId == 35 : movieId == null">
      <comdey />
    </div>

    <div v-if="movieId !== null ? movieId == 80 : movieId == null">
      <crime />
    </div>

    <div v-if="movieId !== null ? movieId == 99 : movieId == null">
      <documentary />
    </div>

    <div v-if="movieId !== null ? movieId == 18 : movieId == null">
      <drama />
    </div>

    <div v-if="movieId !== null ? movieId == 0 : movieId == null">
      <family />
    </div>

    <div v-if="movieId !== null ? movieId == 0 : movieId == null">
      <fantasy />
    </div>
  </div>
</template>
<script>
import router from "../../router";
import axios from "axios";
import { ref } from "@vue/reactivity";
import { onMounted, watch } from "@vue/runtime-core";

import BestMovie from "./components/BestMovie.vue";
import Action from "./components/Action.vue";
import Adventure from "./components/Adventure.vue";
import Animation from "./components/Animation.vue";
import Comdey from "./components/Comdey.vue";
import Crime from "./components/Crime.vue";
import Documentary from "./components/Documentary.vue";
import Drama from "./components/Drama.vue";
import Family from "./components/Family.vue";
import Fantasy from "./components/Fantasy.vue";

export default {
  components: {
    BestMovie,
    Action,
    Adventure,
    Animation,
    Comdey,
    Crime,
    Documentary,
    Drama,
    Family,
    Fantasy,
  },
  setup(props, { root }) {
    const movies = ref([]);
    const tranding = ref([]);

    const movieId = ref(null);

    watch([router.currentRoute], () => {
      movieId.value = router.currentRoute._value.query.id;
    });

    onMounted(() => {
      let id = router.currentRoute._value.query.id;
      if (id) {
        movieId.value = id;
      } else {
        movieId.value == null;
      }

      onFetchRecords();
      onFetchTranding();
    });

    const onPlayMovie = (id) => {
      router.push({
        name: "play-movie",

        query: { id: id, api_key: "30524f455f7dd9239270faa005d68374" },
      });
    };

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

    const onFetchTranding = () => {
      return new Promise((resolve, reject) => {
        axios
          .get(
            "https://api.themoviedb.org/3/trending/movie/week?api_key=30524f455f7dd9239270faa005d68374&language=en-US&page=1"
          )
          .then((response) => (tranding.value = response.data.results))

          .catch((error) => reject(error));
      });
    };

    return {
      //variable
      movieId,
      movies,
      tranding,

      //actions
      onPlayMovie,
      onFetchRecords,
      onFetchTranding,
    };
  },
};
</script>
<style>
.background-image {
  background: linear-gradient(180deg, rgba(15, 22, 29, 0.29) 0%, #0f161d 100%);
}
</style>
