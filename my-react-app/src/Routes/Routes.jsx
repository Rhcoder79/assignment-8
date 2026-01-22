import React, { lazy } from 'react';
import { createBrowserRouter, data } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import { Suspense } from 'react';
import MyInstall from '../Pages/MyInstall/MyInstall';

// import Home from '../Pages/Home/Home';
// import App from '../App';
// import AppDetails from '../Pages/AppDetails/AppDetails';
const Home=lazy(()=>import('../Pages/Home/Home'))
const AppDetails=lazy(()=>import('../Pages/AppDetails/AppDetails'))
const App=lazy(()=>import('../App'))
export const router = createBrowserRouter([
  {
    path: "/",
     Component:Root,
     children:[
        {
            index:true,
            loader: async ()=>fetch('appData.json'),
            path:"/",
            element: (
          <Suspense fallback={<div className="text-center py-20 font-bold text-2xl">Loading Home...</div>}>
            <Home />
          </Suspense>
        )
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
           element: (
          <Suspense fallback={<div className="text-center py-20 font-bold text-2xl">Loading Apps...</div>}>
            <App />
          </Suspense>
           )
        },
        {
       path:'installation',
        loader: async ()=>{
                const res1=await fetch('/appData.json');
                const res2=await fetch('/moreAppData.json');
                const data1= await res1.json();
                const data2=await res2.json();
                return [...data1,...data2];
            },
       Component:MyInstall
        },
        {
            path:'/about/:id',
            loader:async({params})=>{
                const res1=await fetch('/appData.json');
                const res2=await fetch('/moreAppData.json');
                const data1= await res1.json();
                const data2=await res2.json();
               const combinedData=[...data1,...data2];
               const singleAppData=combinedData.find(item=>item.id===parseInt(params.id));

               return singleAppData || null; 
            },
            element: (
          <Suspense fallback={<div className="text-center py-20 font-bold text-2xl">Loading Apps...</div>}>
            <AppDetails />
          </Suspense>
            )
        }
     ],
     errorElement:<ErrorPage></ErrorPage>
  },
]);


