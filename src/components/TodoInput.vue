<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
  (e: 'add-todo', text: string): void
}>()

const text = ref('')

function handleSubmit() {
  if (text.value.trim()) {
    emit('add-todo', text.value)
    text.value = ''
  }
}

</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input 
      type="text" 
      class="todo-input"
      placeholder="添加一个新的事项"
      v-model="text"
    />
    <button class="add-button">添加待办事项</button>
  </form>

</template>
