import React, { useEffect } from "react";
import Lottie from "react-lottie";
import { motion } from "framer-motion";

import animationData from "../lottie/Isometric.json";
import animationData2 from "../lottie/waterDrop.json";
import { Container, Title, LottieWrapper, LoadingLottieWrapper } from "./style";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const defaultOptions2 = {
  loop: true,
  autoplay: true,
  animationData: animationData2,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const index = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      document.body.style.overflow = "unset";
    }, 2000);
  });

  return (
    <motion.div
      initial={{ height: "100vh", y: "-60px" }}
      animate={{ height: "300px", y: "0" }}
      transition={{ duration: 1.2, delay: 2, type: "spring" }}
    >
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 2, type: "spring" }}
      >
        <LoadingLottieWrapper>
          <Lottie options={defaultOptions2} height={200} width={200} />
        </LoadingLottieWrapper>
      </motion.div>
      <Container>
        <Title id="firstName">
          <motion.div
            initial={{ y: "-40%", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.75 }}
          >
            DAVID
          </motion.div>
          <motion.div
            initial={{ y: "-40%", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.5 }}
          >
            DROPPING
          </motion.div>
        </Title>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.25 }}
        >
          <LottieWrapper id="isometric-lottie">
            <Lottie options={defaultOptions} />
          </LottieWrapper>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default index;
