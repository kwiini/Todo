<script setup lang="ts">
import TodoInput from "./components/TodoInput.vue"
import TodoList from "./components/TodoList.vue"
import { useTodoStoreProvider } from "./composables/useTodoStore"

const { todos } = useTodoStoreProvider()
</script>

<template>
  <div class="max-w-md mx-auto p-4">
    <h1 class="text-2xl font-bold text-center mb-4">待办事项</h1>
    <TodoInput/>
    <TodoList :todos="todos" />
  </div>

</template>
