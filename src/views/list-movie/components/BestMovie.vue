<template>
  <div>
    <div class="text-white text-[24px] md:text-[42px] font-bold py-2.5 md:py-8">
      <div class="flex items-end justify-between px-7 md:px-28 mb-6">
        <h3>Best of all</h3>
        <div class="flex">
          <button disabled>
            <img src="../../../assets/icons/PrevIcon.svg" alt="" />
          </button>
          <button class="ml-1">
            <img src="../../../assets/icons/NextIcon.svg" alt="" />
          </button>
        </div>
      </div>

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
            mx-2
            md:mx-5
            min-w-fit
            first:ml-7 first:md:ml-28
            last:mr-7 last:md:mr-28
          "
          v-for="movie in populars"
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
            @click="onShowDetail(movie.id)"
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
  setup(props, { root }) {
    const populars = ref([]);

    onMounted(() => {
      onFetchPopular();
    });

    const onFetchPopular = () => {
      return new Promise((resolve, reject) => {
        axios
          .get(
            "https://api.themoviedb.org/3/movie/popular?api_key=30524f455f7dd9239270faa005d68374&language=en-US&page=1"
          )
          .then((response) => (populars.value = response.data.results))

          .catch((error) => reject(error));
      });
    };

    const onShowDetail = (id) => {
      router.push({
        name: "detail-movie",

        query: { id: id, api_key: "30524f455f7dd9239270faa005d68374" },
      });
    };

    return {
      populars,

      onFetchPopular,
      onShowDetail,
    };
  },
};
</script>
<style lang=""></style>
