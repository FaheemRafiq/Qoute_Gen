<script setup>
import { useDataStore } from '../../stores/DataStore';

const data = useDataStore();
</script>

<template>
  <div>
    <img v-if="data.socialMedia == 'Instagram'" class=" p-1" src="../../assets/instagram.svg" width="50" alt="Instagram Logo">
    <img v-else-if="data.socialMedia == 'Linkedin'" class=" p-1" src="../../assets/linkedin.svg" width="50" alt="Linkedin Logo">
    <img v-else class=" p-1" src="../../assets/twitter.svg" width="50" alt="Twitter Logo">
  </div>
</template>
