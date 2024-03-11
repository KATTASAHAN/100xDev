import { HeaderType } from "../types";

const Header = ({ header }: HeaderType) => {
  return <div className="font-bold text-4xl">{header}</div>;
};

export default Header;
