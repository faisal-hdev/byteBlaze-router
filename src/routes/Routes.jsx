import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import Blog from "../pages/Blog";
import Bookmarks from "../pages/Bookmarks";
import Content from "../components/Content";
import Author from "../components/Author";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/blogs",
        loader: () => fetch(`https://dev.to/api/articles?per_page=28&top=7`),
        element: <Blogs />,
      },
      {
        path: "/blog/:id",
        element: <Blog />,
        loader: ({ params }) =>
          fetch(`https://dev.to/api/articles/${params.id}`),
        children: [
          {
            index: true,
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params.id}`),
            element: <Content />,
          },
          {
            path: "author",
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params.id}`),
            element: <Author />,
          },
        ],
      },

      { path: "/bookmarks", element: <Bookmarks /> },
    ],
  },
]);
