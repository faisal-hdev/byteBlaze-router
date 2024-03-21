import "./index.css";
import ReactDOM from "react-dom/client";
import { router } from "./routes/Routes";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
