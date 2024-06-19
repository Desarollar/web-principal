import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import Layout from "./components/Pages/Layout/Layout.jsx";
import Home from "./components/Pages/Home/Home.jsx";
import "./index.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      

      {
        path: "*",
        element: (
          <h1>
            Estamos trabajando en esta página, por cualquier consulta dirijase a
            contacto. 😀
          </h1>
        ),
      },
    ],
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
