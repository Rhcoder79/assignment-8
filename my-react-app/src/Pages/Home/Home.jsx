import React from 'react';
import play from '../../icons/play-store.png'
import app from '../../icons/app-store.png'
const Home = () => {
    return (
        <section className='p-10 bg-[#f5f5f5] text-black '>
            <div className='max-w-9/10 mx-auto  '>
                <div className='flex flex-col  items-center text-center'>
                <div><h1 className='text-5xl font-bold'>We Build <br />
                <span className='text-blue-800'>Productive</span> Apps</h1></div>
                <div >
                    <p className='opacity-90 max-w-[60%] mx-auto '>At <span className='font-bold text-blue-800 '>HERO.IO, </span>
                      we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
                    Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                </div>
                <div>
                    <button><img src={play} alt="image not found" /> Google Play</button>
                    <button><img src={app} alt="image not found" /> App Store</button>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Home;