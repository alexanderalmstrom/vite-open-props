<script setup>
  import Button from '../components/Button.vue'
  import Heading from '../components/Heading.vue'
</script>

<template>
  <main>
    <Button variant="primary">Button primary</Button>
    <Button variant="secondary">Button secondary</Button>
    <Button variant="outlined">Button outlined</Button>

    <Heading as="h1" size="display-1">Display 1</Heading>
    <Heading as="h1" size="display-2">Display 2</Heading>
    <Heading as="h1" size="heading-1">Heading 1</Heading>
    <Heading as="h2" size="heading-2">Heading 2</Heading>
    <Heading as="h3" size="heading-3">Heading 3</Heading>
    <Heading as="h4" size="heading-4">Heading 4</Heading>
    <Heading as="h5" size="heading-5">Heading 5</Heading>
    <Heading as="h6" size="heading-6">Heading 6</Heading>
  </main>
</template>