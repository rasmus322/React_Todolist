// components
import TodoListComponent from './components/TodoList'
import TodoFormComponent from './components/TodoForm'
import type { TodoItem } from './types'
import TodoCategories from './components/TodoCategories'
//images
import healthIcon from "./assets/images/categories-icon-health.svg"
import workIcon from "./assets/images/categories-icon-work.svg"
import mentalHealthIcon from "./assets/images/categories-icon-mentalHealth.svg"
import othersIcon from "./assets/images/categories-icon-others.svg"
//styles
import './main.css'

function App() {
  const categories = {
    'health': { text: 'Здоровье', icon: healthIcon },
    'work': { text: 'Работа', icon: workIcon },
    'mentalHealth': { text: 'Ментальное здоровье', icon: mentalHealthIcon },
    'others': { text: 'Другое', icon: othersIcon }
  }

  return (
    <>
      <h1 className="title"> Список задач </h1>
      <TodoCategories categories={categories}/>
      <TodoFormComponent />
      <TodoListComponent />
    </>
  )
}

export default App