import React from "react";
import { CgWebsite } from "react-icons/cg";
import { HiOutlineServer } from "react-icons/hi";
import { FaLaptopCode, FaShoppingCart } from "react-icons/fa";
import { FiTool } from "react-icons/fi";
import { RiShieldCheckFill } from "react-icons/ri";
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
            Icon={FaLaptopCode}
            title={"Web Development"}
            disc={`Building dynamic and high-performance websites that perfect to your needs. I focus on creating responsive designs that look great and provide seamless functionality`}
          />
        </Slide>
        <Slide direction="left">
          <Card
            Icon={CgWebsite}
            title={"Full Stack Development"}
            disc={`Combining the power of the MERN stack to deliver end-to-end solutions, from backend systems to stunning front-end interfaces`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={FaShoppingCart}
            title={"E-commerce Development"}
            disc={`Building fully functional e-commerce platforms with features like product management, payment gateways, and user-friendly shopping experiences.`}
          />
        </Slide>

        <Slide direction="right">
          <Card
            Icon={HiOutlineServer}
            title={"API Integration"}
            disc={`Creating and integrating RESTful APIs to ensure smooth communication between different systems. I focus on secure and efficient data exchange.`}
          />
        </Slide>
        <Slide direction="left">
          <Card
            Icon={FiTool}
            title={"Custom Web Solutions"}
            disc={`Developing bespoke web applications tailored to your unique requirements. Whether it's a management tool, booking system, or a dashboard, I've got you covered.`}
          />
        </Slide>
        <Slide direction="left">
          <Card
            Icon={RiShieldCheckFill}
            title={"Maintenance & Support"}
            disc={`Providing regular updates, security patches, and ongoing support to keep your website running smoothly.`}
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
