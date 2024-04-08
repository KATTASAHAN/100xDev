const Button = ({
  label,
  onclick,
  css,
  isDisabled,
}: {
  label: string;
  onclick: () => void;
  css?: string;
  isDisabled?: boolean;
}) => {
  console.log(isDisabled);
  return (
    <button
      onClick={onclick}
      className={
        "bg-black text-white px-4 p-2 rounded font-semibold disabled:opacity-50 " +
        css
      }
      disabled={isDisabled}
    >
      {label}
    </button>
  );
};

export default Button;
