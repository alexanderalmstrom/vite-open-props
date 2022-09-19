<script setup>
import { currentBrand } from './utils'
import DogrevolutionLayout from './layouts/dogrevolution.vue'
import PartyninjaLayout from './layouts/partyninja.vue'
</script>

<template>
  <div :data-brand="currentBrand">
    <DogrevolutionLayout v-if="currentBrand === 'dogrevolution'" />
    <PartyninjaLayout v-if="currentBrand === 'partyninja'" />
  </div>
</template>
