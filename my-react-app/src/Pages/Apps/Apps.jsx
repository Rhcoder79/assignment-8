import React, { Suspense } from 'react';
import SingleApp from '../SingleApp/SingleApp';

const Apps = ({data}) => {
    return (
        <div>
            <Suspense fallback={<span>loading....</span>}>
              <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 max-w-9/10 mx-auto'>
                {
                data.map(singleApp=><SingleApp key={singleApp.id} singleApp={singleApp}></SingleApp>)
              }
              </div>
            </Suspense>
        </div>
    );
};

export default Apps;