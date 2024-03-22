import { useLoaderData } from "react-router-dom";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Content = () => {
  const blog = useLoaderData();
  const { title, published_at, cover_image, description, tags, body_html } =
    blog;

  console.log(blog);
  return (
    <div
      rel="noopener noreferrer"
      href="#"
      className="flex-col flex border-2 rounded p-3 justify-between mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900"
    >
      <div>
        <img
          role="presentation"
          className="object-cover w-full rounded h-full dark:bg-gray-500"
          src={
            cover_image ||
            "https://i.ibb.co/wYm3xB4/media-Event-Image-Not-Found.jpg"
          }
        />
        <div className="flex flex-wrap py-6 gap-2 border-b-2 border-dashed dark:border-gray-500">
          {tags?.map((tag) => (
            <a
              key={tag}
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-400 dark:text-gray-900"
            >
              #{tag}
            </a>
          ))}
        </div>
        <h3 className="text-2xl my-4 font-semibold group-hover:underline group-focus:underline">
          {title}
        </h3>
      </div>
      <div className="space-y-3 flex flex-col">
        <span className="text-lg font-semibold dark:text-gray-400">
          Date published : {new Date(published_at).toLocaleDateString()}
        </span>
        <span className="text-lg dark:text-gray-400">
          Description : {description}
        </span>
        <Markdown className="my-5" rehypePlugins={[rehypeRaw]}>
          {body_html}
        </Markdown>
      </div>
    </div>
  );
};

export default Content;
