import { React, useState } from 'react'
import SearchInput from './SearchInput'
import MovieFilter from './MovieFilter'
import MovieList from './MovieList'
import { fetchMovies } from '../core/movie'

export default function Search() {
  const [inputText, setInputText] = useState('')
  const [typeFilter, setTypeFilter] = useState('')
  const [countFilter, setCountFilter] = useState(10)
  const [yearFilter, setYearFilter] = useState('')
  const [movies, setMovies] = useState([])

  const pressEnterKey = async () => {
    if (inputText.trim() === '') return
    const movieList = await fetchMovies(
      inputText,
      typeFilter,
      countFilter,
      yearFilter
    )
    setMovies(movieList)
  }

  return (
    <>
      <div className="lg:flex justify-between ">
        <SearchInput
          inputText={inputText}
          setInputText={setInputText}
          pressEnterKey={pressEnterKey}
        />

        <MovieFilter
          typeFilter={typeFilter}
          setTypeFilter={setTypeFilter}
          countFilter={countFilter}
          setCountFilter={setCountFilter}
          yearFilter={yearFilter}
          setYearFilter={setYearFilter}
        />

        <button
          className="bg-orange-500 text-white font-bold rounded h-12 lg:w-32  xl:w-32 border my-1"
          onClick={pressEnterKey}>
          Apply
        </button>
      </div>
      <div>
        <MovieList
          movies={movies}
          inputText={inputText}
        />
      </div>
    </>
  )
}
