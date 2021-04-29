import styled from "styled-components";

export const Card = styled.div`
  width: calc(25% - 10px);
  height: 600px;
  background: black;
  color: #fdd935;
  border-radius: 10px;
  margin-bottom: 15px;
  padding: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  &:last-child {
    margin-bottom: 0;
  }
  > img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
  }
`;
export const IconBlock = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 30px;
  top: 30px;
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
