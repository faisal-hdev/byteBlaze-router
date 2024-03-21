// import React from "react";
// import Home from "./pages/Home.jsx";
// import App from "./App.jsx";
import "./index.css";
import Blog from "./pages/Blog.jsx";
import ReactDOM from "react-dom/client";
import Bookmarks from "./pages/Bookmarks.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/blog",
        loader: () => fetch("https://dev.to/api/articles?per_page=28&top=7"),
        element: <Blog />,
      },
      { path: "/bookmarks", element: <Bookmarks /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* <App /> */}
    <RouterProvider router={router} />
  </>
);
