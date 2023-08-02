import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { Suspense, useRef } from 'react';
import { Loader } from 'components/Loader/Loader';
import PropTypes from 'prop-types';

const MovieCard = ({ movie }) => {
  const { poster_path, title, vote_average, overview, genres } = movie;
  const ImageUrl = '//image.tmdb.org/t/p/w500';
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movie');
  return (
    <div>
      <Link to={backLinkLocationRef.current}>
        <button>Go back</button>
      </Link>
      <section>
        <img src={ImageUrl + poster_path} alt={title} width={280} />
        <div>
          <h2>{title}</h2>
          <p>User Score: {vote_average}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres.map(ganre => ganre.name).join(', ')}</p>
        </div>
      </section>
      <section>
        <h3>Additional information</h3>
        <ul>
          <li>
            <NavLink to="cast">
              <button>Cast</button>
            </NavLink>
          </li>

          <li>
            <NavLink to="review">
              <button>Rreviews</button>
            </NavLink>
          </li>
        </ul>
      </section>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};
