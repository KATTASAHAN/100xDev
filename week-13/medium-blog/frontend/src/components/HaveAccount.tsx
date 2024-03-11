import { Link } from "react-router-dom";
import { AuthType } from "../types";

const HaveAccount = ({ type }: AuthType) => {
  return (
    <div className="m-1 font-medium text-slate-600">
      {type === "signup"
        ? "Already have an account? "
        : "Don't have an accoun? "}
      <Link
        to={type === "signup" ? "/signin" : "/signup"}
        className="underline"
      >
        {type === "signup" ? "Login" : "Signup"}
      </Link>
    </div>
  );
};

export default HaveAccount;
