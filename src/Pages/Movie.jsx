
import {React, useEffect, useState} from 'react'
import MovieCard from '../components/MovieCard'
import SearchIcon from '../search.svg'
const API_URL = 'http://www.omdbapi.com?apikey=c389f36d'
function Movie() {
    const [ movies, setMovies ] = useState();
    const [ search, setSearch ] = useState('');

    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`) 
        const data = await response.json()
        setMovies(data.Search)
    }
     useEffect(() => {
        searchMovies("Maquia")
     },[search])

  return (
    <div className='Movies-container'>
        <div className='App'>
            <h1>Pirate King</h1>
            <div className='search'>
                <input onChange={(e)=> setSearch(e.target.value)} value={search} placeholder='Search for Movies'/>
                
                <img  onClick={() => searchMovies(search)}  className='search-img' src={SearchIcon} alt="Search" height="21px"/>
            </div>
            <div className='movie-card-container'>
                {
                    movies?.length > 0?(
                        <div className='container'>
                            {movies.map((movie) => (
                                <MovieCard movie={movie} />
                            ))}
                        </div>
                    ) : (
                        <div className='empty'>
                            <h6>No movies found</h6>
                        </div>
                    )
                }
            </div>
        </div>
        </div>
  )
}

export default Movie