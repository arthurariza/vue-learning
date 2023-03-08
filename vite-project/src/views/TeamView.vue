<script setup>
import TeamHeader from "@/components/TeamHeader.vue";
import TeamMembers from "@/components/TeamMembers.vue";
import TeamFooter from "@/components/TeamFooter.vue";
import { useTeamStore } from "@/stores/TeamStore";
import TeamModalAddMember from "@/components/TeamModalAddMember.vue";
import { ref } from "vue";

const teamStore = useTeamStore();
teamStore.fill();

let showModal = ref(false);
</script>

<template>
  <TeamHeader @showModal="showModal = true" />

  <div class="place-self-center flex flex-col gap-y-3" style="width: 725px">
    <TeamMembers />
  </div>

  <TeamFooter />

  <Teleport to="body">
    <TeamModalAddMember v-if="showModal" @closeModal="showModal = false" />
  </Teleport>
</template>