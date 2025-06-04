import type { TodoItem } from "../../types"
import TodoItemComponent from "../TodoItem"

interface TodoListProps {
    todoItems: TodoItem[]
}

const TodoList = (props: TodoListProps) => {
    return (
        <ul>
            { props.todoItems.length > 0 
                ? props.todoItems.map((todoItem: TodoItem) => {
                    return (
                        <TodoItemComponent key={todoItem.id} todoItem={todoItem} />
                    )
                  })
                : <h2 className="title">На данный момент у вас отсутствуют задачи</h2>
            }
        </ul>
    )
}

export default TodoList