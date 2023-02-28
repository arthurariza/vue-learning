import AssignmentList from "./AssignmentList.js";
import AssignmentsCreateForm from "./AssignmentsCreateForm.js";

export default {
    template: `
        <h1 class="font-bold text-2xl mb-4">Assignments</h1>
        
        <div class="flex gap-8">
            <AssignmentList :assignments="filters.inProgress" title="In Progress">
                <AssignmentsCreateForm @add="add"/>
            </AssignmentList>
            
            <AssignmentList :assignments="filters.completed" title="Completed" can-toggle />
        </div>  
        
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