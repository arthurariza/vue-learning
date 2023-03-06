<template>
  <section>
    <h1>Counter: {{ counter.count }}</h1>
    <button @click="counter.increment()">Increment</button>
  </section>
</template>

<script setup>
import {counter} from "@/stores/counterStore";</script>

<style scoped>

</style>