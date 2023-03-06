<template>
  <div v-for="question in quizState.questions">
    <p>{{ question.question }}</p>

    <ul>
      <li v-for="answer in question.answers" :class="{'correct' : answer.correct}"> {{ answer.title }}</li>
    </ul>
  </div>
</template>

<script setup>
import {quizState} from "@/stores/quizStore";</script>

<style scoped>
.correct {
  color: greenyellow;
  font-weight: bold;
}
</style>