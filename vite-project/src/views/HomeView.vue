<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import {useFlash} from '@/composables/useFlash.js'
import {useStorage} from "@/composables/useStorage";

let {flash} = useFlash();
let food = useStorage('food');
</script>

<template>
  <main>
    <TheWelcome/>
    <p>
      <button @click="flash('Title', 'Test Message')">
        Click Me!
      </button>
    </p>
    <p>
      What is your favorite food? <input v-model="food" type="text">
    </p>
  </main>
</template>
