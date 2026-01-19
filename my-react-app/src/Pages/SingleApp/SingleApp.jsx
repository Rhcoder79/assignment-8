import { Download, Star } from 'lucide-react';
import React from 'react';

const SingleApp = ({singleApp}) => {
    // console.log(singleApp)
    const {image,title,companyName,downloads,ratingAvg}=singleApp
    return (
        <div className='p-5 md:p-10 border mb-2'>
            <div className='  bg-gray-100 '>
                <img className='h-40 w-50 max-w-9/10 mx-auto rounded-xl' src={image} alt="image not found" />
            </div>
            <div className='mt-2'>
                <h2 className='font-bold'>{title}: <span>{companyName}</span> </h2>
                <div className='flex justify-between mt-2'>
                    <button className='btn btn-accent '><Download /> {downloads}</button>
                    <button className='btn btn-accent'><Star /> {ratingAvg}</button>
                </div>

            </div>

        </div>
    );
};

export default SingleApp;