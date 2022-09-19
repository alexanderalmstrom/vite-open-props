<template>
  <dialog ref="dialog">
    <slot />
  </dialog>
</template>

<script setup>
import { ref, defineExpose } from 'vue'

const dialog = ref(null)

defineExpose({
  dialog,
})
</script>

<style></style>
