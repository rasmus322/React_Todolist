// components
import { useState, useRef, useEffect } from 'react'
import TodoListComponent from './components/TodoList'
import TodoFormComponent from './components/TodoForm'
import TodoCategories from './components/TodoCategories'
import CustomBtnComponent from './components/CustomBtnComponent'
//styles
import './main.css'

function App() {
  const [showForm, setShowForm] = useState(false)

  const toggleForm = () => {
    setShowForm(prev => !prev)
  }
  
  const closeForm = () => {
    setShowForm(false)
  }

  return (
    <div className='container'>
      <h1 className="title"> Список задач </h1>
      <TodoCategories />
      {showForm && <TodoFormComponent onSuccess={closeForm} />}
      <TodoListComponent />
      <CustomBtnComponent state={showForm} onClick={toggleForm} className='create-btn' />
    </div>
  )
}

export default App