<script setup lang="ts">
import TodoInput from "./components/TodoInput.vue"
import TodoList from "./components/TodoList.vue"
import { ref, watch } from 'vue'
import type { TodosList } from "./types"

const todos = ref<TodosList>(JSON.parse(localStorage.getItem('todos') || '[]'))

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

function toggleTodo(id: number) {
  const todo = todos.value.find(todo => todo.id === id)
  if (todo) {
    todo.completed = !todo.completed
  }
}

function editTodo(payload: { id: number; text: string }) {
  const todo = todos.value.find(t => t.id === payload.id)
  if (todo) {
    todo.text = payload.text
    todo.isEditing = false
  }
}

watch(todos, (newTodos) => {
  localStorage.setItem('todos', JSON.stringify(newTodos))
}, { deep: true })
</script>

<template>
  <div class="max-w-md mx-auto p-4">
    <h1 class="text-2xl font-bold text-center mb-4">待办事项</h1>
    <TodoInput @add-todo="addTodo" />
    <TodoList 
      :todos="todos" 
      @delete-todo="deleteTodo" 
      @toggle-todo="toggleTodo"
      @edit-todo="editTodo"
    />
  </div>

</template>
