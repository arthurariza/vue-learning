<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import {useFlash} from '@/composables/useFlash.js'

let {flash} = useFlash();
</script>

<template>
  <main>
    <TheWelcome/>
    <p>
      <button @click="flash('Title', 'Test Message')">
        Click Me!
      </button>
    </p>
  </main>
</template>
