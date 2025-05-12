<script setup lang="ts">
import type { TodosList } from '../types';
import TodoItem from './TodoItem.vue';

defineProps<{
  todos: TodosList
}>()

const emit = defineEmits<{
  (e: 'delete-todo', id: number): void
  (e: 'toggle-todo', id: number): void
  (e: 'edit-todo', payload: { id: number; text: string }): void
}>()

</script>

<template>
  <ul class="list-none p-0 mt-5">
    <TodoItem 
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @delete="emit('delete-todo', todo.id)"
      @toggle="emit('toggle-todo', todo.id)"
      @edit="(text) => emit('edit-todo', { id: todo.id, text })"
    />
  </ul>

</template>
