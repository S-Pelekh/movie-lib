// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import moment from "moment";

// import Api from "../../helpers/api";
// import { toggleFavorites } from "../../store/actions";
// import { Card, IconBlock } from "../../pages/main/styled";
// import { ReactComponent as StarIcon } from "../../assets/star.svg";

// export const RenderMovies = (data) => {
//   const favorites = useSelector((store) => store.favorites);
//   const dispatch = useDispatch();

//   return data.map(({ title, id, overview, release_date, poster_path }) => (
//     <Card key={`movie-${id}`}>
//       <h3>{title}</h3>
//       <img src={Api.poster_url + poster_path} />
//       <IconBlock
//         onClick={() => dispatch(toggleFavorites(id))}
//         active={favorites.includes(id)}
//       >
//         <StarIcon />
//       </IconBlock>
//       <p>{moment(release_date).format("DD/MM/YYYY")}</p>
//       <p>{overview}</p>
//       <Link to={`/details/${id}`}>Details</Link>
//     </Card>
//   ));
// };
