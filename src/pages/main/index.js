import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";

import Api from "../../helpers/api";
import { setPage, toggleFavorites } from "../../store/actions";
import { Flex, Card, IconBlock } from "./styled";
import { ReactComponent as StarIcon } from "../../assets/star.svg";

export const MainPage = ({
  match: {
    params: { page },
  },
}) => {
  const movies = useSelector((store) => store.movies);
  const totalPages = useSelector((store) => store.totalPages);
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!movies[page]) {
      Api.getNowPlaying(page).then((data) => {
        dispatch(setPage(page, data.results));
      });
    }
  }, [page]);

  const renderMovies = () => {
    return movies[page].map(
      ({ title, id, overview, genre_ids, release_date, poster_path }) => (
        <Card key={`movie-${id}`}>
          <h3>{title}</h3>
          <img src={Api.poster_url + poster_path} />
          <IconBlock
            onClick={() => dispatch(toggleFavorites(id))}
            active={favorites.includes(id)}
          >
            <StarIcon />
          </IconBlock>

          <p>{moment(release_date).format("DD/MM/YYYY")}</p>
          <p>{overview}</p>
          <Link to={`/details/${id}/${page}`}>Details</Link>
        </Card>
      )
    );
  };

  return (
    <section>
      Main page
      <Flex>{movies[page] ? renderMovies() : <div>Loader...</div>}</Flex>
      <div>
        {page !== "1" ? <Link to={`/main/${+page - 1}`}>Prev</Link> : null}
        <span>
          {page}/{totalPages}
        </span>

        {+page < totalPages ? (
          <Link to={`/main/${+page + 1}`}>Next</Link>
        ) : null}
      </div>
    </section>
  );
};
