<script setup>
import team from "@/team.json";
import TeamHeader from "@/components/TeamHeader.vue";
import TeamMembers from "@/components/TeamMembers.vue";
import TeamFooter from "@/components/TeamFooter.vue";
</script>

<template>
  <TeamHeader :team="team" />

  <div class="place-self-center flex flex-col gap-y-3" style="width: 725px">
    <TeamMembers :team="team" />
  </div>

  <TeamFooter :team="team" />
</template>