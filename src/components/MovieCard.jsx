import React from 'react'
import {Link} from 'react-router-dom'

function MovieCard({movie}) {
    return (
        <Link to={`/Moviepage/${encodeURIComponent(movie.imdbID)}`}>
        <div className='movie-card'>
            <div className='Poster'>
                <img src={movie.Poster !== 'N/A'? movie.Poster: '123123'}/>
                <h5>{movie.Title}</h5>
            </div>
            <div className='movie-details'>
            
            </div>
            
        </div>
        </Link>
      )
}

export default MovieCard