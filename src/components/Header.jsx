import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()

  return (
    <header className="display: flex items-center h-20 relative px-10">
      <a className='text-2xl font-bold mr-20' href="/">
      <span className="text-orange-500">OMDBAPI</span>.COM
      </a>
      <nav className="text-2xl">
        <a className={`mr-5 ${
              location.pathname === "/"
                ? "bg-orange-500 text-white"
                : "hover:text-orange-500 "
            } rounded-lg py-2 px-4`} 
            href="/">Search</a>
        <a className={`mr-5 ${
              location.pathname === "/movies"
                ? "bg-orange-500 text-white"
                : "hover:text-orange-500 "
            } rounded-lg py-2 px-4`} 
            href="/movies">Movie</a>
        <a className={`mr-5 ${
              location.pathname === "/About"
                ? "bg-orange-500 text-white"
                : "hover:text-orange-500 "
            } rounded-lg py-2 px-4`} 
            href="/About">About</a>
      </nav>
    </header>
  )
}