import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import {
  Container,
  HoverEffect,
  Underline,
  ImageWrapper,
  Shadow1,
  Shadow2,
  ItemWrapper,
  ProjectLink,
  Title,
  TextContainer,
  Description,
} from "./style";

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
  textHidden: {
    opacity: 0,
    transition: { duration: 1 },
  },
  textShow: {
    opacity: 1,
    transition: { duration: 1 },
  },
};

const index = ({ project }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  return (
    <Container>
      <HoverEffect>
        <motion.div
          ref={ref}
          variants={variants}
          initial={"imageHidden"}
          animate={inView ? "imageShow" : "imageHidden"}
        >
          <Shadow2 className="shadow2" color={project.secondaryColor} />
          <Shadow1 className="shadow1" color={project.primaryColor} />
          <ImageWrapper className="mainImage">
            <a
              href={
                project.website === "n/a" ? project.github : project.website
              }
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={project.image}
                alt="Project Image"
                layout="responsive"
                width={1280}
                height={750}
              />
            </a>
          </ImageWrapper>
        </motion.div>
        <motion.div
          ref={ref}
          variants={variants}
          initial={"textHidden"}
          animate={inView ? "textShow" : "textHidden"}
        >
          <TextContainer>
            <Title>
              {project.title}
              <ProjectLink
                href={project.website}
                target="_blank"
                rel="noreferrer"
              >
                <ItemWrapper>
                  Website
                  <Underline className="underline" />
                </ItemWrapper>
              </ProjectLink>
              <ProjectLink
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                <ItemWrapper>
                  Repository
                  <Underline className="underline" />
                </ItemWrapper>
              </ProjectLink>
            </Title>
            <Description>{project.description}</Description>
            <Description>{project.motivation}</Description>
          </TextContainer>
        </motion.div>
      </HoverEffect>
    </Container>
  );
};

export default index;
