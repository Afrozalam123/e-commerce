import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-amber-900">
      <ul className="px-28 py-4 flex text-white justify-end space-x-11 cursor-pointer">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/catalogue">Catalogue</Link></li>
        <li><Link to="/contact">Contact us</Link></li>
      </ul>
    </nav>
  );
}
