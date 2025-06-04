import type { TodoCategories, TodoFormInputType } from "../../types";

interface TodoFormInputProps {
    type: TodoFormInputType;
    value?: string;
    onChange?: (value: string) => void;
}

const TodoFormInput = ({ type, value, onChange }: TodoFormInputProps) => {
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
                />
            );
        case 'select':
            return (
                <select 
                    value={value}
                    onChange={handleChange}
                >
                    <option value="health"> Здоровье </option>
                    <option value="work"> Работа </option>
                    <option value="mentalHealth"> Ментальное здоровье </option>
                    <option value="others"> Другое </option>
                </select>
            );
        default:
            return null;
    }
};

export default TodoFormInput;