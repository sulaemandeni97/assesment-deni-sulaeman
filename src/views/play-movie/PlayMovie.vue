<template>
  <div class="min-h-screen w-full bg-[#0f161d]">
    <div class="h-[195px] md:h-[717px] w-full relative svelte-1nw785w">
      <div class="h-[195px] md:h-[717px] w-full absolute top-0 z-50">
        <div class="aspect-w-14 aspect-h-7">
          <iframe
            src="https://www.youtube.com/embed/JfVOs4VSpmA?autoplay=1&rel=0"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
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
        <h1 class="text-[32px] md:text-[42px] font-bold text-left mb-2">
          {{ detail.original_title }}
        </h1>
        <div class="flex flex-col text-left">
          <p class="max-w-[522px] mb-4 mt-4 md:mt-0 order-last md:order-first">
            {{ detail.overview }}
          </p>
          <p class="text-white/70 mb-4 leading-none hidden md:block">
            <span v-for="genre in detail.genres" :key="genre.id">
              {{ genre.name }},
            </span>
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
      </div>

      <div>
        <h1 class="text-[32px] md:text-[42px] font-bold text-left"></h1>
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
          {{ showMore == true ? "See Less" : "See More" }}
        </button>
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
  setup() {
    const detail = ref([]);
    const credits = ref([]);
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
