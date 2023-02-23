export default {
    template: `
        <div class="space-x-2 my-4">
           <button
                @click="$emit('update:currentTag', tag)"
                v-for="tag in tags" 
                class="text-sm border p-1 rounded"
                :class="{
                  'border-blue-500 text-blue-500' : tag === currentTag
                }"
            >
                {{ tag }}
            </button>
        </div>
    `,
    props: {
        tags: Array,
        currentTag: String
    },
}