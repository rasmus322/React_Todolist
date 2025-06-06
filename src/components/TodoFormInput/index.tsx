import type { TodoCategories, TodoFormInputType } from "../../types";
import './style.css'
interface TodoFormInputProps {
    type: TodoFormInputType;
    value?: string;
    onChange?: (value: string) => void;
    className?: string;
}

const TodoFormInput = ({ type, value, onChange, className }: TodoFormInputProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        onChange?.(e.target.value)
    }

    switch(type) {
        case 'text':
            return (
                <input
                    type={type}
                    value={value}
                    onChange={handleChange}
                    className={className}
                    placeholder="Введите название задачи"
                />
            );
        case 'select':
            return (
                <select 
                    value={value}
                    onChange={handleChange}
                    className={className}
                >
                    <option className="form-input-select-option option-health" value="health"> Здоровье </option>
                    <option className="form-input-select-option option-work" value="work"> Работа </option>
                    <option className="form-input-select-option option-mentalHealth" value="mentalHealth"> Ментальное здоровье </option>
                    <option className="form-input-select-option option-others" value="others"> Другое </option>
                </select>
            );
        default:
            return null;
    }
};

export default TodoFormInput;