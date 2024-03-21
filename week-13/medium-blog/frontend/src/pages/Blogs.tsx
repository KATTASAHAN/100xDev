import { BlogType } from "../types";
import BlogCard from "../components/BlogCard";
import AppBar from "../components/AppBar";
import { useBlogs } from "../hooks";

const Blogs = () => {
  const { loading, blogs } = useBlogs();

  return (
    <>
      <div>
        <AppBar />
      </div>
      {loading ? (
        <div>loading...</div>
      ) : (
        <div className="flex flex-col items-center">
          {blogs.map((blog: BlogType) => (
            <BlogCard key={blog.id.toString()} {...blog} />
          ))}
        </div>
      )}
    </>
  );
};

export default Blogs;
