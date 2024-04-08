import { Link, useLocation, useNavigate } from "react-router-dom";
import Avatar from "./Avatar";
import Button from "./Button";

const AppBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center px-4 py-2 border-b-2">
      <Link to={"/blogs"} className="font-semibold text-2xl">
        Medium
      </Link>
      <div className="flex items-center gap-4">
        {location.pathname !== "/publish" && (
          <Button
            label="+ New"
            css="py-1 m-1 rounded-full bg-green-700"
            onclick={() => navigate("/publish")}
          />
        )}
        <Avatar name={localStorage.getItem("userName") || "Anonymous"} />
      </div>
    </div>
  );
};

export default AppBar;
