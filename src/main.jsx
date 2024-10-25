import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import Login from "./components/Login";
import Register from "./components/Register";
import AuthProvider from "./Provider/AuthProvider";
import PrivateRoute from "./routes/PrivateRoute";
import Profile from "./components/Profile";
import Home from "./components/Home/Home";
import ErrorPage from "./ErrorPage/ErrorPage";
import MyCourses from "./components/Pages/MyCourses";
import Coures from "./components/Pages/Coures";
import AddCourse from "./components/Pages/AddCourse";
import CouresList from "./components/Pages/CouresList";
import UpdateCourse from "./components/Pages/UpdateCourse";
import Enroll from "./components/Pages/Enroll";
import AdminRoot from "./Admin/AdminRoot/AdminRoot";
import AdminDashboard from "./Admin/AdminDashboard/AdminDashboard";
import Video from "./components/Video/Video";
import Support from "./PageImp/Support";
import Files from "./PageImp/Files";
import Assignment from "./PageImp/Assignment";
import Ecourse from "./components/Pages/Ecourse";
// import Product from "./components/Home/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        

      },
      {
        path:"/course",
        element:<Coures/>,
        loader: () => fetch('https://codepee-server.vercel.app/course')
      },
      // {
      //   path:"/community",
      //   element:<PrivateRoute><Community/></PrivateRoute>
      // },
      {
        path:"/support",
        element:<Support/>
      },
      
      
      {
        path: "/enroll/:id",
        element: <PrivateRoute><Enroll/></PrivateRoute>,
        loader: ({ params }) => 
          fetch(`https://codepee-server.vercel.app/course/${params.id}`)
      },
      {
        path:"/mycourse",
        element: <PrivateRoute><MyCourses/></PrivateRoute>,
        loader: () => fetch("https://codepee-server.vercel.app/enrollcourse")
      },
     
      {
        path:"/videos",
        element: <PrivateRoute><Video/></PrivateRoute>,
      },
      {
        path:"/file",
        element: <PrivateRoute><Files/></PrivateRoute>,
      },
      {
        path:"/test",
        element: <PrivateRoute><Assignment/></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path:"/profile",
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
      },

    ]
  },

  {
    path: "dashboard",
    element: (
    <AdminRoot></AdminRoot>  
    ),
    children: [
      {
        path: "/dashboard",
        element: <AdminDashboard></AdminDashboard>
      },

      {
        path:"/dashboard/addcourse",
        element:<AddCourse/>
      },
      
      {
        path:"/dashboard/courselist",
        element:<PrivateRoute><CouresList/></PrivateRoute>,
        loader: () => fetch('https://codepee-server.vercel.app/course')
      },
      {
        path: "/dashboard/courseupdate/:id",
        element: <PrivateRoute><UpdateCourse /></PrivateRoute>,
        loader: ({ params }) => 
          fetch(`https://codepee-server.vercel.app/course/${params.id}`)
      },
      {
        path:"/dashboard/ecourse",
        element: <PrivateRoute><Ecourse/></PrivateRoute>,
        loader: () => fetch("https://codepee-server.vercel.app/mycourse")
      },
      

    ],
  },



  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
