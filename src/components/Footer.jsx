import React from 'react'

export default function Footer()  {
  return (
    <footer className="p-20 text-center">
      <a className="text-xl"
        href="/">
        <span className="text-orange-500 ">OMDbAPI</span>.COM
      </a>
      <br />
      <a className="text-orange-500 decoration: underline"
        href="/about">
        (c)2023 HEROPY
      </a>
    </footer>
  )
}
