import React from 'react'

function MoviePagecontent({movie}) {
  return (
    <>
        <div className='movie-page-content-container' >
          <div className='poster-container' style={{ backgroundImage: `url(${movie.Poster})`}}>
            <img src={movie.Poster}/>
          </div>
          <h3>{movie.Title}</h3>
          <div className='movie-page-content-info-container'>
            <h5>Plot:</h5>
            <p>{movie.Plot}</p>
            <h5>Genres:</h5>
            <p>{movie.Genre}</p>
          </div>     
        </div>
    </>
  )
}

export default MoviePagecontent