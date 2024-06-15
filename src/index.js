import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/root/Root';
import Home from './components/Home/Home';
import AppliedJobs from './components/appliedJobs/AppliedJobs';
import ErrorPage from './components/errorpage/ErrorPage';
import JobsDetail from './components/jobdetails/JobsDetail';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/applied",
        element: <AppliedJobs />,
        loader:()=>fetch('../jobs.json')
      },
      {
        path: "/job/:id",
        element: <JobsDetail />,
        loader:()=>fetch('../jobs.json')
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);
