<template>
  <div class="bg-[#0f161d]">
    <div class="w-full">
      <!-- <div
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
        <img src="../../assets/images/logo.png" alt="" class="my-6" />
        <div
          class="
            hidden
            md:flex
            justify-around
            align-items
            max-w-sm
            w-full
            h-full
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
                  h-8
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
                  bg-background
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
            <span class="mr-3">svg</span>
            Search
          </div>
          <span class="py-6">View Plans</span>
        </div>
        <div class="hidden md:flex align-center items-center bg-transparent">
          <select
            name=""
            id=""
            class="px-4 py-2 border-0 outline-none svelte-s3vvlu"
          >
            <option value="En">En</option>
            <option value="Id">Id</option>
          </select>
        </div>
        <div class="block md:hidden py-6"></div>
      </div> -->

      <div class="pt-24 md:pt-26">
        <div
          class="
            hide-scroll
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
            @click="onShowDetail"
            v-for="movie in tranding"
            :key="movie.id"
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
                  Action, Adventure, Science Fiction
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

            <div>
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
                :src="
                  'https://image.tmdb.org/t/p/original/' + movie.backdrop_path
                "
                class="bg-black rounded"
                style="
                  max-width: 1237px;
                  max-height: 646px;
                  border-radius: 20px;
                "
                alt="..."
              />
            </div>
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
    </div>
    <!-- <div class="flex flex-wrap justify-center mb-10 pt-20">
      <img
        src="../../assets/images/preview1.png"
        class="bg-black rounded w-full"
        style="max-height: 646px; max-width: 1237px"
        alt="..."
      />
    </div> -->
    <div class="text-white text-[24px] md:text-[42px] font-bold py-2.5 md:py-8">
      <div class="flex items-end justify-between px-7 md:px-28 mb-6">
        <h3>Best of all</h3>
        <div class="flex">
          <button class="rotate-90" disabled>
            <h3>
              {{ "<" }}
            </h3>
          </button>
          <button class="-rotate-90 svelte-1p62w5x">
            {{ ">" }}
          </button>
        </div>
      </div>

      <div
        class="
          hide-scroll
          min-w-full
          overflow-x-scroll
          flex
          align-center
          snap-x snap-mandatory
        "
      >
        <div
          class="
            mx-2
            md:mx-5
            min-w-fit
            first:ml-7 first:md:ml-28
            last:mr-7 last:md:mr-28
          "
          v-for="movie in popular"
          :key="movie.id"
        >
          <img
            class="
              w-[126px]
              h-[189px]
              md:w-[269px] md:h-[403px]
              rounded-xl
              md:rounded-[40px]
            "
            :src="'https://image.tmdb.org/t/p/original/' + movie.poster_path"
          />
        </div>
      </div>
    </div>

    <!-- Image 2 -->

    <div class="text-white text-[24px] md:text-[42px] font-bold py-2.5 md:py-8">
      <div class="flex items-end justify-between px-7 md:px-28 mb-6">
        <h3>Actions</h3>
      </div>

      <div
        class="
          hide-scroll
          min-w-full
          overflow-x-scroll
          flex
          align-center
          snap-x snap-mandatory
        "
      >
        <div
          class="
            mx-2
            md:mx-5
            min-w-fit
            first:ml-7 first:md:ml-28
            last:mr-7 last:md:mr-28
          "
          v-for="movie in action"
          :key="movie.id"
        >
          <img
            class="
              w-[126px]
              h-[189px]
              md:w-[269px] md:h-[403px]
              rounded-xl
              md:rounded-[40px]
            "
            :src="'https://image.tmdb.org/t/p/original/' + movie.poster_path"
          />
        </div>
      </div>
    </div>

    <!-- adventure, -->
    <div class="text-white text-[24px] md:text-[42px] font-bold py-2.5 md:py-8">
      <div class="flex items-end justify-between px-7 md:px-28 mb-6">
        <h3>Adventure</h3>
      </div>

      <div
        class="
          hide-scroll
          min-w-full
          overflow-x-scroll
          flex
          align-center
          snap-x snap-mandatory
        "
      >
        <div
          class="
            mx-2
            md:mx-5
            min-w-fit
            first:ml-7 first:md:ml-28
            last:mr-7 last:md:mr-28
          "
          v-for="movie in adventure"
          :key="movie.id"
        >
          <img
            class="
              w-[126px]
              h-[189px]
              md:w-[269px] md:h-[403px]
              rounded-xl
              md:rounded-[40px]
            "
            :src="'https://image.tmdb.org/t/p/original/' + movie.poster_path"
          />
        </div>
      </div>
    </div>

    <!-- animation, -->
    <div class="text-white text-[24px] md:text-[42px] font-bold py-2.5 md:py-8">
      <div class="flex items-end justify-between px-7 md:px-28 mb-6">
        <h3>Animations</h3>
      </div>

      <div
        class="
          hide-scroll
          min-w-full
          overflow-x-scroll
          flex
          align-center
          snap-x snap-mandatory
        "
      >
        <div
          class="
            mx-2
            md:mx-5
            min-w-fit
            first:ml-7 first:md:ml-28
            last:mr-7 last:md:mr-28
          "
          v-for="movie in animation"
          :key="movie.id"
        >
          <img
            class="
              w-[126px]
              h-[189px]
              md:w-[269px] md:h-[403px]
              rounded-xl
              md:rounded-[40px]
            "
            :src="'https://image.tmdb.org/t/p/original/' + movie.poster_path"
          />
        </div>
      </div>
    </div>

    <!-- comedy, -->
    <div class="text-white text-[24px] md:text-[42px] font-bold py-2.5 md:py-8">
      <div class="flex items-end justify-between px-7 md:px-28 mb-6">
        <h3>Comedy</h3>
      </div>

      <div
        class="
          hide-scroll
          min-w-full
          overflow-x-scroll
          flex
          align-center
          snap-x snap-mandatory
        "
      >
        <div
          class="
            mx-2
            md:mx-5
            min-w-fit
            first:ml-7 first:md:ml-28
            last:mr-7 last:md:mr-28
          "
          v-for="movie in comedy"
          :key="movie.id"
        >
          <img
            class="
              w-[126px]
              h-[189px]
              md:w-[269px] md:h-[403px]
              rounded-xl
              md:rounded-[40px]
            "
            :src="'https://image.tmdb.org/t/p/original/' + movie.poster_path"
          />
        </div>
      </div>
    </div>

    <!-- crime, -->
    <div class="text-white text-[24px] md:text-[42px] font-bold py-2.5 md:py-8">
      <div class="flex items-end justify-between px-7 md:px-28 mb-6">
        <h3>Crime</h3>
      </div>
      <div
        class="
          hide-scroll
          min-w-full
          overflow-x-scroll
          flex
          align-center
          snap-x snap-mandatory
        "
      >
        <div
          class="
            mx-2
            md:mx-5
            min-w-fit
            first:ml-7 first:md:ml-28
            last:mr-7 last:md:mr-28
          "
          v-for="movie in crime"
          :key="movie.id"
        >
          <img
            class="
              w-[126px]
              h-[189px]
              md:w-[269px] md:h-[403px]
              rounded-xl
              md:rounded-[40px]
            "
            :src="'https://image.tmdb.org/t/p/original/' + movie.poster_path"
          />
        </div>
      </div>
    </div>

    <!-- documentary, -->
    <div class="text-white text-[24px] md:text-[42px] font-bold py-2.5 md:py-8">
      <div class="flex items-end justify-between px-7 md:px-28 mb-6">
        <h3>Documentary</h3>
      </div>

      <div
        class="
          hide-scroll
          min-w-full
          overflow-x-scroll
          flex
          align-center
          snap-x snap-mandatory
        "
      >
        <div
          class="
            mx-2
            md:mx-5
            min-w-fit
            first:ml-7 first:md:ml-28
            last:mr-7 last:md:mr-28
          "
          v-for="movie in documentary"
          :key="movie.id"
        >
          <img
            class="
              w-[126px]
              h-[189px]
              md:w-[269px] md:h-[403px]
              rounded-xl
              md:rounded-[40px]
            "
            :src="'https://image.tmdb.org/t/p/original/' + movie.poster_path"
          />
        </div>
      </div>
    </div>

    <!-- drama, -->
    <div class="text-white text-[24px] md:text-[42px] font-bold py-2.5 md:py-8">
      <div class="flex items-end justify-between px-7 md:px-28 mb-6">
        <h3>Drama</h3>
      </div>
      <div
        class="
          hide-scroll
          min-w-full
          overflow-x-scroll
          flex
          align-center
          snap-x snap-mandatory
        "
      >
        <div
          class="
            mx-2
            md:mx-5
            min-w-fit
            first:ml-7 first:md:ml-28
            last:mr-7 last:md:mr-28
          "
          v-for="movie in drama"
          :key="movie.id"
        >
          <img
            class="
              w-[126px]
              h-[189px]
              md:w-[269px] md:h-[403px]
              rounded-xl
              md:rounded-[40px]
            "
            :src="'https://image.tmdb.org/t/p/original/' + movie.poster_path"
          />
        </div>
      </div>
    </div>

    <!-- family, -->
    <div class="text-white text-[24px] md:text-[42px] font-bold py-2.5 md:py-8">
      <div class="flex items-end justify-between px-7 md:px-28 mb-6">
        <h3>Family</h3>
      </div>

      <div
        class="
          hide-scroll
          min-w-full
          overflow-x-scroll
          flex
          align-center
          snap-x snap-mandatory
        "
      >
        <div
          class="
            mx-2
            md:mx-5
            min-w-fit
            first:ml-7 first:md:ml-28
            last:mr-7 last:md:mr-28
          "
          v-for="movie in family"
          :key="movie.id"
        >
          <img
            class="
              w-[126px]
              h-[189px]
              md:w-[269px] md:h-[403px]
              rounded-xl
              md:rounded-[40px]
            "
            :src="'https://image.tmdb.org/t/p/original/' + movie.poster_path"
          />
        </div>
      </div>
    </div>

    <!-- fantasy, -->
    <div class="text-white text-[24px] md:text-[42px] font-bold py-2.5 md:py-8">
      <div class="flex items-end justify-between px-7 md:px-28 mb-6">
        <h3>Fantasy</h3>
      </div>

      <div
        class="
          hide-scroll
          min-w-full
          overflow-x-scroll
          flex
          align-center
          snap-x snap-mandatory
        "
      >
        <div
          class="
            mx-2
            md:mx-5
            min-w-fit
            first:ml-7 first:md:ml-28
            last:mr-7 last:md:mr-28
          "
          v-for="movie in fantasy"
          :key="movie.id"
        >
          <img
            class="
              w-[126px]
              h-[189px]
              md:w-[269px] md:h-[403px]
              rounded-xl
              md:rounded-[40px]
            "
            :src="'https://image.tmdb.org/t/p/original/' + movie.poster_path"
          />
        </div>
      </div>
    </div>

    <!-- history, -->
    <div class="text-white text-[24px] md:text-[42px] font-bold py-2.5 md:py-8">
      <div class="flex items-end justify-between px-7 md:px-28 mb-6">
        <h3>History</h3>
      </div>

      <div
        class="
          hide-scroll
          min-w-full
          overflow-x-scroll
          flex
          align-center
          snap-x snap-mandatory
        "
      >
        <div
          class="
            mx-2
            md:mx-5
            min-w-fit
            first:ml-7 first:md:ml-28
            last:mr-7 last:md:mr-28
          "
          v-for="movie in history"
          :key="movie.id"
        >
          <img
            class="
              w-[126px]
              h-[189px]
              md:w-[269px] md:h-[403px]
              rounded-xl
              md:rounded-[40px]
            "
            :src="'https://image.tmdb.org/t/p/original/' + movie.poster_path"
          />
        </div>
      </div>
    </div>

    <!-- horor, -->
    <div class="text-white text-[24px] md:text-[42px] font-bold py-2.5 md:py-8">
      <div class="flex items-end justify-between px-7 md:px-28 mb-6">
        <h3>Horor</h3>
      </div>

      <div
        class="
          hide-scroll
          min-w-full
          overflow-x-scroll
          flex
          align-center
          snap-x snap-mandatory
        "
      >
        <div
          class="
            mx-2
            md:mx-5
            min-w-fit
            first:ml-7 first:md:ml-28
            last:mr-7 last:md:mr-28
          "
          v-for="movie in horor"
          :key="movie.id"
        >
          <img
            class="
              w-[126px]
              h-[189px]
              md:w-[269px] md:h-[403px]
              rounded-xl
              md:rounded-[40px]
            "
            :src="'https://image.tmdb.org/t/p/original/' + movie.poster_path"
          />
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
    const tranding = ref([]);
    const action = ref([]);
    const adventure = ref([]);
    const animation = ref([]);
    const comedy = ref([]);
    const crime = ref([]);
    const documentary = ref([]);
    const drama = ref([]);
    const family = ref([]);
    const fantasy = ref([]);
    const history = ref([]);
    const horor = ref([]);
    const music = ref([]);
    const mistery = ref([]);
    const romance = ref([]);
    const popular = ref([]);

    onMounted(() => {
      onFetchRecords();
      onFetchPopular();
      onFetchTranding();
      onFetchAction();
      onFetchAdventure();
      onFetchAnimation();
      onFetchComedy();
      onFetchCrime();
      onFetchDocumentary();
      onFetchDrama();
      onFetchFamily();
      onFetchFantasy();
      onFetchHistory();
      onFetchHoror();
    });

    const onShowDetail = () => {
      // root.$router.push({
      //   name: "home",
      // });
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
    const onFetchPopular = () => {
      return new Promise((resolve, reject) => {
        axios
          .get(
            "https://api.themoviedb.org/3/movie/popular?api_key=30524f455f7dd9239270faa005d68374&language=en-US&page=1"
          )
          .then((response) => (popular.value = response.data.results))

          .catch((error) => reject(error));
      });
    };
    const onFetchAction = () => {
      return new Promise((resolve, reject) => {
        axios
          .get(
            "https://api.themoviedb.org/3/discover/movie?api_key=30524f455f7dd9239270faa005d68374&language=id&with_genres=28"
          )
          .then((response) => (action.value = response.data.results))

          .catch((error) => reject(error));
      });
    };
    const onFetchAdventure = () => {
      return new Promise((resolve, reject) => {
        axios
          .get(
            "https://api.themoviedb.org/3/discover/movie?api_key=30524f455f7dd9239270faa005d68374&language=id&with_genres=12"
          )
          .then((response) => (adventure.value = response.data.results))

          .catch((error) => reject(error));
      });
    };
    const onFetchAnimation = () => {
      return new Promise((resolve, reject) => {
        axios
          .get(
            "https://api.themoviedb.org/3/discover/movie?api_key=30524f455f7dd9239270faa005d68374&language=id&with_genres=16"
          )
          .then((response) => (animation.value = response.data.results))

          .catch((error) => reject(error));
      });
    };
    const onFetchComedy = () => {
      return new Promise((resolve, reject) => {
        axios
          .get(
            "https://api.themoviedb.org/3/discover/movie?api_key=30524f455f7dd9239270faa005d68374&language=id&with_genres=35"
          )
          .then((response) => (comedy.value = response.data.results))

          .catch((error) => reject(error));
      });
    };
    const onFetchCrime = () => {
      return new Promise((resolve, reject) => {
        axios
          .get(
            "https://api.themoviedb.org/3/discover/movie?api_key=30524f455f7dd9239270faa005d68374&language=id&with_genres=80"
          )
          .then((response) => (crime.value = response.data.results))

          .catch((error) => reject(error));
      });
    };
    const onFetchDocumentary = () => {
      return new Promise((resolve, reject) => {
        axios
          .get(
            "https://api.themoviedb.org/3/discover/movie?api_key=30524f455f7dd9239270faa005d68374&language=id&with_genres=99"
          )
          .then((response) => (documentary.value = response.data.results))

          .catch((error) => reject(error));
      });
    };
    const onFetchDrama = () => {
      return new Promise((resolve, reject) => {
        axios
          .get(
            "https://api.themoviedb.org/3/discover/movie?api_key=30524f455f7dd9239270faa005d68374&language=id&with_genres=18"
          )
          .then((response) => (drama.value = response.data.results))

          .catch((error) => reject(error));
      });
    };
    const onFetchFamily = () => {
      return new Promise((resolve, reject) => {
        axios
          .get(
            "https://api.themoviedb.org/3/discover/movie?api_key=30524f455f7dd9239270faa005d68374&language=id&with_genres=10751"
          )
          .then((response) => (family.value = response.data.results))

          .catch((error) => reject(error));
      });
    };
    const onFetchFantasy = () => {
      return new Promise((resolve, reject) => {
        axios
          .get(
            "https://api.themoviedb.org/3/discover/movie?api_key=30524f455f7dd9239270faa005d68374&language=id&with_genres=14"
          )
          .then((response) => (fantasy.value = response.data.results))

          .catch((error) => reject(error));
      });
    };
    const onFetchHistory = () => {
      return new Promise((resolve, reject) => {
        axios
          .get(
            "https://api.themoviedb.org/3/discover/movie?api_key=30524f455f7dd9239270faa005d68374&language=id&with_genres=36"
          )
          .then((response) => (history.value = response.data.results))

          .catch((error) => reject(error));
      });
    };
    const onFetchHoror = () => {
      return new Promise((resolve, reject) => {
        axios
          .get(
            "https://api.themoviedb.org/3/discover/movie?api_key=30524f455f7dd9239270faa005d68374&language=id&with_genres=27"
          )
          .then((response) => (horor.value = response.data.results))

          .catch((error) => reject(error));
      });
    };
    return {
      //variable
      movies,
      popular,
      tranding,
      action,
      adventure,
      animation,
      comedy,
      crime,
      documentary,
      drama,
      family,
      fantasy,
      history,
      horor,
      music,
      mistery,
      romance,

      onShowDetail,
      onFetchRecords,
      onFetchTranding,
      onFetchPopular,
      onFetchAction,
      onFetchAdventure,
      onFetchAnimation,
      onFetchComedy,
      onFetchCrime,
      onFetchDocumentary,
      onFetchDrama,
      onFetchFamily,
      onFetchFantasy,
      onFetchHistory,
      onFetchHoror,
    };
  },
};
</script>
<style>
.background-image {
  background: linear-gradient(180deg, rgba(15, 22, 29, 0.29) 0%, #0f161d 100%);
}
</style>
