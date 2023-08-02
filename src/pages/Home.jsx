import MovieList from 'components/MovieList/MovieList';
import React, { useEffect, useState } from 'react';
import { getTrending } from 'services/api';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const movieTrending = async () => {
      try {
        const movie = await getTrending();
        setMovies(movie);
      } catch (error) {
        console.log('error');
      } finally {
      }
    };
    movieTrending();
  }, []);

  return (
    <main>
      <MovieList movies={movies} />
    </main>
  );
};

export default Home;
