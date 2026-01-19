

import React from 'react';
import { useLoaderData } from 'react-router';
import Apps from './Pages/Apps/Apps';

const App = () => {
  const data=useLoaderData();
  return (
    <div className='py-10 bg-[#f5f5f5] text-black '>   
      <h1 className="text-center text-3xl font-bold mb-8">All Our Apps</h1>
      <Apps data={data}></Apps>
    </div>
  );
};

export default App;
