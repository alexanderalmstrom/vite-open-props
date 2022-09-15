<script setup>
import DogrevolutionLayout from './layouts/dogrevolution.vue';
import PartyninjaLayout from './layouts/partyninja.vue';

const brand = import.meta.env.VITE_BRAND;
</script>

<template>
  <div :brand="brand">
    <DogrevolutionLayout v-if="brand === 'dogrevolution'" />
    <PartyninjaLayout v-if="brand === 'partyninja'" />
  </div>
</template>