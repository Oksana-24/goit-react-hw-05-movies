import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Loader } from 'components/Loader/Loader';
import { getMovie } from 'services/api';
import MovieCard from 'components/MovieCard/MovieCard';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const movieInfo = async () => {
      try {
        const movieInfo = await getMovie(id);
        setMovie(movieInfo);
      } catch (error) {
        console.log('error');
      } finally {
        setLoading(false);
      }
    };
    movieInfo();
  }, [id, setMovie]);

  return (
    <>
      {loading && <Loader />}
      {movie && <MovieCard movie={movie} />}
    </>
  );
};

export default MovieDetails;
