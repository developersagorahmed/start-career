import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Home from "./Components/Home/Home";
import MainHome from "./Components/MainHome/MainHome";
import Statistics from "./Components/Statistics/Statistics";
import AppliedJob from "./Components/AppliedJob/AppliedJob";
import Blog from "./Components/Blog/Blog";
import Error from "./Components/Error/Error";
import JobDetails from "./Components/JobDetails/JobDetails";

const router=createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path:'/',
        element:<MainHome></MainHome>
      },
      {
        path:'statistics',
        element:<Statistics></Statistics>
      },{
        path:"appliedjob",
        element:<AppliedJob></AppliedJob>
      },{
        path:"blog",
        element:<Blog>   </Blog>
      },{
        path:"jobdetail",
        element:<JobDetails></JobDetails>
      }
    ]
  },{
    path:'*',
    errorElement:<Error></Error>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router}></RouterProvider>
    {/* <App /> */}
  </React.StrictMode>,
)
