import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import App from '../App';
export const router = createBrowserRouter([
  {
    path: "/",
     Component:Root,
     children:[
        {
            index:true,
            loader:()=>fetch('appData.json'),
            path:"/",
            Component:Home
        },
        {
            path:"/about",
            loader:()=>fetch('appData.json'),
            Component:App
        }
     ],
     errorElement:<ErrorPage></ErrorPage>
  },
]);

