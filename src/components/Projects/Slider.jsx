import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

let data = [


  {
    img: "https://al-burraq.com/portfolioimages/f1684844256.header.png",
    disc: "Vertex Inspector is an app that streamlines asset inspections by recording defects, generating detailed reports, and capturing photos. It enables inspectors to assign issues to team members for efficient communication and resolution",
    pLink: "https://al-burraq.com/portfolio/streamlining-asset-inspection-and-recording",
    pName: "Vertex Inspector"
  },
  {
    img: "https://taxcalculator.pk/assets/images/banner/main.webp",
    disc: "Tax Calculator is a leading tax services provider in Pakistan, offering tools to calculate taxes based on the country's budget. It also provides services like company/firm registration, income tax return filing, tax appeals, litigation, and drafting legal agreements and contracts.",
    pLink: "https://taxcalculator.pk/",
    pName: "Tax Calculator"
  },
  {
    img: "https://al-burraq.com/portfolioimages/f1690985990.header.webp",
    disc: "Lexamica is a digital platform revolutionizing legal document management with features like document organization, version control, and advanced search. Its intuitive interface enables professionals to manage documents efficiently, enhancing workflow and user experience.",
    pLink: "https://al-burraq.com/portfolio/redefining-legal-document-management",
    pName: "Lexamica"
  },
  {
    img: "https://www.al-burraq.com/portfolioimages/f1690981810.header.webp",
    disc: "GoodTerms.ai is a smart SaaS platform powered by advanced natural language processing, designed to extract accurate and relevant terms from text data. Users can effortlessly upload documents or input text to receive concise term suggestions through a seamless, user-friendly interface.",
    pLink: "https://al-burraq.com/portfolio/empower-text-analytics-with-goodterms.ai",
    pName: "GoodTerms"
  }
];

var settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false
      }
    }
  ]
};
const SliderComp = () => {
  const arrowRef = useRef(null);
  let sliderProject = "";
  sliderProject = data.map((item, i) => (
    <Project item={item} key={i} />
  ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>
      <Buttons>
        <button
          onClick={() => arrowRef.current.slickPrev()}
          className='back'><IoIosArrowBack /></button>
        <button
          onClick={() => arrowRef.current.slickNext()}
          className='next'><IoIosArrowForward /></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgb(80, 80, 80);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`