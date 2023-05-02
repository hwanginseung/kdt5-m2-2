import React from 'react'

export default function SearchInput(props) {
  const { inputText, setInputText, pressEnterKey } = props

  return (
    <>
      <input
        className="rounded h-10 lg:w-[25rem] lg:h-12 lg:mr-2 xl:w-2/3  border-2 my-1 "
        placeholder="Search for Movies, series & more"
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && pressEnterKey()}
      />
    </>
  )
}
