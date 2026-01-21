import React from 'react';
import Navbar from '../../Components/Header/Navbar';
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router';
 import error from "../../assets/error-404.png"
const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
               <div className="flex flex-col items-center justify-center py-10 md:py-20 px-5 text-center bg-[#F5F5F5]">
             <img src={error} alt="" />
            <h2 className="text-3xl md:text-5xl font-bold text-red-500 mb-4">Oops, page not found!</h2>
            <p className="text-black mb-6 text-xl">
              The page you are looking for is not available.
            </p>
            <Link to="/">
                <button className="btn btn-primary font-bold text-2xl">Go Back!</button>
            </Link>
        </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;