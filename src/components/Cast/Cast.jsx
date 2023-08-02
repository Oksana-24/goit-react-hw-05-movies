import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCredits } from 'services/api';

const Cast = () => {
  const [casts, setCasts] = useState('');
  const { id } = useParams();
  const ImageUrl = '//image.tmdb.org/t/p/w500';

  useEffect(() => {
    const castSearch = async () => {
      if (id) {
        try {
          const casts = await getCredits(id);
          //   console.log(casts);
          setCasts(casts);
        } catch (error) {
          console.log('error');
        } finally {
        }
      }
      return;
    };
    castSearch();
  }, [id]);
  return (
    <section>
      {casts.length > 0 && (
        <ul>
          {casts.map(({ id, character, name, profile_path }) => (
            <li key={id}>
              {profile_path ? (
                <img
                  src={ImageUrl + profile_path}
                  alt={name}
                  width={280}
                  height={420}
                />
              ) : (
                <img
                  src="https://via.placeholder.com/200x100"
                  alt="Not found"
                  width={280}
                  height={420}
                />
              )}
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Cast;
