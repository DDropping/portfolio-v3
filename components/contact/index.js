import React from "react";
import Lottie from "react-lottie";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import animationDataGit from "../lottie/github.json";
import animationDataIn from "../lottie/linkedin.json";
import animationDataEmail from "../lottie/email.json";
import animationDataExplosion from "../lottie/explosion.json";

import styled from "styled-components";

export const Container = styled.section`
  background-color: #6a8aba;
  padding: 25px;
  margin-top: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  overflow: hidden;
`;

export const ContentContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

export const LottieWrapperGit = styled.div`
  height: 50px;
  width: 50px;
  margin-left: 15px;
  margin-right: 10px;
`;
export const LottieWrapperIn = styled.div`
  height: 65px;
  width: 65px;
  margin-left: 5px;
  margin-top: 5px;
  margin-right: 7px;
`;
export const LottieWrapperEmail = styled.div`
  height: 70px;
  width: 70px;
`;
export const LottieWrapperExplosion = styled.div`
  position: absolute;
  top: -200px;
  left: -100px;
  height: 500px;
  width: 500px;
  opacity: 0.2;
  z-index: -1;
  display: none;
`;

export const Wrapper = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Text = styled.div`
  font-size: 30px;
  color: #d3ebff;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const Quote = styled.div`
  text-align: center;
  font-size: 30px;
  color: #859fc5;
  max-width: 300px;
  z-index: 2;
  @media (max-width: 800px) {
    display: none;
  }
  transition: all 0.3s;
  cursor: default;
  :hover {
    color: #d3ebff;
  }
  :hover > .explosion {
    display: block;
  }
`;

const defaultOptionsGit = {
  loop: true,
  autoplay: true,
  animationData: animationDataGit,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const defaultOptionsIn = {
  loop: true,
  autoplay: true,
  animationData: animationDataIn,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const defaultOptionsEmail = {
  loop: true,
  autoplay: true,
  animationData: animationDataEmail,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const defaultOptionsExplosion = {
  loop: true,
  autoplay: true,
  animationData: animationDataExplosion,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export const ItemWrapper = styled.div`
  :hover > .underline {
    transition: width 0.5s;
    width: 100%;
  }
`;

export const Underline = styled.div`
  margin: 0 auto;
  height: 2px;
  width: 0;
  background-color: #d3ebff;
`;

const variants = {
  imageHidden: {
    x: "-100px",
    opacity: 0,
    transition: { duration: 1 },
  },
  imageShow: {
    x: "0",
    opacity: 1,
    transition: { duration: 1 },
  },
  contactHidden: {
    x: "100px",
    opacity: 0,
    transition: { duration: 1 },
  },
  contactShow: {
    x: "0",
    opacity: 1,
    transition: { duration: 1 },
  },
};

const index = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });
  return (
    <Container id="contact_section">
      <motion.div
        ref={ref}
        variants={variants}
        initial={"imageHidden"}
        animate={inView ? "imageShow" : "imageHidden"}
      >
        <Quote>
          "Be the reason someone smiles today"
          <LottieWrapperExplosion className="explosion">
            <Lottie options={defaultOptionsExplosion} />
          </LottieWrapperExplosion>
        </Quote>
      </motion.div>
      <motion.div
        ref={ref}
        variants={variants}
        initial={"contactHidden"}
        animate={inView ? "contactShow" : "contactHidden"}
      >
        <ContentContainer>
          <Wrapper
            href="https://github.com/ddropping"
            target="_blank"
            rel="noreferrer"
          >
            <LottieWrapperGit>
              <Lottie options={defaultOptionsGit} />
            </LottieWrapperGit>
            <ItemWrapper>
              <Text>/ddropping</Text>
              <Underline className="underline" />
            </ItemWrapper>
          </Wrapper>

          <Wrapper
            href="https://www.linkedin.com/in/ddropping/"
            target="_blank"
            rel="noreferrer"
          >
            <LottieWrapperIn>
              <Lottie options={defaultOptionsIn} />
            </LottieWrapperIn>
            <ItemWrapper>
              <Text>/ddropping</Text>
              <Underline className="underline" />
            </ItemWrapper>
          </Wrapper>

          <Wrapper
            href="mailto:ddropping@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <LottieWrapperEmail>
              <Lottie options={defaultOptionsEmail} />
            </LottieWrapperEmail>
            <ItemWrapper>
              <Text>ddropping@gmail.com</Text>
              <Underline className="underline" />
            </ItemWrapper>
          </Wrapper>
        </ContentContainer>
      </motion.div>
    </Container>
  );
};

export default index;
