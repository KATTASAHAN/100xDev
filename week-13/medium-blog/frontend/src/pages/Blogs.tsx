import { BlogType } from "../types";
import BlogCard from "../components/BlogCard";
import AppBar from "../components/AppBar";
import { useBlogs } from "../hooks";
import Retry from "../components/Retry";
import BlogsSkeleton from "../skeletons/BlogsSkeleton";

const Blogs = () => {
  const { loading, blogs } = useBlogs();
  if (loading)
    return (
      <div>
        <AppBar />
        <BlogsSkeleton />
        <BlogsSkeleton />
        <BlogsSkeleton />
        <BlogsSkeleton />
      </div>
    );
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
  } else return <Retry />;
};

export default Blogs;
