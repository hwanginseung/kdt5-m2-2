import React from 'react'
import heropyLogo from '../assets/heropy.png'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default  function About()  {
  return (
    <div>
      <Header />
      <div className="text-center">
        <div className=" flex justify-center my-10">
          <img
            className=" h-60 p-8 border-8 rounded-full"
            src={heropyLogo}
            alt="HEROPY"
          />
        </div>
        <h1 className="font-bold text-4xl mb-6">HEROPY</h1>
        <ul className="font-bold">
          <li>thesecon@gmail.com</li>
          <li>https://heropy.blog</li>
          <li>+82-10-1234-5678</li>
        </ul>
      </div>
      <Footer />
    </div>
  )
}
