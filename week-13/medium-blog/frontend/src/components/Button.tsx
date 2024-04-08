const Button = ({
  label,
  onclick,
  css,
}: {
  label: string;
  onclick: () => void;
  css?: string;
}) => {
  return (
    <button
      onClick={onclick}
      className={"bg-black text-white px-4 p-2 rounded font-semibold " + css}
    >
      {label}
    </button>
  );
};

export default Button;
