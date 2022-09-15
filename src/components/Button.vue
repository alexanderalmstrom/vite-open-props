<template>
  <button class="button" :class="[variant]">
    Button
  </button>
</template>

<script setup>
const props = defineProps({
  variant: String
})
</script>