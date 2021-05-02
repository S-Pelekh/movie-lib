import React from "react";
import { Link } from "react-router-dom";

import { PaginationStyle } from "./styled";

export const Pagination = (page, totalPages) => {
  return (
    <PaginationStyle>
      <section>
        {page !== "1" ? (
          <Link to={`/main/${+page - 1}`}>
            <div className="move-page"> Prev </div>
          </Link>
        ) : null}
        {page !== "1" && page !== "2" ? (
          <Link to={`/main/page1`}>
            <div> 1 </div>
          </Link>
        ) : null}

        {+page !== 1 && +page !== 2 && +page !== 3 ? <div> ~ </div> : null}
        {+page - 1 !== 0 ? (
          <Link to={`/main/${+page - 1}`}>
            <div> {+page - 1} </div>
          </Link>
        ) : null}

        <div className="active-page">{page}</div>
        {+page < +totalPages ? (
          <Link to={`/main/${+page + 1}`}>
            <div> {+page + 1} </div>
          </Link>
        ) : null}
        {+page !== +totalPages &&
        +page !== +totalPages - 1 &&
        +page !== +totalPages - 2 ? (
          <div> ~ </div>
        ) : null}
        {+page !== +totalPages && +page !== +totalPages - 1 ? (
          <Link to={`/main/${totalPages}`}>
            <div> {totalPages} </div>
          </Link>
        ) : null}
        {+page < totalPages ? (
          <Link to={`/main/${+page + 1}`}>
            <div className="move-page"> Next </div>
          </Link>
        ) : null}
      </section>
    </PaginationStyle>
  );
};
