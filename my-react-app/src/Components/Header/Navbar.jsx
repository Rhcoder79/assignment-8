import { Download, Github, House, LayoutGrid,Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import img from "../../assets/logo.png"
import { Link } from 'react-router';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
     <div className='sticky top-0 z-50'>
        <nav className='bg-white p-5 relative' >
         <section className='max-w-[90%] mx-auto flex justify-between items-center text-black '>
            <Link to='/'> <div className='flex items-center gap-2'>
         
        <img src={img} alt="" className='lg:w-12 w-8   '/> 
     <h1 className='text-blue-800 font-bold lg:text-2xl text-xl'> HERO.IO</h1></div> </Link>
     
          <div className='hidden md:block'>
            <ul className='flex gap-5'>

                <Link to='/'><li className='flex items-center gap-0.5 '><House /> Home</li> </Link>
             
                <Link to='/about'><li className='flex items-center gap-0.5'><LayoutGrid /> Apps</li></Link>
               <Link to="installation"> <li className='flex items-center gap-0.5'><Download /> Installation</li></Link>
            </ul>
          </div>
          
          <div className='hidden md:block' >
            <a href="https://github.com/Rhcoder79" target='_blank'><button className='btn btn-primary font-bold'><Github /> Contribute</button>
            </a></div>
            <div className='md:hidden flex items-center' onClick={toggleMenu}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </div>
              
{isOpen && (
    <div className='md:hidden bg-white absolute top-full left-0 w-full border-t p-5 shadow-lg z-50'>
        <ul className='flex flex-col gap-5 font-semibold'>
         <Link to='/' onClick={toggleMenu}><li className='flex items-center gap-2'><House /> Home</li></Link>
            <Link to='/about' onClick={toggleMenu}><li className='flex items-center gap-2'><LayoutGrid /> Apps</li></Link>
            <li className='flex items-center gap-2' onClick={toggleMenu}><Download /> Installation</li>
            <hr />
            <a href="https://github.com/Rhcoder79" target='_blank'>
                <button className='btn btn-primary w-full'><Github /> Contribute</button>
            </a>
        </ul>
    </div>
)}
         </section>
        </nav>
     </div>
    );
};

export default Navbar;
