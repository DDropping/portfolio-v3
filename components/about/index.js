import React from "react";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import styled from "styled-components";
import animationData from "../lottie/bikeLeft.json";

export const Container = styled.section`
  margin-top: 50px;
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
    <Container id="about_section">
      <HideWrapper1>
        <motion.div
          initial={{ x: "750px", opacity: 0 }}
          animate={{ x: "0", opacity: 1 }}
          transition={{ duration: 1.5, delay: 3 }}
        >
          <LottieWrapper>
            <Lottie options={defaultOptions} />
          </LottieWrapper>
        </motion.div>
      </HideWrapper1>
      <motion.div
        initial={{ x: "750px", opacity: 0 }}
        animate={{ x: "0", opacity: 1 }}
        transition={{ duration: 1.5, delay: 3.5 }}
      >
        <Paragraph>
          <MyName>Hi, I'm David</MyName> A young professional who loves surfing,
          mountain biking, and programming! I’m hardworking, receptive and
          unrelenting when it comes to my work and passions. I’ve spent the last
          few years honing my skills in top web technologies including: React,
          Redux, Node, SQL, MongoDB, Django, and many more. You can find my full
          resume{" "}
          <a
            href="https://drive.google.com/file/d/1y9b5QExVu4WMTVRtjIhcEzeJmQEIWiIL/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "#5692ce" }}
          >
            here
          </a>
          . And while you're at it, feel free to reach out! I’d love to chat!
        </Paragraph>
      </motion.div>
      <HideWrapper2>
        <motion.div
          initial={{ x: "750px", opacity: 0 }}
          animate={{ x: "0", opacity: 1 }}
          transition={{ duration: 1.5, delay: 3 }}
        >
          <LottieWrapper>
            <Lottie options={defaultOptions} />
          </LottieWrapper>
        </motion.div>
      </HideWrapper2>
    </Container>
  );
};

export default index;
