/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { deleteBlogs } from "../utils";

const BlogCard = ({ blog, deletable }) => {
  const { cover_image, title, description, published_at, id } = blog;
  const handleDelete = (id) => {
    deleteBlogs(id);
  };
  return (
    <div className="flex relative">
      <Link
        to={`/blog/${id}`}
        rel="noopener noreferrer"
        href="#"
        className="max-w-sm flex-col flex justify-between mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 transition
         border-secondary hover:border-primary duration-200 p-3 border hover:scale-105 rounded"
      >
        <div>
          <img
            role="presentation"
            className="object-cover w-full rounded h-44 dark:bg-gray-500"
            src={
              cover_image ||
              "https://i.ibb.co/wYm3xB4/media-Event-Image-Not-Found.jpg"
            }
          />
          <h3 className="text-2xl my-4 font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
        </div>
        <div className="space-y-2">
          <span className="text-lg font-semibold dark:text-gray-400">
            Date published : {new Date(published_at).toLocaleDateString()}
          </span>
          <p>{description}</p>
        </div>
      </Link>
      {deletable && (
        <div
          onClick={() => handleDelete(id)}
          className=" -top-6 -right-6 text-secondary hover:text-primary cursor-pointer hover:bg-secondary absolute bg-primary p-3 rounded-full hover:scale-100"
        >
          <MdDeleteForever size={20} className="  group-hover:text-primary" />
        </div>
      )}
    </div>
  );
};

export default BlogCard;
