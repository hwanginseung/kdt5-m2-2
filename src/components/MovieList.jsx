import React from 'react'

export default function MovieList(props) {
  const { movies, inputText } = props
  return (
    <>
      {movies.length ? (
        <ul className="flex flex-wrap bg-gray-200 justify-center ">
          {movies.map(movie => (
            <li key={movie.imdbID}>
              <a
                className="overflow-hidden relative"
                href={`/movies/${movie.imdbID}`}>
                <img
                  className="w-50 h-72 mr-4 mt-4"
                  src={movie.Poster}
                  alt={movie.Title}
                />
                <div className="backdrop-blur-md bg-white/30 absolute w-45 h-15 text-center p-3.5 inset-x-0 bottom-0 z-3">
                  <p className="text-yellow-500 font-semibold leading-tight">
                    {movie.Year}
                  </p>
                  <p className="text-md text-white leading-tight">
                    {movie.Title}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex justify-center items-center mt-4 bg-gray-200 w-full h-[12rem] text-gray-300 font-semibold text-2xl">
          {!inputText.trim()
            ? 'Search for the movie title!'
            : 'Request failed with status code 400'}
        </div>
      )}
    </>
  )
}
