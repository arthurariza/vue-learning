<template>
  <section>
    <input id="name" v-model="playerName" name="name" type="text">
    <h1>Quiz</h1>

    <ul>
      <li>Answer 1</li>
      <li>Answer 2</li>
      <li>Answer 3</li>
    </ul>

    <QuizFooter/>
  </section>
</template>

<script setup>
import {provide, ref} from "vue";
import QuizFooter from "@/components/QuizFooter.vue";

let playerName = ref('');

provide('playerName', playerName);
</script>

<style scoped>

</style>