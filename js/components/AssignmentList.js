import AssignmentListItem from "./AssignmentListItem.js";
import AssignmentsTags from "./AssignmentsTags.js";

export default {
    template: `
        <section v-show="assignments.length" class="mb-4">
            <h2 class="font-bold my-4 text-xl">{{ title }}</h2>
            
            <AssignmentsTags :tags="tags" v-model:currentTag="currentTag" />
    
            <ul class="border border-gray-600 p-1 divide-y divide-gray-600">
                <AssignmentListItem :assignment="assignment" :key="assignment.id" v-for="assignment in filteredAssignments" />
            </ul>
        </section>
    `,
    props: {
        assignments: Array,
        title: String
    },
    components: {
        AssignmentListItem,
        AssignmentsTags
    },
    computed: {
        tags() {
            return ['all', ...new Set(this.assignments.map(a => a.tag))];
        },
        filteredAssignments() {
            if (this.currentTag === 'all') {
                return this.assignments
            }

            return this.assignments.filter(a => a.tag === this.currentTag)
        }
    },
    data() {
        return {
            currentTag: 'all'
        }
    }
}