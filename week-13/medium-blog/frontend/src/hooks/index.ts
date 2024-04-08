import axios from "axios";
import { useEffect, useState } from "react";
import envRouter from "../controlers/router";
import { BLOGS, BLOG_ROUTES } from "../config";
import { BlogType, FullBlogType } from "../types";

export const useBlogs = () => {
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
      })
      .catch(() => setLoading(false));
  }, []);

  return { loading, blogs };
};

export const useBlog = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<FullBlogType>();

  useEffect(() => {
    const END_POINT = envRouter() + BLOG_ROUTES + "/" + id;
    axios
      .get(END_POINT, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((data) => {
        setBlog(data.data.post);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return { loading, blog };
};
