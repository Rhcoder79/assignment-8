import React from 'react';
import { createBrowserRouter, data } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import App from '../App';
import AppDetails from '../Pages/AppDetails/AppDetails';
export const router = createBrowserRouter([
  {
    path: "/",
     Component:Root,
     children:[
        {
            index:true,
            loader: async ()=>fetch('appData.json'),
            path:"/",
            Component:Home
        },
        {
            path:"/about",
            loader: async ()=>{
                const res1=await fetch('/appData.json');
                const res2=await fetch('/moreAppData.json');
                const data1= await res1.json();
                const data2=await res2.json();
                return [...data1,...data2];
            },
            Component:App
        },
        {
            path:'/about/:id',
            Component:AppDetails,
            loader:async({params})=>{
                const res1=await fetch('/appData.json');
                const res2=await fetch('/moreAppData.json');
                const data1= await res1.json();
                const data2=await res2.json();
               const combinedData=[...data1,...data2];
               const singleAppData=combinedData.find(item=>item.id===parseInt(params.id));

               return singleAppData || null; 
            }
        }
     ],
     errorElement:<ErrorPage></ErrorPage>
  },
]);


