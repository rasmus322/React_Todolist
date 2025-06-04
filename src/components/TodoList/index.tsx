import { useSelector } from 'react-redux';
import TodoItem from '../TodoItem';
import { RootState } from '../../store/mainStore';
import './style.css';

const TodoList = () => {
    const todoItems = useSelector((state: RootState) => state.todos.todos);

    return (
        todoItems.length === 0 ? (
            <p>На данный момент задач нет</p>
        ) : (
            <ul>
                {todoItems.map((item) => (
                    <TodoItem key={item.id} todoItem={item} />
                ))}
            </ul>
        )
    );
};

export default TodoList;