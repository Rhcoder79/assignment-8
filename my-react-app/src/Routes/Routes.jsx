import React from 'react';
import { createBrowserRouter, data } from "react-router";
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
            loader: async ()=>fetch('appData.json'),
            path:"/",
            Component:Home
        },
        {
            path:"/about",
            loader: async ()=>{
                const res1=await fetch('appData.json');
                const res2=await fetch('moreAppData.json');
                const data1= await res1.json();
                const data2=await res2.json();
                return [...data1,...data2];
            },
            
            Component:App
        }
     ],
     errorElement:<ErrorPage></ErrorPage>
  },
]);

// const combinedDataLoader = async () => {
//     try {
//         const res1 = await fetch('/appData.json'); // আগের ৮টি ডাটা
//         const res2 = await fetch('/moreAppData.json'); // আপনার নতুন ২০টি ডাটা (ফাইলের নাম ঠিক রাখুন)

//         if (!res1.ok || !res2.ok) {
//             throw new Error("JSON file not found");
//         }

//         const data1 = await res1.json();
//         const data2 = await res2.json();

//         // দুটি লিস্টকে একসাথে করে রিটার্ন করছি
//         return [...data1, ...data2];
//     } catch (error) {
//         console.error("Loader Error:", error);
//         return []; // এরর হলে খালি লিস্ট দিবে যাতে পেজ লোড হয়
//     }
// };

// export const router = createBrowserRouter([
//     {
//         path: "/",
//         Component: Root,
//         errorElement: <ErrorPage />,
//         children: [
//             {
//                 index: true,
//                 // হোম পেজে শুধুমাত্র আগের ৮টি ডাটা দেখাবে
//                 loader: () => fetch('/appData.json'), 
//                 Component: Home
//             },
//             {
//                 path: "/about",
//                 // এখানে ক্লিক করলে আগের ৮টি + নতুন ২০টি সব দেখাবে
//                 loader: combinedDataLoader, 
//                 Component: App
//             }
//         ]
//     }
// ]);