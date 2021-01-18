import styled from "styled-components";

export const Container = styled.section`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  @media (max-width: 900px) {
    display: block;
  }
`;

export const HideWrapper1 = styled.div`
  @media (max-width: 900px) {
    display: none;
  }
`;

export const HideWrapper2 = styled.div`
  @media (min-width: 901px) {
    display: none;
  }
`;

export const LottieWrapper = styled.div`
  height: 500px;
  width: 500px;
  @media (max-width: 900px) {
    margin: 0 auto;
    max-width: 500px;
    width: 100%;
  }
  transition: all 0.3s;
  :hover {
    height: 550px;
    width: 550px;
    margin-left: -50px;
    margin-top: -50px;
  }
`;

export const Paragraph = styled.div`
  margin-top: 100px;
  max-width: 500px;
  font-size: 1.15rem;
  text-indent: 25px;
  @media (max-width: 900px) {
    max-width: 100%;
  }
`;

export const MyName = styled.span`
  font-size: 2rem;
  color: #396caa;
  font-weight: bold;
`;
