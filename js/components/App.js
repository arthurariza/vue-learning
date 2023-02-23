import AppButton from "./AppButton.js";

export default {
    data() {
        return {
            assignments: [
                {name: 'Finish project', completed: false, id: 1},
                {name: 'Read chapter 4', completed: false, id: 2},
                {name: 'Turn in homework', completed: false, id: 3},
            ]
        }
    },
    computed: {
        inProgressAssignmets() {
            return this.assignments.filter(a => !a.completed);
        },
        completedAssignmets() {
            return this.assignments.filter(a => a.completed);
        }
    },
    components: {
        'app-button': AppButton
    }
}