import { useSelector } from 'react-redux';
import { RootState } from '../../store/mainStore';
import './style.css';

const TodoCategories = () => {
    const todos = useSelector((state: RootState) => state.todos.todos);
    const categories = useSelector((state: RootState) => state.todos.categories);
    
    const categoryCounts: Record<string, number> = {};
    todos.forEach(todo => {
        categoryCounts[todo.category] = (categoryCounts[todo.category] || 0) + 1;
    });
    
    return (
        <div className='category-container'>
            {Object.entries(categories).map(([key, value]) => (
                <div key={key} className="category-item" style={{ backgroundColor: `var(--todoItem-category-bg-${key})` }}>
                    <img className='category-img' src={value.icon} alt={value.text} />
                    <div className='category-text'>
                        <b>{categoryCounts[key] || 0}</b>
                        <p>{value.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TodoCategories;