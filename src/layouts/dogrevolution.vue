<template>
  <main>
    <section>
      <Button variant="primary">Button primary</Button>
      <Button variant="secondary">Button secondary</Button>
      <Button variant="outlined">Button outlined</Button>

      <Heading as="h1" class="display-1">Display 1</Heading>
      <Heading as="h1" class="display-2">Display 2</Heading>
      <Heading as="h1" class="heading-1">Heading 1</Heading>
      <Heading as="h2" class="heading-2">Heading 2</Heading>
      <Heading as="h3" class="heading-3">Heading 3</Heading>
      <Heading as="h4" class="heading-4">Heading 4</Heading>
      <Heading as="h5" class="heading-5">Heading 5</Heading>
      <Heading as="h6" class="heading-6">Heading 6</Heading>

      <p>Lorem ipsum dolor sit amet</p>
    </section>

    <section>
      <Icon name="cross" />
    </section>

    <section>
      <Button variant="primary" @click="toggleDialog">Open dialog</Button>
      <Dialog ref="dialog">
        <Heading>Dialog title</Heading>
      </Dialog>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import Button from '../components/Button.vue'
import Heading from '../components/Heading.vue'
import Icon from '../components/Icon.vue'
import Dialog from '../components/Dialog.vue'

const dialog = ref()

function toggleDialog() {
  dialog.value.dialog.showModal()
}
</script>
