import React from "react";
import styled from "styled-components";

export const Container = styled.div``;

export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  padding-left: 0;
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
        <Li>About</Li>
        <Li>Skills</Li>
        <Li>Projects</Li>
        <Li>Contact</Li>
      </Ul>
    </Container>
  );
};

export default index;
