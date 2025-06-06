import { useState } from "react";
import { useDispatch } from "react-redux";
import TodoFormInput from "../TodoFormInput";
import { addTodo } from "../../store/mainStore";
import { TodoCategories } from "../../types";
import { v4 as uuidv4 } from "uuid";

import './style.css'

interface TodoFormProps {
  onSuccess?: () => void;
}

const TodoForm = ({ onSuccess }: TodoFormProps) => {
    const dispatch = useDispatch()
    const [todoName, setTodoName] = useState("")
    const [category, setCategory] = useState<TodoCategories>("work")
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!todoName.trim()) return
        
        dispatch(addTodo({
            id: uuidv4(),
            name: todoName,
            category: category,
            completed: false,
            hasSubCategories: false
        }))
        
        setTodoName("")
        
        onSuccess && onSuccess()
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h1 className="form-title"> Создайте задачу </h1>
            <div className="form-input-container">
                <TodoFormInput 
                    type="text" 
                    value={todoName} 
                    onChange={(value) => setTodoName(value)}
                    className="form-input-text"
                />
                <TodoFormInput 
                    type="select" 
                    value={category}
                    onChange={(value) => setCategory(value as TodoCategories)}
                    className="form-input-select"
                />
            </div>
            <button className="form-btn" disabled={todoName.length > 0 ? false : true} type="submit">Добавить</button>
        </form>
    )
}

export default TodoForm;