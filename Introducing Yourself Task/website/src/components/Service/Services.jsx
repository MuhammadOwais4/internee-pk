import React from "react";
import { FaAndroid } from "react-icons/fa";
import { FiCodesandbox } from "react-icons/fi";
import { FaApple } from "react-icons/fa";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">services</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={FaAndroid}
            title={"Apps Design"}
            disc={`Users Friendly & Affective`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FiCodesandbox}
            title={"Web Development"}
            disc={`Responsive Design Websites and Animation`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={FaApple }
            title={"Apps Development"}
            disc={`Experienced in developing mobile apps for Android and iOS platforms`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
