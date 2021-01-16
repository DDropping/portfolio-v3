import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Link } from "react-scroll";

export const Container = styled.div``;

export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  padding-left: 0;
  margin: 0;
`;

export const ItemWrapper = styled.div`
  height: 60px;
  padding-top: 15px;
  :hover > .underline {
    transition: width 0.5s;
    width: 100%;
  }
`;

export const Li = styled.li`
  cursor: pointer;
  padding: 0 25px;
  @media (max-width: 576px) {
    padding: 0 15px;
  }
`;

export const Underline = styled.div`
  margin: 0 auto;
  height: 2px;
  width: 0;
  background-color: #6a8aba;
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
          <Link to="about_section" smooth={true} duration={1000}>
            <ItemWrapper>
              <Li>About</Li>
              <Underline className="underline" />
            </ItemWrapper>
          </Link>
        </motion.div>
        <motion.div
          initial={{ y: "-30px", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.6 }}
        >
          <Link to="skills_section" smooth={true} duration={1000}>
            <ItemWrapper>
              <Li>Skills</Li>
              <Underline className="underline" />
            </ItemWrapper>
          </Link>
        </motion.div>
        <motion.div
          initial={{ y: "-30px", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.7 }}
        >
          <Link to="projects_section" smooth={true} duration={1000}>
            <ItemWrapper>
              <Li>Projects</Li>
              <Underline className="underline" />
            </ItemWrapper>
          </Link>
        </motion.div>
        <motion.div
          initial={{ y: "-30px", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.8 }}
        >
          <Link to="contact_section" smooth={true} duration={1000}>
            <ItemWrapper>
              {" "}
              <Li>Contact</Li>
              <Underline className="underline" />
            </ItemWrapper>
          </Link>
        </motion.div>
      </Ul>
    </Container>
  );
};

export default index;
