import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding: 50px 0;
`;

export const HoverEffect = styled.div`
  display: flex;
  :hover > div > .shadow1 {
    transform-style: preserve-3d;
    transition: all 0.8s ease 0.1s;
    transform: perspective(1000px) rotateY(0deg) translateX(60px);
  }
  :hover > div > .shadow2 {
    transform-style: preserve-3d;
    transition: all 0.8s ease 0.1s;
    transform: perspective(1000px) rotateY(0deg) translateX(100px);
  }
  :hover > div > .mainImage {
    box-shadow: 0 0 11px rgba(83, 68, 68, 0.6);
    transform-style: preserve-3d;
    transition: all 0.8s ease 0.1s;
    transform: perspective(1000px) rotateY(0deg);
  }
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ImageWrapper = styled.div`
  box-shadow: 0 0 11px rgba(83, 68, 68, 0.2);
  perspective: 1000px;
  transform-style: preserve-3d;
  transition: all 0.8s ease 0.1s;
  transform: perspective(1000px) rotateY(20deg);
  width: 500px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Shadow1 = styled.div`
  position: absolute;
  perspective: 1000px;
  transform-style: preserve-3d;
  transition: all 0.8s ease 0.1s;
  transform: perspective(1000px) rotateY(20deg);
  margin-left: -30px;
  margin-top: 10px;
  height: 280px;
  width: 400px;
  background-color: ${({ color }) => color};
  opacity: 0.5;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const Shadow2 = styled.div`
  position: absolute;
  perspective: 1000px;
  transform-style: preserve-3d;
  transition: all 0.8s ease 0.1s;
  transform: perspective(1000px) rotateY(20deg);
  margin-left: -60px;
  margin-top: 20px;
  height: 260px;
  width: 300px;
  background-color: ${({ color }) => color};
  opacity: 0.5;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const TextContainer = styled.div`
  margin-left: 50px;
  @media (max-width: 1000px) {
    margin-top: 25px;
    margin-left: 0;
  }
`;

export const Title = styled.div`
  font-size: 1.2rem;
  display: flex;
`;

export const ProjectLink = styled.a`
  font-size: 1rem;
  margin-left: 20px;
  color: #5692ce;
  cursor: pointer;
  text-decoration: ${({ href }) => href === "n/a" && "line-through"};
  color: ${({ href }) => (href === "n/a" ? "#c7c7c7" : "#5692ce")};
  pointer-events: ${({ href }) => href === "n/a" && "none"};
`;

export const Description = styled.div``;

export const Technologies = styled.div``;

export const ItemWrapper = styled.div`
  :hover > .underline {
    transition: width 0.5s;
    width: 100%;
  }
`;

export const Underline = styled.div`
  margin: 0 auto;
  height: 2px;
  width: 0;
  background-color: #6a8aba;
`;

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
            <a href={project.website} target="_blank" rel="noreferrer">
              <Image
                src={project.image}
                alt="404 page not found"
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
