import styled from "styled-components";

export const MDstyle = styled.section`
  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #fdd935;
    background: #000000;
    border-radius: 10px;
    padding: 30px;
    margin-top: 10px;
  }
  img {
    border-radius: 10px;
  }
  .movie-content {
    display: flex;
    flex-direction: column;
    align-content: space-around;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;
