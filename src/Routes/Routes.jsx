import React from 'react';
// Changed from "react-router" to "react-router-dom"
import { createBrowserRouter } from "react-router-dom"; 
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPages/ErrorPage';
import Home from '../Pages/Home/Home';
import AllApps from '../Pages/AllApps/AllApps';
import AppDetails from '../Pages/AppDetails/AppDetails';
import InstalledApps from '../Pages/InstalledApps/InstalledApps';

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
                    const res = await fetch('/trendingApps.json');
                    if (!res.ok) throw new Error("Failed to load trending apps");
                    return res.json();
                }
            },
            {
                path: "all-apps",
                element: <AllApps />,
                loader: () => fetch('/allApps.json')
            },
            {
            
                path: "installed-apps", 
                element: <InstalledApps />,
                loader: () => fetch("/allApps.json"),
            },
            {
                path: "app/:id",
                element: <AppDetails />,
                loader: () => fetch('/allApps.json')
            }
        ]
    },
]);