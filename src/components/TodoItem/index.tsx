import type { TodoItem } from "../../types";

interface TodoItemProps {
    todoItem: TodoItem;
}

const TodoItem = ({ todoItem }: TodoItemProps) => {
    return (
        <li className="todoItem-item">
            <input type="checkbox" checked={todoItem.completed} />
            { todoItem.name }
            <span> { todoItem.category } </span>
        </li>
    )
}

export default TodoItem;