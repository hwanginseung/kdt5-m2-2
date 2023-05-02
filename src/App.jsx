import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import About from './routes/About'
import MovieDetail from './routes/MovieDetail'

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/About"
          element={<About />}
        />
        <Route
          path="/movies/:movieId?"
          element={<MovieDetail />}
        />
      </Routes>
    </BrowserRouter>
    </>
  )
}
