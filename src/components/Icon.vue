<template>
  <SvgIcon />
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
