import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPages/ErrorPage';
import Home from '../Pages/Home/Home';
import AllApps from '../Pages/AllApps/AllApps';


export const router = createBrowserRouter([ 
      {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, 
        element: <Home />,
        loader: async () => {
          const res = await fetch ('/trendingApps.json');
         
          return res.json();
        }
      },

      {
        path: "all-apps",
        element: <AllApps></AllApps>,
        loader: async () => {
          const res = await fetch('/allApps.json');
          return res.json();
        }
      }
    ]
  },
]);