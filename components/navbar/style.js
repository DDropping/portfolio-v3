import styled from "styled-components";

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
