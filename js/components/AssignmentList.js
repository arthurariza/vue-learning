import AssignmentListItem from "./AssignmentListItem.js";

export default {
    template: `
        <section v-show="assignments.length">
            <h2 class="font-bold my-4 text-xl">{{ title }}</h2>
    
            <ul>
                <AssignmentListItem :assignment="assignment" :key="assignment.id" v-for="assignment in assignments" />
            </ul>
        </section>
    `,
    props: {
        assignments: Array,
        title: String
    },
    components: {
        AssignmentListItem
    }
}