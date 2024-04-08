import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import FullBlog from "../components/FullBlog";
import AppBar from "../components/AppBar";
import NotFound from "../components/NotFound";
import FullBlogSkeleton from "../skeletons/FullBlogSkeleton";

const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({ id: id || "" });
  if (loading)
    return (
      <div>
        <AppBar />
        <FullBlogSkeleton />;
      </div>
    );
  if (blog)
    return (
      <div>
        <AppBar />
        <FullBlog {...blog} />
      </div>
    );
  else return <NotFound />;
};

export default Blog;
