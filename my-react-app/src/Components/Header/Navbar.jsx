import { Download, Github, House, LayoutGrid } from 'lucide-react';
import React from 'react';
import img from "../../assets/logo.png"
import { Link } from 'react-router';
const Navbar = () => {
    return (
     <div>
        <nav className='bg-white p-5' >
         <section className='max-w-[90%] mx-auto flex justify-between items-center text-black '>
            <Link to='/'> <div className='flex items-center gap-2'>
         
        <img src={img} alt="" className='lg:w-12 w-8   '/> 
     <h1 className='text-blue-800 font-bold lg:text-2xl text-xl'> HERO.IO</h1></div> </Link>
     
          <div>
            <ul className='flex gap-5'>

                <li className='flex items-center gap-0.5 '><House /> Home</li>
             
                <Link to='/about'><li className='flex items-center gap-0.5'><LayoutGrid /> Apps</li></Link>
                <li className='flex items-center gap-0.5'><Download /> Installation</li>
            </ul>
          </div>
          
          <div ><a href="https://github.com/Rhcoder79" target='_blank'><button className='btn btn-primary font-bold'><Github /> Contribute</button></a></div>
         </section>
        </nav>
     </div>
    );
};

export default Navbar;
