/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import placeholderImage from "../assets/404.jpg";

const BlogCard = ({ blog }) => {
  const { cover_image, title, description, published_at, id } = blog;
  return (
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
          src={cover_image || placeholderImage}
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
  );
};

export default BlogCard;
