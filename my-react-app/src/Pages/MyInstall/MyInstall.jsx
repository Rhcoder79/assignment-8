import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredApp, removeStoredDB } from '../../utility/addToDB';

import InstallApp from '../../Components/InstallApp/InstallApp';
import { toast } from 'react-toastify';



const MyInstall = () => {
    const [installation,setInstallation]=useState([]);
     const [sort,setSort]=useState("");

    const data=useLoaderData();
    console.log(data);
    useEffect(()=>{
    const storedAppsData=getStoredApp()
    // console.log(storedAppsData)
   const convertedStoredApps=storedAppsData.map(id=>parseInt(id))
   const myInstallation=data.filter(app=>convertedStoredApps.includes(app.id));
   setInstallation(myInstallation);

    },[data])
    const removeApp=(e)=>{
      const filteredApp=installation.filter(ap=>ap.id!==e.id)
      setInstallation(filteredApp)
       removeStoredDB(e.id);
       toast(`${e.title} Uninstalled!`)
    }
    const handleSort=(type)=>{
        setSort(type)
        if(type==="descending"){
          const sortedDescending=[...installation].sort((a,b)=>a.downloads-b.downloads);
          setInstallation(sortedDescending);
        }
        if(type==="ascending"){
        const sortedAscending=[...installation].sort((a,b)=>b.downloads-a.downloads);
        setInstallation(sortedAscending);
        }
    }
    return (
        <div className='bg-[#f5f5f5] md:p-10  p-5 text-black'>
            <div className='text-center'>
                <h1 className='text-3xl font-bold text-[#001931]'>Your Installed Apps</h1>
                <p className='text-[#627382] mt-2'>Explore All Trending Apps on the Market developed by us</p>
            </div>
              <div className='flex  items-center justify-between mb-2'>
                <div><h3 className='text-xl font-bold text-[#001931]'>{installation.length} Apps Found  </h3></div>
                      < div >
                    <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1 bg-white text-black">Sort By Size</div>
                    <ul tabIndex="-1" className="dropdown-content bg-white menu  rounded-box z-1 w-52 p-2 shadow-sm">
                <li><a onClick={()=>handleSort("descending")}>Low-High</a></li>
                <li><a onClick={()=>handleSort("ascending")}>High-Low</a></li>
                    </ul>
                     </div>
                     </div>
            </div>
            {/* <SingleApp singleApp={app} /> */}
           {installation.length > 0 ?  installation.map(app => ( <InstallApp app={app} removeApp={removeApp}  key={app.id}></InstallApp> )) :
            <h3 className='text-2xl font-semibold text-gray-500 text-center'>
                               No apps installed yet!
                        </h3>
                 
                }
        </div>
    ); 
};

export default MyInstall;
