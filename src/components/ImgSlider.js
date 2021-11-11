import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import { Link } from "react-router-dom";

function ImgSlider({ data, numbToShow = 3, paddingSlider = "50px", imgPosition = "50% 50%" ,showUp= true }) {
    const NextArrow = ({ onClick }) => {
        return (
            <MainNext onClick={onClick}>
                <HiArrowCircleRight />
            </MainNext>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <MainPrev onClick={onClick}>
                <HiArrowCircleLeft />
            </MainPrev>
        );
    };
    const [NextImg, setNextImg] = useState(0);
    let settings = {
        infinite: true,
        speed: 500,
        slidesToShow: numbToShow,
        slidesToScroll: 1,
        arrows: showUp,
        centerMode: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setNextImg(next),
        centerPadding: paddingSlider,
        autoplay: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                centerPadding: "0",
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                arrows: false,
              }
            },
          ],
    };

    return (
        <MainSlider>
            <Carousel {...settings}>
                {data &&
                    data.map((item, index) => {
                        return (
                            <ImagesSlider
                                key={index}
                                image={item.img}
                                nextIdx={NextImg}
                                idx={index}
                                link={item.link}
                                imgPosition={imgPosition}
                            />
                        );
                    })}
            </Carousel>
            <Details>
                <h3>{data[NextImg].title}</h3>
                <p>{data[NextImg].desc}</p>
            </Details>
        </MainSlider>
    );
}

function ImagesSlider({ image, nextIdx, idx, link, imgPosition }) {
    return (
        <Wrap className={nextIdx === idx && "active"} imgPosition={imgPosition}>
            <Link to={link} target="_blank">
                <img src={image} alt="" />
            </Link>
        </Wrap>
    );
}

export default ImgSlider;

const MainSlider = styled.section``;

const Carousel = styled(Slider)`
    width: 95%;
    height: 360px;
    margin: 2rem auto 0;
    display: flex;
    align-items: center;
    position: relative;
    .active {
        transform: scale(1);
        opacity: 1;
        box-shadow: var(--dark-shadow);
        width: 100%;
        cursor: pointer;
    }
    .slick-list {
        width: 100%;
        height: 100%;
        display: grid;
        place-items: center;
    }
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    h3 {
        font-family: "Poppins";
        font-weight: 700;
        font-size: 1.5rem;
        letter-spacing: 0.2rem;
        color: var(--grey-200);
    }
    p {
        width: 70%;
        text-align: center;
        color: var(--grey-100);
        letter-spacing: 0.1rem;
        height: 60px;
    }
    @media (max-width: 600px){
        h3{
            font-size: 1.2rem;
        }
        p{
            font-size: .8rem;
        letter-spacing: 0.05rem;
        width: 90%;
        }
    }
`;

// ? styling for buttons
const MainNext = styled.div`
    font-size: 2.2rem;
    position: absolute;
    right: -2%;
    z-index: 1;
    cursor: pointer;
    color: var(--orange-clr);
`;

const MainPrev = styled(MainNext)`
    left: -1%;
    right: 100%;
`;

// ? styling for images
const Wrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    transform: scale(0.7);
    transition: transform 300ms;
    opacity: 0.6;
    border-radius: 23px;
    a {
        width: 100%;
    }
    img {
        width: 100%;
        min-width: 200px;
        height: 300px;
        object-fit: cover;
        border-radius: 23px;
        object-position: ${(props) => props.imgPosition};
    }
`;
