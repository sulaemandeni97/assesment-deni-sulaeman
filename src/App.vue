<template>
  <div class="bg-[#0f161d]">
    <div
      class="
        fixed
        top-0
        left-0
        flex
        align-center
        z-50
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
      <div class="flex justify-start">
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
              <div class="relative md:ml-2 mx-auto flex items-center">
                <input
                  type="text"
                  v-model="search"
                  @keyup.enter="onPlayMovie"
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
                  v-model="resultSearch.original_title"
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
      </div>
      <div
        class="hidden md:flex justify-around align-items max-w-sm w-full h-full"
        v-if="searchMovie == false"
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
          <div class="h-full">All Genre</div>
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
          <div
            class="hidden group-hover:block hover:block absolute top-16 z-30"
          >
            <div
              class="
                bg-[#0f161d]
                rounded-2xl
                w-48
                shadow-xl
                overflow-y-scroll
                max-h-[199px]
                p-4
                z-50
                text-left
              "
            >
              <div>
                <ul class="py-5">
                  <li
                    class="w-full pt-2 text-[20px]"
                    v-for="movie in movies"
                    :key="movie.id"
                    @click="onShowMovie(movie.id)"
                  >
                    {{ movie.name }}
                  </li>
                </ul>
              </div>
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
              class="
                h-8
                w-8
                bg-[#0f161d]
                rotate-45
                transform
                origin-bottom-left
              "
            ></div>
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
      <div class="block md:hidden py-6">
        <button @click="onNavMenu">
          <span>
            <img src="./assets/icons/nav-menu.svg" alt="" />
          </span>
        </button>
      </div>
    </div>

    <div
      class="fixed h-full w-full left-0 top-0 z-50 bg-[#0f161d]/95"
      v-if="navMenu == true"
    >
      <div class="flex w-full flex-row-reverse p-7">
        <button @click="onNavMenu">
          <span>
            <img src="./assets/icons/XIcon.svg" alt="" />
          </span>
        </button>
      </div>
      <div class="mt-24 px-4 flex flex-col text-white">
        <form action="">
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
            <div class="relative md:ml-2 mx-auto flex items-center text-left">
              <input
                v-model="search"
                @keyup.enter="onPlayMovie"
                type="text"
                placeholder="Try Search On Ward"
                class="
                  absolute
                  bg-transparent
                  border-0
                  outline-none
                  text-background text-black
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
                type="text"
                v-model="resultSearch.original_title"
                disabled
                class="
                  bg-white
                  md:bg-transparent
                  rounded rounded-r-none
                  w-64
                  md:w-128
                  px-4
                  py-2
                  text-black/50
                  md:text-white/50
                  italic
                  font-medium
                  md:font-normal
                "
              />
              <div
                class="
                  bg-white
                  text-[#C4C4C4]
                  px-4
                  py-2.5
                  z-50
                  rounded rounded-l-none
                "
              >
                <span>
                  <img src="./assets/icons/searchIcon.svg" alt="" />
                </span>
              </div>
            </div>
          </div>
        </form>
        <span class="mt-20"> </span>
        <button
          class="bg-transparent mb-4 text-left"
          @click="allGenre = !allGenre"
        >
          <div class="text-[24px] font-medium flex items-center">
            All Genre
            <span
              :class="
                allGenre == true
                  ? 'ml-4 mt-1 rotate-180 transition ease-out duration-300'
                  : 'ml-4 mt-1 transition ease-out duration-300'
              "
            >
              <img src="./assets/icons/down-icon.svg" alt="" />
            </span>
          </div>
        </button>
        <div>
          <ul class="text-left" v-if="allGenre == true">
            <li
              v-for="genre in movies"
              :key="genre.id"
              class="w-full px-7 py-1 first:py-3 text-[20px] mb-2"
              @click="onShowMovie(genre.id)"
            >
              {{ genre.name }}
            </li>
          </ul>
        </div>
        <a
          href="/#"
          class="my-6 text-[24px] font-medium md:font-normal md:text-base"
          >Views Plans</a
        >
      </div>
    </div>
    <div @click="searchMovie == false"></div>
    <!-- </div> -->
  </div>
  <router-view />
  <!-- <home /> -->
</template>
<script type="text/javascript">
import { ref } from "@vue/reactivity";
import { onMounted, watch } from "@vue/runtime-core";
import router from "../src/router";
import axios from "axios";

import Home from "./views/Home.vue";
export default {
  components: {
    Home,
  },
  setup() {
    const movies = ref([]);
    const searchMovie = ref(false);
    const navMenu = ref(false);
    const allGenre = ref(false);
    const search = ref(null);
    const resultSearch = ref([]);

    watch([search], () => {
      onSearchMovie();
    });

    onMounted(() => {
      onFetchRecords();
    });

    const onPlayMovie = () => {
      navMenu.value = false;

      router.push({
        name: "detail-movie",
        query: {
          id: resultSearch.value.id,
          api_key: "30524f455f7dd9239270faa005d68374",
        },
      });
    };

    const onNavMenu = () => {
      navMenu.value = !navMenu.value;
      let list = document.querySelector(".head-nav");
      let head = document.querySelector(".nav-menu");

      head.addEventListener("click", () => {
        list.classList.toggle(".nav-active");
      });
    };

    const onSearch = () => {
      searchMovie.value = !searchMovie.value;
    };

    const onShowMovie = (id) => {
      navMenu.value = false;

      router.push({
        name: "list-movie",
        query: { id: id, api_key: "30524f455f7dd9239270faa005d68374" },
      });
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

    const onSearchMovie = () => {
      if (search.value == "") resultSearch.value = "";

      return new Promise((resolve, reject) => {
        axios
          .get(
            "https://api.themoviedb.org/3/search/movie?api_key=30524f455f7dd9239270faa005d68374&language=en-US&query=" +
              search.value
          )
          .then((response) => (resultSearch.value = response.data.results[0]))

          .catch((error) => reject(error));
      });
    };

    return {
      movies,
      searchMovie,
      navMenu,
      allGenre,
      search,
      resultSearch,

      onSearch,
      onShowMovie,
      onPlayMovie,
      onNavMenu,
      onSearchMovie,
      onFetchRecords,
    };
  },
};
</script>

<style>
.font-style {
  width: 50px;
  height: 19px;
  left: 703px;
  top: 25px;
  line-height: 19px;
}

.nav-active {
  transform: translateX(0%);
}

@keyframes navLinkFade {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0%);
  }
}
</style>
