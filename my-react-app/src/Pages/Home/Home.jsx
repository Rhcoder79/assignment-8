import React from 'react';
import play from '../../icons/play-store.png'
import app from '../../icons/app-store.png'
import hero from '../../assets/hero.png'
import download from "../../assets/icon-downloads.png"
import ratings from "../../assets/icon-ratings.png"
import { Link, useLoaderData } from 'react-router';
import Apps from '../Apps/Apps';
const Home = () => {
    const data=useLoaderData();
    // console.log(data)
    return (
       <Link to='/'>
         <section className=' bg-[#f5f5f5] text-black '>
            <div className='md:p-10 p-5 max-w-9/10 mx-auto  '>
                <div className='flex flex-col gap-2  items-center text-center'>
                <div><h1 className='text-5xl font-bold'>We Build <br />
                <span className='text-blue-800'>Productive</span> Apps</h1></div>
                <div >
                    <p className='sm:opacity-90 sm:max-w-[60%] sm:mx-auto text-xl sm:text-center text-left '>At 
                        <span className='font-bold text-blue-800 '> HERO.IO, </span>
                      we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
                    Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                </div>
                <div className='flex gap-3 flex-wrap justify-center '>
                    <a href="https://play.google.com/store" target='_blank'><button className='btn bg-white text-black font-bold border-none'>
                        <img src={play} alt="image not found" /> Google Play</button></a>
                    <a href="https://www.apple.com/app-store/" target='_blank'>
                        <button className='btn bg-white text-black font-bold border-none'>
                        <img src={app} alt="image not found" /> App Store</button>
                    </a>
                </div>
            </div>
            </div>
             <div className='  mt-5 bg-red-600 overflow-hidden'>
               <div className='flex justify-center'> <img  src={hero} alt="image not found"  /></div>
                <div className='bg-blue-600 text-white text-center p-5 md:p-10'>
                    <h1 className='font-bold text-3xl'>Trusted by Millions, Built for You </h1> <br />
                    <div className='flex justify-evenly  max-sm:flex-wrap '>
                        <div className='flex  gap-4 items-center'>
                            <div className='flex flex-col gap-3'>
                                <p className='font-semibold'>Total Downloads</p>
                            <h1 className='text-3xl font-bold'>29.6M</h1>
                             <p>21% more than last month</p>
                            </div>
                            <div>
                                <img src={download} alt="not found" className='btn btn-soft' />
                            </div>
                            </div>
                        <div className='flex  gap-4 items-center'>
                           <div className='flex flex-col gap-3 '>
                             <p className='font-semibold'>Total Reviews</p>
                            <h1 className='text-3xl font-bold' >906K</h1>
                             <p>46% more than last month</p>
                           </div>
                           <div>
                            <img src={ratings} alt="" />
                           </div>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <div className='flex flex-col  gap-3'>
                                <p className='font-semibold'>Active Apps</p>
                            <h1 className='text-3xl font-bold'>132+</h1>
                             <p>31% more with Launch</p>
                            </div>
                            <div>
                                <img src={play} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='p-5 md:p-10 text-center'>
                    <h1 className='text-[#001931] font-bold text-3xl'>Trending Apps</h1>
                    <p className='md:opacity-90 mt-2'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <Apps data={data}></Apps>
<Link to="/about">
<div  className='flex justify-center items-center'><button className='btn btn-primary font-bold'>Show All</button></div> <br />
</Link>
            </div>
        </section>
       </Link>
    );
};

export default Home;
