<script setup lang="ts">
import TodoInput from "./components/TodoInput.vue"
import TodoList from "./components/TodoList.vue"
import { ref } from 'vue'
import type { TodosList } from "./types"

const todos = ref<TodosList>([])

function addTodo(text: string) {
  todos.value.push({
    id: Date.now(),
    text,
    completed: false
  })
}

function deleteTodo(id: number) {
  todos.value = todos.value.filter(todo => todo.id !== id)
}

</script>

<template>
  <div class="max-w-125 mx-auto p-5">
    <h1 class="text-center text-gray-800">待办事项</h1>
    <TodoInput @add-todo="addTodo" />
    <TodoList :todos="todos" @delete-todo="deleteTodo" />
  </div>

</template>
