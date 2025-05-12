import { provide, inject, ref, watch, type Ref } from "vue"
import type { TodosList } from "../core/types"

const todoStoreSymbol = Symbol()

interface TodoStore {
    todos: Ref<TodosList>
    addTodo: (text: string) => void
    deleteTodo: (id: number) => void
    toggleTodo: (id: number) => void
    editTodo: (payload: { id: number; text: string }) => void
}

export function useTodoStoreProvider() {
    const todos = ref<TodosList>(JSON.parse(localStorage.getItem('todos') || '[]'))

    function addTodo(text: string) {
        todos.value.push({
            id: Date.now(),
            text,
            completed: false,
            isEditing: false,
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

    provide(todoStoreSymbol, {
        todos,
        addTodo,
        deleteTodo,
        toggleTodo,
        editTodo
    })

    return {
        todos,
        addTodo,
        deleteTodo,
        toggleTodo,
        editTodo
    }
}

export function useTodoStore(): TodoStore {
    const context = inject<TodoStore>(todoStoreSymbol)

    if (!context) {
        throw new Error('useTodoStore() is called without provider.')
    }

    return context
}
