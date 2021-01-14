import React from "react";
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
      <LottieWrapper>
        <Lottie options={defaultOptions} />
      </LottieWrapper>
      <Paragraph>
        Hi, I'm David, a young professional who loves surfing, mountain biking,
        and programming! I’m hardworking, receptive and unrelenting when it
        comes to my work and passions. I’ve spent the last few years honing my
        skills in top web technologies including: React, Redux, Node, SQL,
        MongoDB, Django, and many more. You can find my full resume{" "}
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
    </Container>
  );
};

export default index;
