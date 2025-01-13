import React, { useRef } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import ClientSlider from './ClientSlider';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from 'react-awesome-reveal';

let clients = [
    {
        name: "Ashwag Alasmari",
        img_url: "https://al-burraq.com/assets/img/reviews/3.png",
        stars: 5,
        disc: ` He went above and beyond expectations, showing great responsiveness and being easy to reach at any time. Working with him was seamless, and I’d gladly collaborate with him again. Highly recommend him to colleagues and friends.
`
    },
    {
        name: "Glen Lerner",
        img_url: "https://cdn.prod.website-files.com/6446f5d7c0c9e029b3ca5c2e/645ba59c4b09a0046b1d2665_Glen%20Lerner%20crop.jpg",
        stars: 5,
        disc: `"I must share my amazing experience with this attorney referral platform! It's user-centric, connects you with skilled professionals, and fosters effortless interactions. My search for legal expertise has never been easier. Love it!"`
    },
    {
        name: "Josh",
        img_url: "https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113_1280.png",
        stars: 5,
        disc: `He has been a true pleasure to deal with. There was never a day or night that I could recall when he wasn't available, and any changes were implemented instantly.I would confidently work with him again and highly recommend him – Excellent`
    },


]
var settings = {
    dots: true,
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
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
            }
        },
        {
            breakpoint: 530,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
}

const Clients = () => {
    const arrowRef = useRef(null);
    let clientDisc = "";
    clientDisc = clients.map((item, i) => (
        <ClientSlider item={item} key={i} />
    ))
    return (
        <Container id='client'>
            <Slide direction="left">
                <span className="green">testimonials</span>
                <h1>what clients say</h1>
            </Slide>
            <Testimonials>
                <Slider ref={arrowRef} {...settings}>
                    {clientDisc}
                </Slider>
                <Buttons>
                    <button
                        onClick={() => arrowRef.current.slickPrev()}
                    ><IoIosArrowBack /></button>
                    <button
                        onClick={() => arrowRef.current.slickNext()}
                    ><IoIosArrowForward /></button>
                </Buttons>
            </Testimonials>
        </Container>
    )
}

export default Clients

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 0;

    @media(max-width:840px){
        width: 90%;
    }

    span{
        font-weight: 700;
        text-transform: uppercase;
    }

    h1{
        padding-top: 1rem;
        text-transform: capitalize;
    }

    .slick-list, .slick-slider, .slick-track{
        padding: 0;
    }

    .slick-dots{
        text-align: left;
        margin-left: 1rem;
    }

    .slick-dots li button:before{
        content: "";
    }

    .slick-dots li button{
        width: 9px;
        height: 4px;
        background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
        padding: 0.1rem;
        margin-top: 1rem;
        transition: all 400ms ease-in-out;
        border-radius: 50px;
    }
    
    .slick-dots li.slick-active button{
        background: #01be96;
        width: 15px;
    }

    .slick-dots li{
        margin: 0;
    }
`

const Testimonials = styled.div`
    margin-top: 2rem;
    position: relative;
`
const Buttons = styled.div`
    position: absolute;
    right: 0.7rem;
    bottom: -2rem;

    button{
        background-color: transparent;
        margin-left: 0.5rem;
        border: none;
        color: #01be96;
        cursor: pointer;
        font-size: 1.1rem;
    }

    @media(max-width:530px){
        display: none;
    }
`