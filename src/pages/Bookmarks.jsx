/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { deleteBlogs, getBlogs } from "../utils";
import EmptyState from "../components/EmptyState";

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  }, []);

  const handleDelete = (id) => {
    deleteBlogs(id);
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  };

  if (blogs.length < 1)
    return (
      <EmptyState
        message={"No Bookmarks Available"}
        address={"/blogs"}
        label={"Go to blogs"}
      />
    );
  return (
    <div className="grid container max-w-6xl mx-auto py-12 justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <BlogCard
          handleDelete={handleDelete}
          deletable={true}
          key={blog.id}
          blog={blog}
        />
      ))}
    </div>
  );
};

export default Bookmarks;
