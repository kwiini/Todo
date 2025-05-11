<script setup lang="ts">
import type { TodosList } from '../types';
import TodoItem from './TodoItem.vue';

defineProps<{
  todos: TodosList
}>()

const emit = defineEmits<{
  (e: 'delete-todo', id: number): void
}>()

function handleDelete(id: number) {
  emit('delete-todo', id)
}

</script>

<template>
  <ul class="todo-list">
    <TodoItem 
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @delete="handleDelete(todo.id)"
    />
  </ul>

</template>
