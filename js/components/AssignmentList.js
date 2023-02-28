import AssignmentListItem from "./AssignmentListItem.js";
import AssignmentsTags from "./AssignmentsTags.js";

export default {
    template: `
        <section v-show="show && assignments.length" class="mb-4 w-60">
            <div class="flex item-start justify-between">
                <h2 class="font-bold my-4 text-xl">{{ title }} (<span>{{filteredAssignments.length}}</span>)</h2>
            
                <button v-show="canToggle" @click="show = false">&times;</button>
            </div>
            
            <AssignmentsTags :tags="tags" v-model:currentTag="currentTag" />
    
            <ul class="border border-gray-600 p-1 divide-y divide-gray-600">
                <AssignmentListItem :assignment="assignment" :key="assignment.id" v-for="assignment in filteredAssignments" />
            </ul>
            <slot />
        </section>
        
    `,
    props: {
        assignments: Array,
        title: String,
        canToggle: {
            type: Boolean,
            default: false
        }
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
            currentTag: 'all',
            show: true
        }
    }
}