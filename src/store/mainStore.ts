import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoItem, TodoCategories as TodoCategoriesType } from '../types';

import healthIcon from "../assets/images/categories-icon-health.svg";
import workIcon from "../assets/images/categories-icon-work.svg";
import mentalHealthIcon from "../assets/images/categories-icon-mentalHealth.svg";
import othersIcon from "../assets/images/categories-icon-others.svg";

export const categories = {
  'health': { text: 'Здоровье', icon: healthIcon },
  'work': { text: 'Работа', icon: workIcon },
  'mentalHealth': { text: 'Ментальное здоровье', icon: mentalHealthIcon },
  'others': { text: 'Другое', icon: othersIcon }
};

interface TodoState {
  todos: TodoItem[];
  categories: {
    [key: string]: {
      icon: string;
      text: string;
    }
  };
}

const initialState: TodoState = {
  todos: [
    {
      id: '1',
      name: 'test task',
      completed: false,
      category: 'others',
      hasSubCategories: false
    }
  ],
  categories: categories
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoItem>) => {
      state.todos.push(action.payload);
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    updateTodo: (state, action: PayloadAction<TodoItem>) => {
      const index = state.todos.findIndex(todo => todo.id === action.payload.id);
      if (index !== -1) {
        state.todos[index] = action.payload;
      }
    }
  }
});

export const { addTodo, toggleTodo, deleteTodo, updateTodo } = todoSlice.actions;

export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;