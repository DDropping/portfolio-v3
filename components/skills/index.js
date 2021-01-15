import React from "react";
import Lottie from "react-lottie";
import Image from "next/image";

import animationData from "../lottie/test_skills.json";
import { iconNames } from "../../constants/skills";

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const LottieWrapper = styled.div`
  height: 400px;
  width: 400px;
`;

export const SkillsContainer = styled.div`
  margin-top: 100px;
  max-width: 500px;
  font-size: 1.15rem;
`;

export const Title = styled.div``;

export const SkillList = styled.div`
  margin-left: 25px;
  margin-bottom: 20px;
`;

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const index = () => {
  return (
    <Container>
      <SkillsContainer>
        <Title>Languages</Title>
        <SkillList>Javascript, Python, Java, C++, Swift</SkillList>
        <Title>Databases</Title>
        <SkillList>MongoDB, MySQL, PostgreSQL</SkillList>
        <Title>Web</Title>
        <SkillList>
          Node.js, React, Redux, Vue, Express, Django, HTML, Sass/Scss
        </SkillList>
        <Title>Tools</Title>
        <SkillList>
          Git, AWS, Digital Ocean, Firebase, Vs Code, Jest, Enzyme
        </SkillList>
      </SkillsContainer>
      <LottieWrapper>
        <Lottie options={defaultOptions} />
      </LottieWrapper>
    </Container>
  );
};

export default index;
