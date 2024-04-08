import { FullBlogType } from "../types";
import Avatar from "./Avatar";
import Header from "./Header";

const FullBlog = (blog: FullBlogType) => {
  const author: string = blog.author.name || "Anonymous";
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-12 px-10 w-full max-w-screen-xl pt-4">
        <div className="col-span-8 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Header header={blog.title} />
            <div className="text-slate-500 font-medium text-sm">
              Posted on {new Date(blog.postedOn).toString()}
            </div>
          </div>
          <div className="whitespace-pre-line">{`${blog.content}`}</div>
        </div>
        <div className="col-span-4">
          <div className="font-medium">Author</div>
          <div className="flex w-full items-center gap-4">
            <div>
              <Avatar name={author} />
            </div>
            <div>
              <div className="font-bold text-xl">{author}</div>
              <div>Description about author</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullBlog;
