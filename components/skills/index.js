import React from "react";
import Lottie from "react-lottie";
import Image from "next/image";

import animationData from "../lottie/gears.json";
import { iconNames } from "../../constants/skills";

import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.section`
  padding: 100px 0;
  border-radius: 100px;
`;
export const IconContianer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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

const SectionHeader = styled.div`
  font-size: 1.75rem;
  color: #396caa;
  font-weight: bold;
  text-align: center;
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 5,
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
      delayChildren: 6,
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
  return (
    <Container id="skills_section">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 4.5 }}
      >
        <GearLottieWrapper>
          <Lottie options={defaultOptions} />
        </GearLottieWrapper>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 4.5 }}
      >
        <SectionHeader>My Favorite Technologies Are</SectionHeader>
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 5.5 }}
      >
        <SectionHeader>But I Also Love Using</SectionHeader>
      </motion.div>
      <motion.div
        variants={container2}
        initial="hidden"
        animate="show"
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
