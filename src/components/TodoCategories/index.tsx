import { useSelector } from 'react-redux';
import { RootState } from '../../store/mainStore';
import './styles.css';

interface TodoCategoriesProps {
    categories: {
        [key: string]: {
            icon: string;
            text: string;
        }
    }
}

const TodoCategories = ({ categories }: TodoCategoriesProps) => {
    const todos = useSelector((state: RootState) => state.todos.todos)
    
    const categoryCounts: Record<string, number> = {}
    todos.forEach(todo => {
        categoryCounts[todo.category] = (categoryCounts[todo.category] || 0) + 1
    })
    
    return (
        <div>
            {Object.entries(categories).map(([key, value]) => (
                <div key={key} className="category-item">
                    <img src={value.icon} width="50px" height="50px" alt={value.text} />
                    <div>
                        <div>{ value.text }</div>
                        <div>{ categoryCounts[key] || 0 }</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TodoCategories;