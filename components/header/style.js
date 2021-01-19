import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  background-color: #6a8aba;
  display: flex;
  justify-content: center;
  @media (max-width: 900px) {
    display: block;
    overflow: hidden;
  }
`;

export const Title = styled.div`
  margin-top: 30px;
  font-size: 5rem;
  color: #ffffff;
  z-index: 1;
  cursor: default;
  @media (max-width: 900px) {
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
  margin: 0 30px;
  transition: all 0.3s;
  @media (max-width: 900px) {
    height: 500px;
    width: 500px;
    margin-left: auto;
    opacity: 0.25;
  }
  :hover {
    height: 430px;
    width: 430px;
    margin: 0;
  }
`;

export const LoadingLottieWrapper = styled.div`
  position: absolute;
  z-index: 101;
  left: 0;
  right: 0;
  top: 35%;
`;
