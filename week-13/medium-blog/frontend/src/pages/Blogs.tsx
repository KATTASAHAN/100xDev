import { BlogType } from "../types";
import BlogCard from "../components/BlogCard";
import AppBar from "../components/AppBar";
import { useBlogs } from "../hooks";

const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) return <div>loading...</div>;
  if (blogs.length > 0) {
    return (
      <>
        <AppBar />
        <div className="flex flex-col items-center">
          {blogs.map((blog: BlogType) => (
            <BlogCard key={blog.id.toString()} {...blog} />
          ))}
        </div>
      </>
    );
  } else
    return (
      <>
        <AppBar />
        <div>Something went wrong!!!, Please try after sometime</div>
      </>
    );
};

export default Blogs;
