<script setup>
import LogoVue from "./icons/Logos.vue";
import { useDataStore } from "../stores/DataStore.js";
import { ref } from "@vue/reactivity";

const data = useDataStore();
const color = ref(data.outerBackgroundColor)

</script>

<template>
  <div class="flex flex-col items-center justify-center h-full">
    <section id="outter" class="w-9/12" :style="{background:data.outerBackgroundColor}">
      <div class="mx-20 my-10 rounded-xl" :style="{background: data.innerBackgroundColor}">
        <div class="p-4 px-6">
          <!-- Post Header -->
          <div class="flex">
            <div id="dp">
              <img
                class="rounded-full bg-gray-400"
                :src="data.getImageSource"
                width="60"
                alt=""
              />
            </div>
            <span class="ml-2">
              <h1 class="text-xl font-bold" :style="{color: data.nameColor}">{{ data.name }}</h1>
              <h2 class="text-gray-600" :style="{color: data.usernameColor}">{{ data.getUserName }}</h2>
            </span>
            <div class="ml-auto"><LogoVue /></div>
          </div>

          <!-- Post Content -->
          <div id="description" class="mt-4 mb-2">
            <p class="text-lg font-medium" :style="{color:data.contentColor}">"{{ data.description }}"</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Download Button -->
    <div>
      <button
        type="button"
        class="
          bg-blue-500
          text-white
          py-2
          px-4
          font-semibold
          text-lg
          rounded-md
          mt-10
          shadow-xl
          hover:bg-blue-600
        "
      >
        Download
      </button>
    </div>
  </div>
</template>
