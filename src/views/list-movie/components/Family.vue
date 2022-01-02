<template>
  <div>
    <div class="text-white text-[24px] md:text-[42px] font-bold py-2.5 md:py-8">
      <div class="flex items-end justify-between px-7 md:px-28 mb-6">
        <h3>Family</h3>
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
          v-for="family in families"
          :key="family.id"
        >
          <img
            class="
              w-[126px]
              h-[189px]
              md:w-[269px] md:h-[403px]
              rounded-xl
              md:rounded-[40px]
            "
            :src="'https://image.tmdb.org/t/p/original/' + family.poster_path"
            @click="onShowDetail(family.id)"
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
    const families = ref([]);

    onMounted(() => {
      onFetchFamily();
    });

    const onFetchFamily = () => {
      return new Promise((resolve, reject) => {
        axios
          .get(
            "https://api.themoviedb.org/3/discover/movie?api_key=30524f455f7dd9239270faa005d68374&language=id&with_genres=10751"
          )
          .then((response) => (families.value = response.data.results))

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
      families,

      onFetchFamily,
      onShowDetail,
    };
  },
};
</script>
<style lang=""></style>
