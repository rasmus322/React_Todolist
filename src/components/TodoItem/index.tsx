import { useDispatch } from "react-redux";
import type { TodoItem } from "../../types";
import { toggleTodo, deleteTodo } from "../../store/mainStore";
import CustomBtnComponent from "../CustomBtnComponent";
import './style.css'

interface TodoItemProps {
    todoItem: TodoItem;
}

const TodoItem = ({ todoItem }: TodoItemProps) => {
    const dispatch = useDispatch();
    
    const handleToggle = () => {
        dispatch(toggleTodo(todoItem.id));
    };

    return (
        <li className="list-item" onClick={handleToggle}>
            <input type="checkbox" onChange={handleToggle} checked={todoItem.completed} />
            <div className="list-item-text">
                <p className={todoItem.completed ? 'done' : ''}> { todoItem.name } </p>
                <span style={{ backgroundColor: `var(--todoItem-category-bg-${todoItem.category})`, color: `var(--todoItem-category-text-color-${todoItem.category})` }}> { todoItem.category } </span>
            </div>
            { 
                todoItem.completed &&  
                <CustomBtnComponent 
                    state={todoItem.completed}
                    onClick={() => dispatch(deleteTodo(todoItem.id))}
                    className="delete-btn"
                />
            }
            
        </li>
    )
}

export default TodoItem;