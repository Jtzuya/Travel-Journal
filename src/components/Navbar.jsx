import React from 'react'
import logo from '../assets/images/logo.svg'

const Navbar = () => {
  return (
    <header>
      <div className="flex flex-col items-start justify-center sm:flex-row md:items-center gap-2 shadow-lg py-6 px-8 bg-gradient-to-r from-palegreen to-eco rounded-t-md">
          <img src={ logo } alt="Travel Journal Official Site" className="" />
          <h1 className="font-logo font-bold text-react-blue-dark text-xl tracking-wide uppercase italic">Let's Travel</h1>
      </div>
    </header>
  )
}

export default Navbar