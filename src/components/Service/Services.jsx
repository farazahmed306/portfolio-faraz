import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
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
            Icon={CgWebsite}
            title={"Web Development"}
            disc={`I specialize in building responsive, user-friendly, and high-performance websites using the latest technologies. From landing pages to complex web applications, I create tailored solutions for your needs`}
          />
        </Slide>

        <Slide direction="up">
          <Card
            Icon={FiCodesandbox}
            title={"Full Stack Development"}
            disc={`Combining the power of the MERN stack to deliver end-to-end solutions, from backend systems to stunning front-end interfaces`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={MdDesignServices}
            title={"Maintenance & Support"}
            disc={`Providing regular updates, security patches, and ongoing support to keep your website running smoothly.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={MdDesignServices}
            title={"API Integration"}
            disc={`Creating and integrating RESTful APIs to ensure smooth communication between different systems. I focus on secure and efficient data exchange.`}
          />
        </Slide>        <Slide direction="left">
          <Card
            Icon={MdDesignServices}
            title={"Custom Web Solutions"}
            disc={`Developing bespoke web applications tailored to your unique requirements. Whether it's a management tool, booking system, or a dashboard, I've got you covered.`}
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
