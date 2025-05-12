<script setup lang="ts">
import { ref, watch } from 'vue';
import { useTodoStore } from '../composables/useTodoStore'
import type { Todo } from '../core/types'

const props = defineProps<{
  todo: Todo
}>()

const { deleteTodo, toggleTodo, editTodo } = useTodoStore()

const editText = ref(props.todo.text)
const isEditing = ref(props.todo.isEditing || false)

function handleDelete() {
  deleteTodo(props.todo.id)
}

function handleToggle() {
  toggleTodo(props.todo.id)
}

function handleEdit() {
  isEditing.value = true
}

function handleSave() {
  if (editText.value.trim()) {
    editTodo({ 
      id: props.todo.id, 
      text: editText.value 
    })
    isEditing.value = false
  }
}

function handleCancel() {
  editText.value = props.todo.text
  isEditing.value = false
}

watch(() => props.todo.isEditing, (newVal) => {
  isEditing.value = newVal || false
})
</script>

<template>
  <li class="p-3 bg-gray-100 rounded-lg" :class="{ 'bg-gray-200': todo.completed }">
    <div v-if="!isEditing" class="flex justify-between items-center">
      <div class="flex items-center gap-2 flex-1">
        <input 
          type="checkbox"
          :checked="todo.completed"
          @change="handleToggle"
          class="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
        <span 
          @dblclick="handleEdit"
          class="flex-1"
          :class="{ 'line-through': todo.completed }" 
        >
          {{ todo.text }}
        </span>
        <div class="flex gap-2">
          <button @click="handleEdit" class="btn bg-yellow-500 hover:bg-yellow-600 text-white">编辑</button>
          <button @click="handleDelete" class="btn-danger">删除</button>
        </div>
      </div>
      
    </div>
    <div v-else class="flex gap-2">
      <input 
        type="text"
        v-model="editText"
        @keyup.enter="handleSave"
        @keyup.esc="handleCancel"
        class="input-text flex-1"
        v-focus
      />
      <div class="flex gap-1">
        <button @click="handleSave" class="btn-success">保存</button>
        <button @click="handleCancel" class="btn-danger">取消</button>
      </div>
    </div>
    
  </li>

</template>
