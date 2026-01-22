import { Download, Star } from 'lucide-react';
import React from 'react';

const InstallApp = ({app,removeApp}) => {
    console.log(app);
    const {image,title,size,ratingAvg,downloads}=app
    // const handleRemove=()=>{
    //     removeApp(app)
    // }
    return (
        <div className='bg-white flex items-center justify-between mb-2.5 '>
            <div className='flex gap-2'>
                 <div className='w-15 h-15'> <img src={image} alt="" /> </div>
            <div className='flex flex-col gap-4'>
                <div ><h1 className='font-bold text-xl text-[#001931]'>{title}</h1></div>
                <div className='flex gap-2 font-bold text-[#001931]'>
                    <div className='flex items-center'><Download  /> <h4> {downloads}</h4></div>
                    <div className='flex items-center'><Star />  <h4>{ratingAvg}</h4></div>
                    <div>{size} MB</div>
                </div>
            </div>
            </div>
            <div><button onClick={()=>removeApp(app)} className='btn btn-error text-white font-bold'>Uninstall</button></div>
        </div>
    );
};

export default InstallApp;