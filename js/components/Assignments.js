import AssignmentList from "./AssignmentList.js";

export default {
    template: `
        <h1 class="font-bold text-2xl mb-4">Assignments</h1>
        
        <AssignmentList :assignments="filters.inProgress" title="In Progress" />
        
        <AssignmentList :assignments="filters.completed" title="Completed" />
        
        <form @submit.prevent="add" class="my-4 text-black border border-gray-600">
            <input type="text" name="newAssignment" v-model="newAssignment" class="p-2"/>
            <button type="submit" class="bg-white border-l p-2 hover:bg-slate-100">Add</button>
        </form>
    `,
    data() {
        return {
            assignments: [
                {name: 'Finish project', completed: false, id: 1},
                {name: 'Read chapter 4', completed: false, id: 2},
                {name: 'Turn in homework', completed: false, id: 3},
            ],
            newAssignment: ''
        }
    },
    computed: {
        filters() {
            return {
                'inProgress': this.assignments.filter(a => !a.completed),
                'completed': this.assignments.filter(a => a.completed),
            }
        }
    },
    components: {
        AssignmentList
    },
    methods: {
        add() {
            this.assignments.push({
                name: this.newAssignment,
                completed: false,
                id: this.assignments.length + 1
            });

            this.newAssignment = ''
        }
    }
}