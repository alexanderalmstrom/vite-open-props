<template>
  <button class="button" :class="[variant]">
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
  background-color: var(--button-background-color);
  color: var(--button-text-color);
  font-size: var(--button-font-size, 1rem);
  padding: var(--button-padding, 0.75em 1em);
  border-width: var(--button-border-width, 1px);
  border-style: var(--button-border-style, solid);
  border-color: var(--button-border-color, transparent);
}
</style>