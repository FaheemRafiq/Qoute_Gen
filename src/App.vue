<script setup>
import UserInputVue from "./components/UserInput.vue";
import PostOutputVue from "./components/postOutput.vue";
</script>

<template>
  <header>
    <h1 class="text-center text-4xl font-bold pt-3">QuoteGen</h1>
  </header>
  <main class="flex lg:justify-between sm:flex-col lg:flex-row my-12 mx-8 h-[850px]">
    <!-- ? User Input Section -->
    <section class="w-1/2">
      <UserInputVue />
    </section>

    <!-- ? Post Output Section -->
    <section class="w-1/2">
      <PostOutputVue />
    </section>
  </main>
</template>
