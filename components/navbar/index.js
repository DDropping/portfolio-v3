import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

import { Container, ItemWrapper, Li, Ul, Underline } from "./style";

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
