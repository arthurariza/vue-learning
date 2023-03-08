<template>
  <Transition
    enter-active-class="transition duration-300"
    enter-from-class="opacity-0 scale-125"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="transition duration-300"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-125"
  >
    <div v-if="showModal" class="modal">
      <div class="modal__container">
        <h1 class="modal__title">Add Member</h1>

        <form class="modal__form" @submit.prevent>
          <input id="name" class="modal__form-input" name="name" type="text">
          <button class="modal__form-button">Add</button>
        </form>

        <footer class="modal__footer">
          <button @click="emit('closeModal')">Close</button>
        </footer>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { Transition } from "vue";

defineProps({
  showModal: Boolean
});
const emit = defineEmits(["closeModal"]);

</script>

<style scoped>
.modal {
  position: fixed;
  inset: 0;

  height: 100vh;
  display: grid;
  place-items: center;
  background: rgba(0, 0, 0, 0.3);
}

.modal__container {
  background: #fff;
  border-radius: 6px;

  padding: 2rem;
  width: 75%;
  max-width: 500px;
}

.modal__title {
  font-size: 2rem;
  margin-bottom: .75rem;
}

.modal__form {
  display: flex;
  justify-content: space-around;
}

.modal__form-input {
  flex: 1;
  border: #22c55e 1px solid;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  padding: .25rem;
  outline: none;
  font-weight: bold;
}

.modal__form-button {
  color: #fff;
  background: #22c55e;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  padding: .5rem;
}

.modal__form-button:hover {
  background: #16a34a;
}

.modal__footer {
  border-top: #ddd solid 1px;
  margin-top: 1rem;
  padding-top: 1rem;
  text-align: right;

  color: #22c55e;
}
</style>