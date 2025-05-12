<script setup lang="ts">
import TodoItem from './TodoItem.vue'
import type { TodosList } from '../core/types'

defineProps<{
  todos: TodosList
}>()
</script>


<template>
  <ul class="list-none p-0 mt-5">
    <TodoItem 
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
    />
  </ul>

</template>
