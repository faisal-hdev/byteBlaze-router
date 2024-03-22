import { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { MdBookmarkAdded } from "react-icons/md";
import { saveBlog } from "../utils";

// import Loader from "../components/Loader";

const Blog = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const blog = useLoaderData();
  const { title, published_at, comments_count, public_reactions_count } = blog;

  const handleBookMark = (blog) => {
    saveBlog(blog);
  };

  return (
    <div className="max-w-3xl px-6 py-16 mx-auto space-y-12">
      <article className="space-y-8 dark:bg-gray-800 dark:text-gray-50">
        <div className="space-y-6">
          <h1 className="text-2xl font-bold md:tracking-tight md:text-5xl">
            {title}
          </h1>
          <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-400">
            <p className="text-lg">
              {comments_count} min read •{" "}
              {new Date(published_at).toLocaleDateString()}
            </p>
            <p className="flex-shrink-0 mt-3 text-lg md:mt-0">
              {comments_count} Comments • {public_reactions_count} views
            </p>
          </div>
          {/* Tabs content */}
          <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-800 dark:text-gray-100">
            <Link
              onClick={() => {
                setTabIndex(0);
              }}
              to=""
              rel="noopener noreferrer"
              href="#"
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                tabIndex === 0 ? "border-2 border-b-0" : "border-b"
              } rounded-t-lg dark:border-gray-400 dark:text-gray-50`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>Content</span>
            </Link>
            <Link
              onClick={() => {
                setTabIndex(1);
              }}
              to={`author`}
              rel="noopener noreferrer"
              href="#"
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                tabIndex === 1 ? "border-2 border-b-0" : "border-b"
              } rounded-t-lg dark:border-gray-400 dark:text-gray-50`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              <span>Author</span>
            </Link>
            <div
              onClick={() => handleBookMark(blog)}
              className="bg-primary p-3 hover:scale-105 overflow-hidden rounded-full ml-5 bg-opacity-20 hover:bg-opacity-30 cursor-pointer duration-100"
            >
              <MdBookmarkAdded size={20} className="text-secondary" />
            </div>
          </div>
        </div>
        <Outlet />
      </article>
    </div>
  );
};

export default Blog;
