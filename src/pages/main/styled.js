import styled from "styled-components";

export const Card = styled.div`
  background: black;
  color: #fdd935;
  border-radius: 10px;
  margin-bottom: 15px;
  padding: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  @media (min-width: 1000px) and (max-width: 2160px) {
    width: calc(25% - 10px);
    height: 550px;
    > img {
      height: 300px;
    }
    p {
      max-height: 150px;
    }
  }
  @media (min-width: 700px) and (max-width: 999px) {
    width: calc(33.3% - 10px);
    height: 500px;
    > img {
      height: 250px;
    }
    p {
      max-height: 120px;
    }
  }
  @media (min-width: 450px) and (max-width: 699px) {
    width: calc(50% - 10px);
    height: 450px;
    > img {
      height: 225px;
    }
    p {
      max-height: 100px;
    }
  }
  @media screen and (max-width: 550px) {
    width: 100%;
    height: 400px;
    > img {
      height: 200px;
    }
    p {
      max-height: 100px;
    }
  }
  &:last-child {
    margin-bottom: 0;
  }
  > img {
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
    margin: 10px 0;
  }
  h3 {
    max-height: 12px;
    text-align: center;
    margin: 0;
  }
  p {
    margin: 0 0 5px 0;
    overflow: hidden;
    text-align: center;
  }
  a {
    color: #fdd935;
  }
`;
export const IconBlock = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 25px;
  top: 45px;
  background: #fff;
  border-radius: 50%;
  cursor: pointer;
  > svg {
    width: 24px;
    height: 24px;
    fill: ${({ active }) => (active ? "gold" : "black")};
  }
`;
export const Flex = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const EmptyCard = styled.div`
  width: calc(25% - 10px);
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
`;
