import type { TodoItem } from "../../types";

interface TodoItemProps {
    todoItem: TodoItem;
}

const TodoItem = (props: TodoItemProps) => {
    return (
        <li className="todoItem-item">
            <input type="checkbox" checked={props.todoItem.completed} />
            { props.todoItem.name }
            <span> { props.todoItem.category } </span>
        </li>
    )
}

export default TodoItem;