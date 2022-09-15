<template>
  <button class="button" :class="[variant]" type="button">
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  variant: String
})
</script>

<style>
.button {
  padding: var(--button-padding, 0.75em 1em);
  background-color: var(--button-background-color);
  color: var(--button-color);
  font-size: var(--button-font-size, 1rem);
  font-weight: var(--button-font-weight);
  line-height: var(--button-line-height, 1);
  letter-spacing: var(--button-letter-spacing);
  text-transform: var(--button-text-transform);
  border-width: var(--button-border-width, 1px);
  border-style: var(--button-border-style, solid);
  border-color: var(--button-border-color, transparent);
  border-radius: var(--button-border-radius);
}
</style>