<template>
  <SvgIcon class="icon" />
</template>

<script setup>
import { loadSvgIcon } from '../utils'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
})

const SvgIcon = loadSvgIcon(props.name)
</script>

<style>
.icon {
  --icon-size: 1rem;
  --icon-color: currentColor;

  width: var(--icon-width, var(--icon-size));
  height: var(--icon-height, var(--icon-size));
  fill: var(--icon-color);
}
</style>
