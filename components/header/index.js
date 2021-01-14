import React from "react";
import Lottie from "react-lottie";
import { motion } from "framer-motion";

import animationData from "../lottie/Isometric.json";
import { Container, Title, LottieWrapper } from "./style";

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
      <Title>
        <motion.div
          initial={{ y: "-40%", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          DAVID
        </motion.div>
        <motion.div
          initial={{ y: "-40%", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          DROPPING
        </motion.div>
      </Title>
      <LottieWrapper>
        <Lottie options={defaultOptions} />
      </LottieWrapper>
    </Container>
  );
};

export default index;
