<template>
  <dialog ref="dialog">
    <button @click="close">
      <Icon name="cross" />
    </button>
    <slot />
  </dialog>
</template>

<script setup>
import { ref, defineExpose } from 'vue'
import Icon from './Icon.vue'

const dialog = ref(null)

function close() {
  dialog.value.close()
}

defineExpose({
  dialog,
})
</script>

<style></style>
