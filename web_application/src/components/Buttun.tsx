interface Props {
  children: string;
  showAlert: () => void;
}

const Buttun = ({ children, showAlert }: Props) => {
  return (
    <div>
      <button
        onClick={showAlert}
        type="button"
        className="btn btn-outline-dark"
      >
        {children}
      </button>
    </div>
  );
};

export default Buttun;
