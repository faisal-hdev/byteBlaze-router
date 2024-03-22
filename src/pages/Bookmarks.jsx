/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { getBlogs } from "../utils";

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  }, []);

  return (
    //container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12
    <div className="grid container max-w-6xl mx-auto py-12 justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <BlogCard deletable={true} key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default Bookmarks;
