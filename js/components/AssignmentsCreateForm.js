export default {
    template: `
        <form @submit.prevent="add" class="my-4 text-black border border-gray-600">
            <input type="text" name="newAssignment" v-model="newAssignment" class="p-2"/>
            <button type="submit" class="bg-white border-l p-2 hover:bg-slate-100">Add</button>
        </form>
    `,
    data() {
        return {
            newAssignment: ''
        }
    },
    methods: {
        add() {
            this.$emit('add', this.newAssignment)

            this.newAssignment = ''
        }
    }
}