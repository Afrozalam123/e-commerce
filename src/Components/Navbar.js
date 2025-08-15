import React from 'react';
// import { Link } from 'react-router-dom';
import './Navbar.css'
export default function Navbar() {
  return (
    <>
    <nav className='bg-purple-950 text-white justify-end'>
    <ul className="px 28 py-4 space-x-9 flex justify-end">
      <li>Home </li>
      <li>About</li>
      <li>Catalogue</li>
      <li>Contact us</li>
    </ul>
   </nav>
   <main>
     <div className='main bg-fuchsia-400 h-96 py-80 pl-9'>
      <div className='text text-6xl'>
       The best phone in the town
      </div>
     <p className='py-3 w-1/3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, quaerat veniam </p>
     <button className='bg-purple-900 py-2 px-3 rounded-2xl text-white slate-900 hover:bg-fuchsia-700 mx-2'>Buy Now</button>
      <button className='bg-purple-900 py-2  px-3 rounded-2xl text-white slate-900 hover:bg-fuchsia-700 mx-2
      '>Contact us</button>
     </div>
    
   </main>
    </>
   
  );
}
