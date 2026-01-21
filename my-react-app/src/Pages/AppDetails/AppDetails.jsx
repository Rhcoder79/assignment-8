import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import NotFound from '../../NotFound';
import download from "../../assets/icon-downloads.png"
import ratings from "../../assets/icon-ratings.png"
import { FolderKanban } from 'lucide-react';
const AppDetails = () => {
    const {id}=useParams();
    console.log(id);
    const AppDetail=useLoaderData();
    
   if(!AppDetail){
    return <NotFound message={`OOPS!! ${id} Not Found!`} />
   }
    const {image,title,companyName,downloads,ratingAvg,reviews,size,description}=AppDetail

    return (
<div className='bg-[#f5f5f5] text-black p-5 md:p-10'>

    <div className='max-w-9/10 mx-auto flex gap-20' >
        <div><img src={image} alt="" /></div>
        <div>
            <div className='border-b-2 border-blue-800'>
                <h1>{title}</h1>
                <p>Developed by {companyName}</p>
            </div>
        
        </div>
    </div>

</div>
    );
};

export default AppDetails;
