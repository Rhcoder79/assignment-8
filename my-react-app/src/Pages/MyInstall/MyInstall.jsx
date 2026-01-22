import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredApp } from '../../utility/addToDB';
import SingleApp from '../SingleApp/SingleApp';



const MyInstall = () => {
    const [installation,setInstallation]=useState([]);

    const data=useLoaderData();
    console.log(data);
    useEffect(()=>{
    const storedAppsData=getStoredApp()
    // console.log(storedAppsData)
   const convertedStoredApps=storedAppsData.map(id=>parseInt(id))
   const myInstallation=data.filter(app=>convertedStoredApps.includes(app.id));
   setInstallation(myInstallation);

    },[data])
    return (
        <div>
        
            <h3>app i download {installation.length} </h3>
           {installation.length > 0 ?<div> { installation.map(app => ( <SingleApp key={app.id} singleApp={app} /> )) }</div>:
            <h3 className='text-2xl font-semibold text-gray-500'>
                            No apps installed yet!
                        </h3>
                 
                }
        </div>
    );
};

export default MyInstall;
