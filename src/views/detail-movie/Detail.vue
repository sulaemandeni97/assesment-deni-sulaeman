<template>
  <div class="min-h-screen w-full bg-[#0f161d]">
    <div class="relative top-0 left-0 h-full w-screen">
      <div
        class="
          background-image
          absolute
          top-0
          left-0
          bottom-0
          h-full
          w-full
          rounded-[20px]
        "
      ></div>

      <img
        src="https://image.tmdb.org/t/p/original//1Rr5SrvHxMXHu5RjKpaMba8VTzi.jpg"
        class="bg-black rounded w-full"
        style="max-height: 717px"
        alt="..."
      />
      <div
        class="
          absolute
          bottom-[54px]
          md:bottom-[140px] md:left-[108px]
          px-3
          z-50
        "
      >
        <div
          class="
            text-white text-[32px]
            leading-[37.5px]
            md:text-[42px] md:leading-[49px] md:flex
            mb-[22px]
            font-black
          "
        >
          {{ detail.original_title }}
        </div>
        <div class="flex flex-col">
          <div
            class="
              mb-4
              max-w-[522px]
              overflow-hidden
              leading-[18.75px]
              order-last
              md:order-none
              text-left
            "
          >
            <p class="text-white">
              {{ detail.overview }}
            </p>
          </div>
          <div class="mb-5 opacity-70 text-white text-left">
            Actions, Science Fiction
          </div>

          <div class="flex items-center mb-4">
            <span class="mr-6">
              <img
                src="../../assets/icons/dolbi-atmos.svg"
                alt="..."
                style="height: 19px; viewbox: 0 0 72 19; fill: white"
                class="text-white"
              />
            </span>
            <img
              src="../../assets/icons/dolby-atmos-rectangle.svg"
              alt="..."
              style="width: 22px; height: 29px; viewbox: 0 0 22 29; fill: white"
              class="text-white"
            />
          </div>
          <div class="flex align-center text-white/70">
            <img
              src="../../assets/icons/star-icon.svg"
              alt="..."
              style="height: 19px; viewbox: 0 0 72 19; fill: white"
              class="text-white"
            />

            <span class="ml-2"> {{ detail.vote_average }} </span>
          </div>
        </div>
        <div class="flex justify-start mt-5">
          <router-link to="/play-movie">
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
              Play Now
              <span class="ml-4">
                <img src="../../assets/icons/carbon_play-outline.svg" alt="" />
              </span>
            </button>
          </router-link>
        </div>
      </div>
    </div>

    <div
      class="
        mx-4
        md:mx-24
        text-white
        mt-10
        md:mt-15
        pb-28
        grid grid-cols-1
        md:grid-cols-2
      "
    >
      <div>
        <h2 class="text-[32px] md:text-[42px] font-bold text-left">Credits</h2>
        <ul>
          <li
            class="flex items-center mt-4"
            v-for="credit in showMore == [false] || showMore == false
              ? credits
              : credits.splice(0, 5)"
            :key="credit.id"
          >
            <div
              class="
                w-16
                h-16
                rounded-full
                overflow-hidden
                flex
                items-center
                justify-center
                mr-3
                md:mr-5
              "
            >
              <img
                :src="
                  'https://image.tmdb.org/t/p/original/' + credit.profile_path
                "
                alt="..."
                class="
                  shadow
                  rounded-full
                  max-w-full
                  h-auto
                  align-middle
                  border-none
                  ml-5
                  mr-5
                "
                style="border-radius: 50px"
              />
            </div>
            <div>
              <p class="text-white text[20px] md:text-[24px] font-bold">
                {{ credit.original_name }}
              </p>
              <p class="text-white/70 md:text[20px]">
                As {{ credit.character }}
              </p>
            </div>
          </li>
        </ul>
        <button class="text-white/70 text-[20px] mt-8" @click="onShowMore">
          {{ showMore == true ? "See More" : "See Less" }}
        </button>
      </div>

      <div>
        <h2 class="text-[32px] md:text-[42px] font-bold text-left">
          Productions Companies
        </h2>
        <ul>
          <li
            class="flex items-center mt-4"
            v-for="product in detail.production_companies"
            :key="product.id"
          >
            <div>
              <p class="text-white text[20px] md:text-[24px] font-bold">
                {{ product.name }}
              </p>
              <p class="text-white/70 md:text[20px]">
                {{ product.origin_country }}
              </p>
            </div>
          </li>
        </ul>
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
    const detail = ref([]);
    const credits = ref([]);
    const limitCredits = ref([]);
    const showMore = ref([false]);

    onMounted(() => {
      onShowDetail();
      onFetchCredits();
    });

    const onShowMore = () => {
      showMore.value = !showMore.value;
    };

    const onShowDetail = () => {
      return new Promise((resolve, reject) => {
        axios
          .get(
            "https://api.themoviedb.org/3/movie/634649?api_key=30524f455f7dd9239270faa005d68374"
          )
          .then((response) => (detail.value = response.data))

          .catch((error) => reject(error));
      });
    };

    const onFetchCredits = () => {
      return new Promise((resolve, reject) => {
        axios
          .get(
            "https://api.themoviedb.org/3/movie/634649/credits?api_key=30524f455f7dd9239270faa005d68374"
          )
          .then((response) => (credits.value = response.data.cast))

          .catch((error) => reject(error));
      });
    };

    return {
      detail,
      credits,
      showMore,
      limitCredits,

      onShowDetail,
      onShowMore,
      onFetchCredits,
    };
  },
};
</script>

<style>
.background-image {
  /* background: linear-gradient(180deg, rgba(15, 22, 29, 0.29) 0%, #0f161d 100%); */
  background: linear-gradient(180deg, rgba(15, 22, 29, 0.29) 0%, #0f161d 100%);
}
</style>
