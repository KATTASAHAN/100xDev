import { useEffect, useState } from "react";
import { BACKEND_URL, BLOGS, BLOG_ROUTES } from "../config";
import axios from "axios";
import { BlogType } from "../types";
import BlogCard from "../components/BlogCard";
import AppBar from "../components/AppBar";

const Blogs = () => {
  const [blogs, setBlogs] = useState<BlogType[] | []>([]);
  useEffect(() => {
    const END_POINT = BACKEND_URL + BLOG_ROUTES + BLOGS;
    axios
      .get(END_POINT, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((data) => {
        setBlogs(data.data.posts);
      });
    return setBlogs([]);
  }, []);

  return (
    <>
      <div>
        <AppBar />
      </div>
      <div className="flex flex-col items-center">
        {blogs.map((blog: BlogType) => (
          <BlogCard {...blog} />
        ))}
      </div>
    </>
  );
};

export default Blogs;
