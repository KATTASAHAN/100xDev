import { BlogType } from "../types";

const BlogCard = (blog: BlogType) => {
  return (
    <div
      key={blog.id.toString()}
      className="m-2 rounded-xl border max-w-screen-sm p-4"
    >
      <div className="flex flex-col gap-1">
        <div className="flex gap-2 items-center">
          <div className="h-8 w-8 bg-slate-400 rounded-full flex items-center justify-center text-white font-semibold">
            {blog.author.name[0].toUpperCase()}
          </div>
          <div>{blog.author.name}</div>
          <div className="h-1 w-1 bg-slate-600 rounded-full"></div>
          <div className="text-slate-600">Dec 3,2023</div>
        </div>
        <div className="font-bold text-2xl">{blog.title}</div>
        <div>{blog.content}</div>
      </div>
      <div className="flex items-center justify-between py-6">
        <div className="text-slate-600">3 min read</div>
        <div className="flex gap-px">
          <div className="h-1 w-1 bg-slate-400 rounded-full"></div>
          <div className="h-1 w-1 bg-slate-400 rounded-full"></div>
          <div className="h-1 w-1 bg-slate-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
