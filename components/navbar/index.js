import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div``;

export const Ul = styled.ul`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  padding-left: 0;
  margin: 0;
`;

export const Li = styled.li`
  padding: 0 25px;
  @media (max-width: 576px) {
    padding: 0 15px;
  }
`;

const index = () => {
  return (
    <Container>
      <Ul>
        <motion.div
          initial={{ y: "-30px", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.5 }}
        >
          <Li>About</Li>
        </motion.div>
        <motion.div
          initial={{ y: "-30px", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.6 }}
        >
          <Li>Skills</Li>
        </motion.div>
        <motion.div
          initial={{ y: "-30px", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.7 }}
        >
          <Li>Projects</Li>
        </motion.div>
        <motion.div
          initial={{ y: "-30px", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.8 }}
        >
          <Li>Contact</Li>
        </motion.div>
      </Ul>
    </Container>
  );
};

export default index;
