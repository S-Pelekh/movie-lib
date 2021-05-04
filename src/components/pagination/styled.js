import styled from "styled-components";

export const PaginationStyle = styled.section`
  margin: 0 auto;
  width: fit-content;
  section {
    height: 50px;
    display: inline-block;
    text-align: center;
  }

  @media (min-width: 700px) and (max-width: 2160px) {
    div {
      width: 50px;
      height: 50px;
      color: black;
      float: left;
      text-align: center;
      margin: 0 5px;
      font-size: 18px;
      padding: 15px;
    }
    .move-page {
      width: 75px;
    }
  }
  @media screen and (max-width: 699px) {
    div {
      width: 25px;
      height: 25px;
      color: black;
      float: left;
      text-align: center;
      margin: 0;
      font-size: 12px;
      padding: 5px;
    }
    .move-page {
      width: 50px;
    }
  }

  .active-page {
    background: black;
    color: #fdd935;
  }
  div:hover {
    background: grey;
    opacity: 0.5;
  }
`;
