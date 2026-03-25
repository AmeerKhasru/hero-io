import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPages/ErrorPage';
import Home from '../Pages/Home/Home';


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
      }
    ]
  },
]);