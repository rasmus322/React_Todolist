import TodoListComponent from './components/TodoList'
import type { TodoItem } from './types'
import './main.css'

function App() {
  const todos: TodoItem[] = [
    {
      id: 1,
      name: 'Todo 1',
      completed: false,
      category: 'work',
      hasSubCategories: false
    },
    {
      id: 2,
      name: 'Todo 2',
      completed: true,
      category: 'health',
      hasSubCategories: false
    }
  ]

  return (
    <>
      <h1 className="title">Hello world!</h1>
      <TodoListComponent todoItems={todos}/>
    </>
  )
}

export default App
