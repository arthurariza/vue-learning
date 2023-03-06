<template>
  <section>
    <h1>Counter: {{ counter.count }}</h1>
    <button
        :disabled="! counter.remaining"
        @click="counter.increment"
    >Increment ({{ counter.remaining }})
    </button>
    <button @click="counter.$reset()">Reset</button>
  </section>
</template>

<script setup>
import {useCounterStore} from "@/stores/CounterStore";

const counter = useCounterStore();

</script>

<style scoped>

</style>