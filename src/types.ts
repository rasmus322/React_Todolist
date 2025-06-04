export interface TodoItem {
    id: string;
    name: string;
    category: TodoCategories;
    completed: boolean;
    hasSubCategories: boolean;
}

export type TodoCategories = 'health' | 'work' | 'mentalHealth' | 'others'

export type TodoFormInputType = 'text' | 'select'