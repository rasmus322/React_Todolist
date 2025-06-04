import { useDispatch } from "react-redux";
import type { TodoItem } from "../../types";
import { toggleTodo } from "../../store/mainStore";

interface TodoItemProps {
    todoItem: TodoItem;
}

const TodoItem = ({ todoItem }: TodoItemProps) => {
    const dispatch = useDispatch();
    
    const handleToggle = () => {
        dispatch(toggleTodo(todoItem.id));
    };

    return (
        <li className="todoItem-item">
            <input type="checkbox" onChange={handleToggle} checked={todoItem.completed} />
            { todoItem.name }
            <span> { todoItem.category } </span>
        </li>
    )
}

export default TodoItem;