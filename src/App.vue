<script setup>
import Button from './components/Button.vue'

const brand = import.meta.env.VITE_BRAND;
</script>

<template>
  <main :brand="brand">
    <Button variant="primary" />
    <Button variant="secondary" />
    <Button variant="outlined" />
  </main>
</template>

<style scoped>

</style>
