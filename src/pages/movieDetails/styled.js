import styled from "styled-components";

export const MDstyle = styled.section`
  @media (min-width: 700px) and (max-width: 2160px) {
    > div {
      flex-direction: row;
    }
  }
  @media (min-width: 450px) and (max-width: 699px) {
    > div {
      flex-direction: column;
    }
    img {
      height: 500px;
    }
  }
  @media screen and (max-width: 449px) {
    > div {
      flex-direction: column;
    }
    img {
      height: 300px;
    }
  }

  > div {
    display: flex;
    justify-content: space-between;
    color: #fdd935;
    background: #000000;
    border-radius: 10px;
    padding: 30px;
    margin-top: 10px;
  }
  img {
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
  .movie-content {
    display: flex;
    flex-direction: column;
    align-content: space-around;
    text-align: center;
  }

  a {
    color: #fdd935;
  }
`;
