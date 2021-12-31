<template>
  <div class="min-h-screen w-full bg-[#0f161d]">
    <div class="aspect-w-14 aspect-h-7">
      <iframe
        src="https://www.youtube.com/embed/r9jwGansp1E?autoplay=1&rel=0"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>

    <div
      class="
        mx-4
        md:mx-24
        text-white
        mt-5
        md:mt-5
        pb-28
        grid grid-cols-1
        md:grid-cols-2
      "
    >
      <div>
        <h2 class="text-[32px] md:text-[42px] font-bold text-left">
          Productions Companies
        </h2>
        <div class="flex flex-col text-left">
          <p class="max-w-[522px] mb-4 mt-4 md:mt-0 order-last md:order-first">
            Peter Parker is unmasked and no longer able to separate his normal
            life from the high-stakes of being a super-hero. When he asks for
            help from Doctor Strange the stakes become even more dangerous,
            forcing him to discover what it truly means to be Spider-Man.
          </p>
          <p class="text-white/70 mb-4 leading-none hidden md:block">
            Action, Adventure, Science Fiction
          </p>
          <div class="flex items-center mb-4">svg</div>
          <div class="flex align-center text-white/70">8.5</div>
        </div>
      </div>

      <div>
        <h2 class="text-[32px] md:text-[42px] font-bold text-left">Credits</h2>
        <ul>
          <li class="flex items-center mt-4">
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
                src="https://image.tmdb.org/t/p/original//1Rr5SrvHxMXHu5RjKpaMba8VTzi.jpg"
                alt="..."
                class="
                  shadow
                  rounded-full
                  max-w-full
                  h-auto
                  align-middle
                  border-none
                  ml-5
                "
                style="border-radius: 50px"
              />
            </div>
            <div>
              <p class="text-white text[20px] md:text-[24px] font-bold">
                Tom Holland
              </p>
              <p class="text-white/70 md:text[20px]">
                As Peter Parker / Spider-Man
              </p>
            </div>
          </li>
          <li class="flex items-center mt-4">
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
                src="../assets/avatars/avatar1.png"
                alt="..."
                class="
                  shadow
                  rounded-full
                  max-w-full
                  h-auto
                  align-middle
                  border-none
                  ml-5
                "
                style="border-radius: 50px"
              />
            </div>
            <div>
              <p class="text-white text[20px] md:text-[24px] font-bold">
                Tom Holland
              </p>
              <p class="text-white/70 md:text[20px]">
                As Peter Parker / Spider-Man
              </p>
            </div>
          </li>
          <li class="flex items-center mt-4">
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
                src="../assets/avatars/avatar1.png"
                alt="..."
                class="
                  shadow
                  rounded-full
                  max-w-full
                  h-auto
                  align-middle
                  border-none
                  ml-5
                "
                style="border-radius: 50px"
              />
            </div>
            <div>
              <p class="text-white text[20px] md:text-[24px] font-bold">
                Tom Holland
              </p>
              <p class="text-white/70 md:text[20px]">
                As Peter Parker / Spider-Man
              </p>
            </div>
          </li>
          <li class="flex items-center mt-4">
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
                src="../assets/avatars/avatar1.png"
                alt="..."
                class="
                  shadow
                  rounded-full
                  max-w-full
                  h-auto
                  align-middle
                  border-none
                  ml-5
                "
                style="border-radius: 50px"
              />
            </div>
            <div>
              <p class="text-white text[20px] md:text-[24px] font-bold">
                Tom Holland
              </p>
              <p class="text-white/70 md:text[20px]">
                As Peter Parker / Spider-Man
              </p>
            </div>
          </li>
          <li class="flex items-center mt-4">
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
                src="../assets/avatars/avatar1.png"
                alt="..."
                class="
                  shadow
                  rounded-full
                  max-w-full
                  h-auto
                  align-middle
                  border-none
                  ml-5
                "
                style="border-radius: 50px"
              />
            </div>
            <div>
              <p class="text-white text[20px] md:text-[24px] font-bold">
                Tom Holland
              </p>
              <p class="text-white/70 md:text[20px]">
                As Peter Parker / Spider-Man
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
  setup() {
    const detail = ref(null);
    onMounted(() => {
      onShowDetail();
    });

    const onShowDetail = () => {
      return new Promise((resolve, reject) => {
        axios
          .get(
            "https://api.themoviedb.org/3/movie/634649?api_key=30524f455f7dd9239270faa005d68374"
          )
          .then((response) => (detail.value = response.data.results))

          .catch((error) => reject(error));
      });
    };

    return {
      detail,

      onShowDetail,
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
