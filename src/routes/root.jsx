import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/layout";
import Home from "../pages/home";
import About from "../pages/about";
import Blog from "../pages/blog";
import Careers from "../pages/careers";
import Contact from "../pages/contact";
import '../index.css';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/about",
            element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
            path: "/careers",
            element: <Careers />,
          }
      ]
    },
  ]);


export default router