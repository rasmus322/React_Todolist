import './style.css'

interface CreateBtnProps {
  state: boolean;
  onClick: () => void;
}

const CreateBtnComponent = ({ state, onClick }: CreateBtnProps) => {
  return (
    <button className={`btn ${state ? 'active' : ''}`} onClick={onClick}>
      { state ? '-' : '+' }
    </button>
  );
};

export default CreateBtnComponent;