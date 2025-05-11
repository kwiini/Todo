<script setup lang="ts">
import type { Todo } from '../types';

defineProps<{
  todo: Todo
}>()

const emit = defineEmits<{
  (e: 'delete'): void
}>()

function handleDelete() {
  emit('delete')
}

</script>

<template>
  <li class="todo-item">
    <span>{{ todo.text }}</span>
    <button 
      class="delete-button"
      @click="handleDelete"
    >
      删除待办事项
    </button>
  </li>

</template>
