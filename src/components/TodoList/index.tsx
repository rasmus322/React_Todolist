import { useSelector } from 'react-redux';
import TodoItem from '../TodoItem';
import { RootState } from '../../store/mainStore';
import './style.css';

const TodoList = () => {
    const todos = useSelector((state: RootState) => state.todos.todos);
    const selectedCategory = useSelector((state: RootState) => state.todos.selectedCategory);

    const filteredTodos = selectedCategory 
        ? todos.filter(todo => todo.category === selectedCategory)
        : todos;

    return (
        filteredTodos.length === 0 ? (
            <p>На данный момент задач нет</p>
        ) : (
            <ul className='list'>
                {filteredTodos.map((item) => (
                    <TodoItem key={item.id} todoItem={item} />
                ))}
            </ul>
        )
    );
};

export default TodoList;