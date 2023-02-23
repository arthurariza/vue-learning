export default {
    template: `
        <li>
            <label class="flex items-center justify-between">
                {{ assignment.name }} <input type="checkbox" v-model="assignment.completed" class="ml-3"/>
            </label>
        </li>
    `,
    props: {
        assignment: Object
    }
}