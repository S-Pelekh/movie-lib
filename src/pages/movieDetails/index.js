import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";

import Api from "../../helpers/api";
import { setMoviesDetails } from "../../store/actions";
import { Loader } from "../../components/loader/index";
import { MDstyle } from "./styled";

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
  console.log(moviesDetails[id]);
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
      <MDstyle>
        <Link to={`/main/${pageFrom || "1"}`}> Back</Link>
        <div>
          <img src={Api.poster_url + poster_path} alt="Poster" />
          <div className="movie-content">
            <h2>{title}</h2>
            <p>
              <i>{tagline}</i>
            </p>
            <p>{moment(release_date).format("DD/MM/YYYY")}</p>
            <p>{overview}</p>
            <p>{renderGenres(genres)}</p>{" "}
            <a target="_blank" href={homepage}>
              Home page
            </a>
          </div>
        </div>
      </MDstyle>
    );
  } else {
    return <Loader />;
  }
};
