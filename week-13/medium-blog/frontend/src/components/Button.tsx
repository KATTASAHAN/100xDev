const Button = ({ label, onclick }: { label: string; onclick: () => void }) => {
  return (
    <button
      onClick={onclick}
      className="bg-black text-white p-2 m-1 rounded font-semibold"
    >
      {label}
    </button>
  );
};

export default Button;
