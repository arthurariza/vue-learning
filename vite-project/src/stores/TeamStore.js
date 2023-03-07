import { defineStore } from "pinia";

export const useTeamStore = defineStore("team", {
  state: () => ({
    name: "",
    spots: 0,
    members: []
  }),
  actions: {
    async fill() {
      let res = await import("@/team.json");

      this.$state = res.default;
    }
  },
  getters: {
    spotsRemaining: ({ spots, members }) => spots - members.length
  }
});