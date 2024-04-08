import { useNavigate } from "react-router-dom";
import Button from "./Button";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-screen">
      <div className=" bg-slate-100 p-10 rounded-xl">
        <div className="flex justify-center mt-4 font-bold text-xl">
          404 Page Not Found
        </div>
        <div className="flex justify-center font-bold text-xl mt-4">
          Would you like to check our Blogs?
        </div>
        <div className="mt-6 flex justify-center">
          <Button label="Click here!" onclick={() => navigate("/blogs")} />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
