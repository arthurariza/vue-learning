import AssignmentList from "./AssignmentList.js";
import AssignmentsCreateForm from "./AssignmentsCreateForm.js";

export default {
    template: `
        <h1 class="font-bold text-2xl mb-4">Assignments</h1>
        
        <AssignmentList :assignments="filters.inProgress" title="In Progress" />
        
        <AssignmentList :assignments="filters.completed" title="Completed" />
        
        <AssignmentsCreateForm @add="add"/>
    `,
    data() {
        return {
            assignments: [],
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
        AssignmentList,
        AssignmentsCreateForm
    },
    methods: {
        add(name) {
            this.assignments.push({
                name,
                completed: false,
                id: this.assignments.length + 1
            })
        }
    },
    created() {
        fetch('http://localhost:3000/assignments')
            .then(response => response.json())
            .then(data => this.assignments = data)
    }
}