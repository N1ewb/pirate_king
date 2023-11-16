import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MoviePagecontent from '../components/MoviePageContent';
const API_URL = 'http://www.omdbapi.com?apikey=c389f36d';

function Moviepage() {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);

  const fetchMovieDetails = async (id) => {
    const response = await fetch(`${API_URL}&i=${id}`);
    const data = await response.json();
    setMovie(data);
  };

  useEffect(() => {
    fetchMovieDetails(imdbID);
  }, [imdbID]);

  return (
    <>
      <div className='Movie-page'>
        <div className='movie-card-container'>
          {movie ? (
            <div className='card-container'>
              <MoviePagecontent key={movie.imdbID} movie={movie} />
            </div>
          ) : (
            <div className='empty'>
              <h6>No movie found</h6>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Moviepage;
