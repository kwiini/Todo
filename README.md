# Todo List App - Vue 3 实现

![Vue](https://img.shields.io/badge/Vue-3.x-brightgreen)
![TypeScript](https://img.shields.io/badge/TypeScript-4.x-blue)
![UnoCSS](https://img.shields.io/badge/UnoCSS-0.50+-green)
![Vite](https://img.shields.io/badge/Vite-4.x-yellow)

一个基于 Vue 3 组合式 API 和 TypeScript 的待办事项应用，使用 UnoCSS 进行样式管理。

## 功能特性

- ✅ 添加新待办事项
- ✅ 标记任务完成状态
- ✅ 删除待办事项
- ✅ 编辑已有待办项
- ✅ 本地存储持久化
- ✅ 响应式设计
- ✅ 类型安全的 TypeScript 实现
- ✅ 使用 Composition API 状态管理

## 技术栈

- **Vue 3** - 前端框架
- **TypeScript** - 类型安全的 JavaScript 超集
- **UnoCSS** - 原子化 CSS 引擎
- **Vite** - 下一代前端工具链
- **Composition API** - Vue 3 的组合式 API
- **provide/inject** - 跨组件状态共享

## 项目结构

```
todo-app/
├── src/
│   ├── composables/         # 组合式函数层
│   │   └── useTodoStore.ts  # 全局状态管理
│   ├── core/
│   │   ├── types.ts         # 领域模型定义
│   │   └── directives.ts    # 自定义指令
│   ├── components/          # 组件层
│   │   ├── TodoInput.vue    # 受控输入组件
│   │   ├── TodoList.vue     # 列表容器组件
│   │   └── TodoItem.vue     # 展示组件
│   ├── App.vue              # 根组件
│   └── main.ts              # 应用入口
├── uno.config.ts            # 样式引擎配置
└── vite.config.ts           # 构建配置
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

### 生产构建

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 核心实现

### 状态管理

使用 Composition API 的 `provide/inject` 实现跨组件状态共享：

```typescript
// core/todo.ts
export function useTodoStore() {
  const todos = ref<TodoList>(/* ... */)
  
  // 操作方法...
  
  return {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
    editTodo
  }
}
```

### 组件通信

```vue
<!-- TodoInput.vue -->
<script setup>
const { addTodo } = injectTodoStore()
</script>
```

### 本地持久化

```typescript
watch(todos, (newTodos) => {
  localStorage.setItem('todos', JSON.stringify(newTodos))
}, { deep: true })
```

## 进阶特性

1. **双击编辑**：双击待办项进入编辑模式
2. **键盘快捷键**：Enter 保存，ESC 取消编辑
3. **自动聚焦**：自定义 v-focus 指令
4. **响应式设计**：适配不同屏幕尺寸

## 贡献指南

欢迎提交 Issue 或 Pull Request。对于重大变更，请先开 Issue 讨论您想做的更改。

## 许可证

MIT © kwiini