import axios from "axios";
import { useEffect, useState } from "react";
import envRouter from "../controlers/router";
import { BLOGS, BLOG_ROUTES } from "../config";
import { BlogType } from "../types";

const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<BlogType[] | []>([]);

  useEffect(() => {
    const END_POINT = envRouter() + BLOG_ROUTES + BLOGS;
    axios
      .get(END_POINT, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((data) => {
        setBlogs(data.data.posts);
        setLoading(false);
      });
  }, []);

  return { loading, blogs };
};

export default useBlogs;
