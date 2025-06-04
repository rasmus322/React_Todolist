 import { useState } from "react";
import { useDispatch } from "react-redux";
import TodoFormInput from "../TodoFormInput";
import { addTodo } from "../../store/mainStore";
import { TodoCategories } from "../../types";
import { v4 as uuidv4 } from "uuid";

const TodoForm = () => {
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
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1 className="title"> Создайте задачу </h1>
            <TodoFormInput 
                type="text" 
                value={todoName} 
                onChange={(value) => setTodoName(value)}
            />
            <TodoFormInput 
                type="select" 
                value={category}
                onChange={(value) => setCategory(value as TodoCategories)}
            />
            <button type="submit">Добавить</button>
        </form>
    )
}

export default TodoForm;