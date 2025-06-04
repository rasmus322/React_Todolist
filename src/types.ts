export interface TodoItem {
    id: number;
    name: string;
    category: TodoCategories;
    completed: boolean;
    hasSubCategories: boolean;
}

export type TodoCategories = 'health' | 'work' | 'mentalHealth' | 'others'