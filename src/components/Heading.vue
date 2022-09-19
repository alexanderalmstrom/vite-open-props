<template>
  <component :is="as" class="heading">
    <slot />
  </component>
</template>

<script setup>
const props = defineProps({
  as: {
    type: String,
    default: 'h2',
  },
})
</script>

<style>
.heading {
  color: var(--heading-color);
  font-family: var(--heading-font-family);
  font-size: var(--heading-font-size);
  font-weight: var(--heading-font-weight);
  line-height: var(--heading-line-height);
  letter-spacing: var(--heading-letter-spacing);
  text-transform: var(--heading-text-transform);
  margin-bottom: var(--heading-margin-bottom);
}
</style>
