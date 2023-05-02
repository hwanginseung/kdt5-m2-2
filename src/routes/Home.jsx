import React from 'react'
import Search from '../components/Search'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header />

      <main className="pt-10 mx-auto lg:w-[55rem] 2xl:w-[80rem]">
        <h1 className="text-7xl font-bold">
          <span className="text-orange-500 ">OMDb API</span>
          <br />
          THE OPEN
          <br />
          MOVIE DATABASE
        </h1>
        <p className="my-8 text-gray-500">
          The OMDb API is a RESTful web service to obtain movie information,
          all content and images on the site are contributed and maintained by
          our users.
          <br />
          If you find this service useful, please consider making a one-time
          donation or become a patron.
        </p>
        <Search />
      </main>

      <Footer />
    </>
  )
}