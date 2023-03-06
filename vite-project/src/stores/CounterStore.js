import {defineStore} from "pinia";

export const useCounterStore = defineStore('counter', {
    // data
    state: () => {
        return {
            count: 0
        }
    },

    // Actions are the equivalent of methods in components
    actions: {
        increment() {
            if (this.count < 10) {
                this.count++;
            }
        }
    },

    // Getters are exactly the equivalent of computed values
    getters: {
        remaining: ({count}) => 10 - count
    }
});