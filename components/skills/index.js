import React from "react";
import Lottie from "react-lottie";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import animationData from "../lottie/gears.json";
import { Container, Icon, GearLottieWrapper, SectionHeader } from "./style";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0,
      staggerChildren: 0.1,
    },
  },
};
const listItem = {
  hidden: { opacity: 0, y: "-25px" },
  show: {
    opacity: 1,
    y: 0,
  },
};
const container2 = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.1,
    },
  },
};
const listItem2 = {
  hidden: { opacity: 0, y: "-25px" },
  show: {
    opacity: 1,
    y: 0,
  },
};

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const index = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  return (
    <Container id="skills_section">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0 }}
      >
        <GearLottieWrapper>
          <Lottie options={defaultOptions} />
        </GearLottieWrapper>
      </motion.div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0 }}
      >
        <SectionHeader>My Favorite Technologies Are</SectionHeader>
      </motion.div>
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <motion.div variants={listItem}>
          <Icon src="/icons/icon_js.png" />
        </motion.div>
        <motion.div variants={listItem}>
          <Icon src="/icons/icon_python.webp" />
        </motion.div>
        <motion.div variants={listItem}>
          <Icon src="/icons/icon_react.png" />
        </motion.div>
        <motion.div variants={listItem}>
          <Icon src="/icons/icon_redux.png" />
        </motion.div>
        <motion.div variants={listItem}>
          <Icon src="/icons/icon_express.png" />
        </motion.div>
        <motion.div variants={listItem}>
          <Icon src="/icons/icon_node.png" />
        </motion.div>
        <motion.div variants={listItem}>
          <Icon src="/icons/icon_mongo.png" />
        </motion.div>
        <motion.div variants={listItem}>
          <Icon src="/icons/icon_html.png" />
        </motion.div>
        <motion.div variants={listItem}>
          <Icon src="/icons/icon_css.png" />
        </motion.div>
        <motion.div variants={listItem}>
          <Icon src="/icons/icon_sass.webp" />
        </motion.div>
        <motion.div variants={listItem}>
          <Icon src="/icons/icon_git.png" />
        </motion.div>
        <motion.div variants={listItem}>
          <Icon src="/icons/icon_vscode.png" />
        </motion.div>
      </motion.div>
      <br />

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <SectionHeader>But I Also Love Using</SectionHeader>
      </motion.div>
      <motion.div
        ref={ref}
        variants={container2}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <motion.div variants={listItem2}>
          <Icon src="/icons/icon_java.webp" />
        </motion.div>
        <motion.div variants={listItem2}>
          <Icon src="/icons/icon_c++.png" />
        </motion.div>
        <motion.div variants={listItem2}>
          <Icon src="/icons/icon_swift.webp" />
        </motion.div>
        <motion.div variants={listItem2}>
          <Icon src="/icons/icon_mysql.webp" />
        </motion.div>
        <motion.div variants={listItem2}>
          <Icon src="/icons/icon_postgre.png" />
        </motion.div>
        <motion.div variants={listItem2}>
          <Icon src="/icons/icon_vue.png" />
        </motion.div>
        <motion.div variants={listItem2}>
          <Icon src="/icons/icon_django.webp" />
        </motion.div>
        <motion.div variants={listItem2}>
          <Icon src="/icons/icon_aws.png" />
        </motion.div>
        <motion.div variants={listItem2}>
          <Icon src="/icons/icon_digitalocean.png" />
        </motion.div>
        <motion.div variants={listItem2}>
          <Icon src="/icons/icon_jest.png" />
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default index;
