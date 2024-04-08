import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Blog from "./pages/Blog";
import Blogs from "./pages/Blogs";
import Publish from "./pages/Publish";
import NotFound from "./components/NotFound";
import Retry from "./components/Retry";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Navigate to="/signin" /> },
    { path: "/signup", element: <Signup /> },
    { path: "/signin", element: <Signin /> },
    { path: "/blogs", element: <Blogs /> },
    { path: "/blog/:id", element: <Blog /> },
    { path: "/publish", element: <Publish /> },
    { path: "*", element: <NotFound /> },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
