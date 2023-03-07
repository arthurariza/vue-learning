<script setup>
import TeamHeader from "@/components/TeamHeader.vue";
import TeamMembers from "@/components/TeamMembers.vue";
import TeamFooter from "@/components/TeamFooter.vue";
import { useTeamStore } from "@/stores/TeamStore";

const teamStore = useTeamStore();
teamStore.fill();

</script>

<template>
  <TeamHeader />

  <div class="place-self-center flex flex-col gap-y-3" style="width: 725px">
    <TeamMembers />
  </div>

  <TeamFooter />
</template>