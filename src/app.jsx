import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

export default function App() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}