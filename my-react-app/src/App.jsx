

import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Apps from './Pages/Apps/Apps';
import { Search } from 'lucide-react';
import NotFound from './NotFound';
import { Suspense } from 'react';

const App = () => {
  const AllData=useLoaderData();
  const [search,setSearch]=useState("");
  const filterApps=AllData.filter(app=>app.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className='py-10 bg-[#f5f5f5] text-black '>   
      <h1 className="text-center text-3xl font-bold mb-2">All Our Application</h1>
      <p className='text-[#627382] text-center'>Explore All Apps on the Market developed by us. We code for Millions</p> <br />
      <div className='flex gap-2 flex-col sm:flex-row justify-between max-w-9/10 mx-auto items-center mb-2 '>
        <div className=''><h1 className='text-xl font-bold'><span>({filterApps.length})</span> Apps Found </h1></div>
        <div className='flex items-center border border-gray-300'><Search />
<input className='outline-none  p-1' type="text" placeholder='Search Apps' value={search} onChange={e=>setSearch(e.target.value)} />
</div>
         </div>
       {
        filterApps.length>0 ?(
    <Suspense fallback={<div className="text-center font-bold">Searching Apps...</div>}>
      <Apps data={filterApps} />
    </Suspense>):<NotFound message="No App Found!"></NotFound>
       }  
      {/* // <Apps data={AllData}></Apps> */}
    </div>
  );
};

export default App;
  