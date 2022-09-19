<template>
<IconComponent />
</template>

<script setup>
import { loadIcon } from '../utils';

const props = defineProps({
  name: {
    type: String,
    required: true
  }
});

const IconComponent = loadIcon(props.name);
</script>