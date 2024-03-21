import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import FullBlog from "../components/FullBlog";
import AppBar from "../components/AppBar";

const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({ id: id || "" });
  if (loading) return <div>loading...</div>;
  if (blog)
    return (
      <div>
        <AppBar />
        <FullBlog {...blog} />
      </div>
    );
  else return <div>No such Blog</div>;
};

export default Blog;
