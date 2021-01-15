import React from "react";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import styled from "styled-components";
import animationData from "../lottie/test_cycle.json";

export const Container = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-evenly;
`;

export const LottieWrapper = styled.div`
  height: 400px;
  width: 400px;
`;

export const Paragraph = styled.div`
  margin-top: 100px;
  max-width: 500px;
  font-size: 1.15rem;
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
    <Container>
      <motion.div
        initial={{ x: "750px", opacity: 0 }}
        animate={{ x: "0", opacity: 1 }}
        transition={{ duration: 1.5, delay: 3 }}
      >
        <LottieWrapper>
          <Lottie options={defaultOptions} />
        </LottieWrapper>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 3.5 }}
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
    </Container>
  );
};

export default index;
