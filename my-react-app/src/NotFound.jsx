import React from 'react';
import { Link } from 'react-router';

const NotFound = ({message}) => {
    return (
        <div className="flex flex-col items-center justify-center py-20 px-5 text-center bg-[#F5F5F5]">
            
            <h2 className="text-3xl md:text-5xl font-bold text-red-500 mb-4">
                {message}
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              The App you are requesting is not found on our system.  please try another apps
            </p>
            <Link to="/about">
                <button className="btn btn-primary font-bold text-2xl">Go Back!</button>
            </Link>
        </div>
    );
};

export default NotFound;