import './style.css'

interface CreateBtnProps {
  state: boolean;
  onClick: () => void;
  className?: string;
}

const CustomBtnComponent = ({ state, onClick, className }: CreateBtnProps) => {
  return (
    <button className={`btn ${state ? 'active' : ''} ${className}`} onClick={onClick}>
      {
        // className?.includes('create') 
        //   ? (state ? '-' : '+')
        //   : 'X'
        state ? 'X' : '+'
      }
    </button>
  );
};

export default CustomBtnComponent;