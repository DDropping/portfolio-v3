import styled from "styled-components";

export const Container = styled.div`
  height: 300px;
  background-color: #6a8aba;
  display: flex;
  justify-content: center;
  @media (max-width: 576px) {
    display: block;
    overflow: hidden;
    height: 250px;
  }
`;

export const Title = styled.div`
  margin-top: 30px;
  font-size: 5rem;
  color: #ffffff;
  z-index: 1;
  @media (max-width: 576px) {
    font-size: 4rem;
    text-align: center;
    position: absolute;
    right: 0;
    left: 0;
  }
`;

export const LottieWrapper = styled.div`
  height: 400px;
  width: 400px;
  @media (max-width: 576px) {
    height: 500px;
    width: 500px;
    margin: 0 auto;
    opacity: 0.25;
  }
`;
