export default {
    template: `
        <form @submit.prevent="add" class="flex mt-4 text-black border border-gray-600">
            <input type="text" name="newAssignment" v-model="newAssignment" class="w-full" />
            <button type="submit" class="p-2 bg-white border-l hover:bg-slate-100">Add</button>
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