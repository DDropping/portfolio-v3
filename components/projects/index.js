import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

import ProjectLeaningRight from "./projectLeaningRight";
import ProjectLeaningLeft from "./projectLeaningLeft";
import projects from "../../constants/projects";

const Container = styled.section`
  margin-top: 100px;
`;

const SectionHeader = styled.div`
  font-size: 1.75rem;
  color: #396caa;
  font-weight: bold;
  text-align: center;
`;

const index = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  return (
    <Container id="projects_section">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeader>Some Recent Projects</SectionHeader>
      </motion.div>
      {projects.map((project, index) => {
        return index % 2 === 0 ? (
          <ProjectLeaningRight project={project} key={index} />
        ) : (
          <ProjectLeaningLeft project={project} key={index} />
        );
      })}
    </Container>
  );
};

export default index;
