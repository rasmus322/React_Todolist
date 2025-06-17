import { useSelector, useDispatch } from 'react-redux';
import { RootState, setSelectedCategory } from '../../store/mainStore';
import './style.css';

const TodoCategories = () => {
    const todos = useSelector((state: RootState) => state.todos.todos);
    const categories = useSelector((state: RootState) => state.todos.categories);
    const selectedCategory = useSelector((state: RootState) => state.todos.selectedCategory);
    const dispatch = useDispatch();
    
    const categoryCounts: Record<string, number> = {};
    todos.forEach(todo => {
        categoryCounts[todo.category] = (categoryCounts[todo.category] || 0) + 1;
    });
    
    const handleCategoryClick = (category: string) => {
        if (selectedCategory === category) {
            dispatch(setSelectedCategory(null)); // Deselect if already selected
        } else {
            dispatch(setSelectedCategory(category));
        }
    };
    
    return (
        <div className='category-container'>
            {Object.entries(categories).map(([key, value]) => (
                <div 
                    key={key} 
                    className={`category-item ${selectedCategory === key ? 'selected' : ''}`}
                    style={{ backgroundColor: `var(--todoItem-category-bg-${key})` }}
                    onClick={() => handleCategoryClick(key)}
                >
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