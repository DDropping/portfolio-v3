import React from "react";
import Lottie from "react-lottie";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import animationDataGit from "../lottie/github.json";
import animationDataIn from "../lottie/linkedin.json";
import animationDataEmail from "../lottie/email.json";
import animationDataExplosion from "../lottie/explosion.json";
import {
  Container,
  ContentContainer,
  LottieWrapperGit,
  LottieWrapperIn,
  LottieWrapperEmail,
  LottieWrapperExplosion,
  Wrapper,
  Underline,
  ItemWrapper,
  Quote,
  Text,
} from "./style";

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
