import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieList = ({ movies }) => {
  const location = useLocation();
  const ImageUrl = '//image.tmdb.org/t/p/w500';
  return (
    <ul>
      {movies.map(({ id, poster_path, title, name }) => (
        <li key={id}>
          <NavLink to={`/movie/${id}`} state={{ from: location }}>
            <img src={ImageUrl + poster_path} alt={title} width={280} />
            <h3>{title ?? name}</h3>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};
