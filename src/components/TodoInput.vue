<script setup lang="ts">
import { ref } from 'vue'
import { useTodoStore } from '../composables/useTodoStore'

const text = ref('')
const { addTodo } = useTodoStore()

function handleSubmit() {
  if (text.value.trim()) {
    addTodo(text.value)
    text.value = ''
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="flex gap-2 mb-4">
    <input 
      type="text" 
      class="input-text"
      placeholder="添加一个新的事项"
      v-model="text"
    />
    <button type="submit" class="btn-primary">添加待办事项</button>
  </form>

</template>
