export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  isEditing?: boolean;
}

export type TodosList = Todo[];