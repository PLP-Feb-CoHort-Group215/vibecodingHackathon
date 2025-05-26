import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p>Follow us on:</p>
        <div className="flex justify-center space-x-4 mt-2">
          {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((platform, i) => (
            <a href="#" key={i} className="hover:underline">{platform}</a>
          ))}
        </div>
        <p className="mt-4 text-sm">© {new Date().getFullYear()} NPO Name. All rights reserved.</p>
      </div>
    </footer>
  )
}