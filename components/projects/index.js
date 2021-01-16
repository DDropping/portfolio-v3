import React from "react";
import { motion } from "framer-motion";
import ProjectLeaningRight from "./projectLeaningRight";
import ProjectLeaningLeft from "./projectLeaningLeft";
import projects from "../../constants/projects";
import styled from "styled-components";

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
  return (
    <Container id="projects_section">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 7 }}
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
