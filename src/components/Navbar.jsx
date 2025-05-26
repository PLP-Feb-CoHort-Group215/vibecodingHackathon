import React from 'react'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold">NPO Name</div>
        <ul className="hidden md:flex space-x-6">
          {['About', 'Campaigns', 'News', 'Branches', 'Resources', 'Press Room', 'Donate', 'Contact'].map((item, i) => (
            <li key={i} className="hover:text-blue-500 cursor-pointer">{item}</li>
          ))}
        </ul>
      </div>
    </nav>
  )
}