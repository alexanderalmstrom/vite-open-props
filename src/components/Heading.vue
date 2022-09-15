<template>
  <component :is="as" class="heading" :class="[size]">
    <slot />
  </component>
</template>

<script setup>
const props = defineProps({
  as: {
    type: String,
    default: 'h2'
  },
  size: {
    type: String,
    default: undefined
  },
})
</script>