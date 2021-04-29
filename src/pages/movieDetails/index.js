import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";

import Api from "../../helpers/api";
import { setMoviesDetails } from "../../store/actions";

export const MovieDetails = ({
  match: {
    params: { id, pageFrom },
  },
}) => {
  const moviesDetails = useSelector((store) => store.moviesDetails);
  const genresList = useSelector((store) => store.genres);
  const dispatch = useDispatch();
  console.log(moviesDetails);
  useEffect(() => {
    if (!moviesDetails[id]) {
      Api.getDetails(id).then((data) => dispatch(setMoviesDetails(id, data)));
    }
  }, [id]);

  const renderGenres = (genres) => {
    let str = `Genres: `;
    genres.forEach(({ name }, i) => {
      str += `${name}${i < genres.length - 1 ? ", " : "."}`;
    });
    return str;
  };

  if (moviesDetails[id]) {
    const {
      title,
      overview,
      genres,
      release_date,
      poster_path,
      homepage,
      tagline,
    } = moviesDetails[id];
    return (
      <section>
        <Link to={`/main/${pageFrom || "1"}`}>Back</Link>
        <div>
          <h2>{title}</h2>
          <p>{tagline}</p>
          <p>{moment(release_date).format("DD/MM/YYYY")}</p>

          <img src={Api.poster_url + poster_path} />
          <p>{overview}</p>
          <a target="_blank" href={homepage}>
            Home page
          </a>
          <p>{renderGenres(genres)}</p>
        </div>
      </section>
    );
  } else {
    return <div>Loader...</div>;
  }
};
