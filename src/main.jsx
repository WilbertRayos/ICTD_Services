import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

import ServiceRequest from "./ServiceRequest.jsx";
import WebsiteUpload from "./WebsiteUpload.jsx";
import NavbarWrapper from "./NavbarWrapper.jsx";
import About from "./About.jsx";
import Contacts from "./Contacts.jsx";

document.documentElement.classList.add("scroll-smooth");

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarWrapper />,
    children: [
      {
        path: "/",
        element: <ServiceRequest />,
      },
      {
        path: "/ServiceRequest",
        element: <ServiceRequest />,
      },
      {
        path: "/WebsiteUpload",
        element: <WebsiteUpload />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contacts",
        element: <Contacts />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
);
