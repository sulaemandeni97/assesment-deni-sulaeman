<template>
  <div
    class="
      fixed
      top-0
      left-0
      flex
      align-center
      z-20
      w-full
      h-[69px]
      px-7
      md:px-28
      text-white
      justify-between
      default-bg-gradient
      backdrop-blur-[5px]
    "
  >
    <router-link to="/">
      <img src="./assets/images/logo.png" alt="" class="my-6" />
    </router-link>
    <div class="hidden md:flex" v-if="searchMovie == true">
      <form>
        <div
          class="
            flex
            w-full
            align-center
            items-center
            my-6
            md:my-3 md:ml-9 md:text-white/50
          "
        >
          <button type="submit"></button>
          <div class="relative md:ml-2 mx-auto flex items-center">
            <input
              type="text"
              name="searchmovie"
              placeholder="Try Search On Ward"
              class="
                absolute
                bg-transparent
                border-0
                outline-none
                text-background
                rounded rounded-r-none
                w-64
                md:w-128
                px-4
                py-2
                md:text-white
                italic
                md:font-normal
                font-medium
                placeholder:italic placeholder:font-medium
                md:placeholder:font-normal
              "
            />
            <input
              class="
                bg-white
                md:bg-transparent
                rounded rounded-r-none
                w-64
                md:w-128
                px-4
                py-2
                text-background/50
                md:text-white/50
                italic
                font-medium
                md:font-normal
              "
            />
          </div>
        </div>
      </form>
    </div>
    <div
      class="
        hidden
        md:flex
        justify-around
        align-items
        max-w-sm
        w-full
        h-full
        font-style
      "
    >
      <div
        class="
          group
          text-center
          h-full
          flex
          items-center
          align-center
          flex-col
          py-6
          relative
          cursor-pointer
        "
      >
        <div class="h-full">
          <router-link to="/">All Genre</router-link>
        </div>
        <div
          class="
            hidden
            group-hover:inline-block
            w-12
            overflow-hidden
            absolute
            top-8
            mt-2
          "
        >
          <div
            class="
              h-10
              w-8
              bg-background
              rotate-45
              transform
              origin-bottom-left
            "
          ></div>
        </div>
        <div class="hidden group-hover:block hover:block absolute top-16">
          <div
            class="
              bg-[#0f161d]
              rounded-2xl
              w-48
              shadow-xl
              z-20
              overflow-y-scroll
              max-h-[199px]
            "
          >
            <ul class="text-left">
              <li
                class="w-full px-7 py-2 text-[20px]"
                v-for="movie in movies"
                :key="movie.id"
              >
                {{ movie.name }}
              </li>
            </ul>
          </div>
        </div>

        <div
          class="
            hidden
            group-hover:inline-block
            w-12
            overflow-hidden
            absolute
            top-8
            mt-2
          "
        >
          <div
            class="h-8 w-8 bg-[#0f161d] rotate-45 transform origin-bottom-left"
          ></div>
        </div>
        <div class="hidden group-hover:block hover:block absolute top-16">
          <div
            class="
              bg-[#0f161d]
              rounded-2xl
              w-48
              shadow-xl
              z-20
              overflow-y-scroll
              max-h-[250px]
            "
          >
            <ul class="text-left"></ul>
          </div>
        </div>
      </div>
      <div class="flex my-6 items-center justify-center">
        <span class="mr-3">
          <img src="./assets/icons/search.svg" alt="" />
        </span>
        <div @click="onSearch" class="cursor-pointer">Search</div>
      </div>
      <router-link class="py-6" to="/list-movie">View Plans</router-link>
    </div>
    <div class="hidden md:flex align-center items-center">
      <select
        name=""
        id=""
        class="px-4 py-2 bg-transparent border-0 outline-none bg-opacity-0"
        style="background: transparent; -webkit-appearance: none"
      >
        <option value="En">En</option>
        <option value="Id">Id</option>
      </select>
      <span>
        <img src="./assets/icons/down-icon.svg" alt="" class="absolut" />
      </span>
    </div>
    <div class="block md:hidden py-6"></div>
  </div>

  <router-view />
  <!-- <home /> -->
</template>
<script type="text/javascript">
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import axios from "axios";

import Home from "./views/Home.vue";
export default {
  components: {
    Home,
  },
  setup() {
    const movies = ref([]);
    const searchMovie = ref(null);

    onMounted(() => {
      onFetchRecords();
    });

    const onSearch = () => {
      searchMovie.value == "halooooo";
      console.log("Hallo");
    };

    const onFetchRecords = () => {
      return new Promise((resolve, reject) => {
        axios
          .get(
            "https://api.themoviedb.org/3/genre/movie/list?api_key=30524f455f7dd9239270faa005d68374&language=en-US&page=1"
          )
          .then((response) => (movies.value = response.data.genres))

          .catch((error) => reject(error));
      });
    };

    return {
      movies,
      searchMovie,

      onSearch,
      onFetchRecords,
    };
  },
};
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<style>
.font-style {
  width: 50px;
  height: 19px;
  left: 703px;
  top: 25px;
  line-height: 19px;
}
</style>
