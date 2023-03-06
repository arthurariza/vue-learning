<template>
  <section>
    <h1>{{ quizState.name }}</h1>
    <input id="name" v-model="playerName" name="name" type="text">

    <QuizQuestions/>

    <QuizFooter/>
  </section>
</template>

<script setup>
import {provide, ref} from "vue";
import QuizFooter from "@/components/QuizFooter.vue";
import {quizState} from "@/stores/quizStore";
import QuizQuestions from "@/components/QuizQuestions.vue";

let playerName = ref('Player Name');

provide('playerName', playerName);
</script>

<style scoped>

</style>