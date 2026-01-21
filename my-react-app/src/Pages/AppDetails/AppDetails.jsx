import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import NotFound from '../../NotFound';
import { Download, FolderKanban, Star } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
const AppDetails = () => {
    const {id}=useParams();
    console.log(id);
    const AppDetail=useLoaderData();
    
   if(!AppDetail){
    return <NotFound message={`OOPS!! ${id} Not Found!`} />
   }
    const {image,title,companyName,downloads,ratingAvg,reviews,size,description,ratings}=AppDetail
     
    return (
<div className='bg-[#f5f5f5] text-black p-5 md:p-10'>

    <div className='max-w-9/10 mx-auto flex justify-between md:gap-10 gap-5 ' >
        <div className=' w-[15%]'><img src={image} alt="" /></div>
        <div className='  w-[80%] flex flex-col justify-around '>
            <div className="border-b border-blue-800" >
                <h1 className='text-2xl font-bold text-[#001931]'>{title}</h1>
                <p className='text-xl'>Developed by <span className='font-bold text-blue-800'>{companyName}</span> </p>
            </div>
            <div className='flex gap-5 md:gap-10 items-center mt-2'>
                <div>
                   <Download />
                    <p>Downloads</p>
                    <h1 className='text-[#001931] font-bold text-3xl'>{downloads}</h1>
                    </div>
                <div>
                  <Star />
                <p>Average Ratings</p>
                <h1 className='text-[#001931] font-bold text-3xl'>{ratingAvg}</h1>
                </div>
                <div>
                  <FolderKanban />
                <p>Total Reviews</p>
                <h1 className='text-[#001931] font-bold text-3xl'>{reviews}</h1>
                </div>
            </div>
            <br />
      <div>   <button className='btn text-white  font-bold btn-error '>Install Now ({size} MB)</button></div>
        </div>
      
    </div><br />
<div className='border-t border-blue-800'>
    <div><h1 className='font-bold '>Ratings</h1></div>
    <ResponsiveContainer width="100%" height={300}>
    <BarChart
        layout="vertical"
        data={ratings}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
        <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#E0E0E0" />
        
        <XAxis 
            type="number" 
            tick={{fontSize: 12, fill: '#666'}} 
            axisLine={{stroke: '#E0E0E0'}} 
            tickLine={false}
        />
        
        <YAxis 
            dataKey="name" 
            type="category" 
            tick={{fontSize: 14, fill: '#333'}} 
            axisLine={false} 
            tickLine={false} 
        />
        
    
        
        <Bar dataKey="count" fill="#FF8C00" barSize={20} radius={[0, 4, 4, 0]} />
    </BarChart>
</ResponsiveContainer> 

</div>
<div>
    <div><h1 className='font-bold text-xl text-[#001931]'>Description</h1></div>
    <div><h3 className='text-[#627382]'>{description}</h3> </div>
</div>
</div>
    );
};

export default AppDetails;
