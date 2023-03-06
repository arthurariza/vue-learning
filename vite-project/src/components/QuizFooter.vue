<template>
  <p>Player Name: {{ playerName }}</p>
</template>

<script setup>
import {inject} from "vue";

let playerName = inject('playerName');
</script>

<style scoped>

</style>