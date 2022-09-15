<template>
  <button class="button" :class="[variant]">
    Button
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    variant: {
      type: String,
      default: undefined
    }
  }
}  
</script>

<style scoped>

</style>
