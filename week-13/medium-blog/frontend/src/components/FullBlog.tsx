import { FullBlogType } from "../types";
import Header from "./Header";

const FullBlog = (blog: FullBlogType) => {
  const author: string = blog.author.name || "Anonymous";
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-12 px-10 w-full max-w-screen-xl pt-4">
        <div className="col-span-8 flex flex-col gap-4">
          <Header header={blog.title} />
          <div>{blog.content}</div>
        </div>
        <div className="col-span-4">{author}</div>
      </div>
    </div>
  );
};

export default FullBlog;
