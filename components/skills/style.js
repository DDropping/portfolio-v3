import styled from "styled-components";

export const Container = styled.section`
  padding: 40px;
  border-radius: 100px;
  margin-top: 50px;
`;

export const Icon = styled.img`
  margin: 0 10px;
  height: 50px;
  margin-bottom: 30px;
  transition: all 0.3s;
  :hover {
    height: 80px;
    margin: 0;
  }
`;

export const GearLottieWrapper = styled.div`
  position: absolute;
  z-index: -1;
  opacity: 0.05;
  right: 0;
  @media (max-width: 1500px) {
    display: none;
  }
`;

export const SectionHeader = styled.div`
  font-size: 1.75rem;
  color: #396caa;
  font-weight: bold;
  text-align: center;
`;
