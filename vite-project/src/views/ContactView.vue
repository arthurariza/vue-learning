<template>
  <div class="contact">
    <h1>This is an contact page</h1>
    <TabbableTextarea v-model="comment" style="width: 100%; height: 300px;"/>
  </div>
</template>

<script setup>
import {ref} from "vue";
import TabbableTextarea from "@/components/TabbableTextarea.vue";

let comment = ref('initial textarea value');
</script>

<style>
@media (min-width: 1024px) {
  .contact {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
