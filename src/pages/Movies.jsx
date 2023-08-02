import { Loader } from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
import Notiflix from 'notiflix';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearch } from 'services/api';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [queryName, setQueryName] = useState('');
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [noFilms, setNoFilms] = useState(false);

  const searchTitle = searchParams.get('query');

  useEffect(() => {
    const movieTrending = async () => {
      if (!searchTitle) {
        return;
      }
      setLoading(true);
      try {
        const movie = await getSearch(searchTitle);
        setMovies(movie);
        if (movie.length === 0) {
          setNoFilms(true);
        } else {
          setNoFilms(false);
        }
      } catch (error) {
        console.log('error');
      } finally {
        setLoading(false);
      }
    };
    movieTrending();
  }, [searchTitle]);

  const handleChange = event => {
    setQueryName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (queryName.trim() === '') {
      Notiflix.Notify.failure(`Please enter a name`);
      return;
    }
    onSubmit(queryName);
    setQueryName('');
  };

  const onSubmit = name => {
    if (searchTitle === name) {
      Notiflix.Notify.info(
        `Your request "${name}" has already been completed! :-)`
      );
      return;
    }
    setQueryName(name);
    setSearchParams({ query: queryName });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search images and photos"
          value={queryName}
          onChange={handleChange}
        />

        <button type="submit">
          <span>Search</span>
        </button>
      </form>
      {loading && <Loader />}
      {noFilms && <div>Films not found </div>}
      {movies.length > 0 && (
        <main>
          <MovieList movies={movies} />
        </main>
      )}
    </>
  );
};

export default Movies;
