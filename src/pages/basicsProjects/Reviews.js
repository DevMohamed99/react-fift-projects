import React, { useState } from "react";
import styled from "styled-components";
import dataReviews from "../../projects/dataReviews";
import { FaQuoteRight } from "react-icons/fa";

function Reviews() {
    const [changer, setChanger] = useState(0);

    const randomProfile = () => {
        const randomNumber = Math.floor(Math.random() * dataReviews.length);
        if (randomNumber === changer) {
            //console.log(randomNumber);
            randomProfile();
        }
        if (randomNumber !== changer) {
            //console.log(randomNumber);
            setChanger(randomNumber);
        }
    };

    return (
        <Main>
            <Header>
                <h2>our reviews</h2>
                <TitleUnderLine />
            </Header>
            <Card>
                <Image>
                    <img src={dataReviews[0 + changer].image} alt="" />
                    <span>
                        <FaQuoteRight />
                    </span>
                </Image>
                <h4>{dataReviews[0 + changer].name}</h4>
                <p className="P1">{dataReviews[0 + changer].job}</p>
                <p className="P2">{dataReviews[0 + changer].text}</p>
                <Buttons>
                    <button
                        onClick={() =>
                            changer <= 0
                                ? setChanger(dataReviews.length - 1)
                                : setChanger(changer - 1)
                        }
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="3"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>
                    <button
                        onClick={() =>
                            changer < dataReviews.length - 1
                                ? setChanger(changer + 1)
                                : setChanger(0)
                        }
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="3"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </Buttons>
                {/* Randomly choose a profile */}
                <button className="P3" onClick={() => randomProfile()}>
                    Suprise Me
                </button>
            </Card>
        </Main>
    );
}

export default Reviews;

const Main = styled.main`
    margin: 7rem auto;
    width: 90vw;
    max-width: 650px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;
    h2 {
        margin: 0;
        text-transform: capitalize;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
            Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        color: var(--grey-800);
        font-size: 2.5rem;
        text-transform: capitalize;
    }
`;

const TitleUnderLine = styled.div`
    width: 100px;
    height: 4px;
    background-color: var(--primary-design);
    margin-top: 0.3rem;
`;

const Card = styled.div`
    box-shadow: var(--shadow-1);
    padding: 1.5rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 550px;
    background-color: white;
    h4 {
        margin: 0;
        font-size: 1rem;
        color: #102a42;
        font-family: "Roboto Mono";
        text-transform: capitalize;
        letter-spacing: 0.1rem;
    }
    .P1 {
        margin-top: 0.5rem;
        font-size: 0.8rem;
        text-transform: uppercase;
        color: #49a6e9;
        letter-spacing: 0.1rem;
        background-color: none;
    }
    .P2 {
        font-family: "Roboto Mono";
        font-size: 0.9rem;
        text-align: center;
        margin: 1rem 0;
        margin-bottom: 1rem;
        color: var(--grey-400);
    }
    .P3 {
        margin-top: 0.3rem;
        font-size: 0.8rem;
        font-weight: 400;
        font-family: "Roboto Mono";
        padding: 0.4rem 0.9rem;
        border: none;
        color: #49a6e9;
        border-radius: 6px;
        letter-spacing: 0.1rem;
        cursor: pointer;
        &:hover {
            color: black;
            background-color: #60dbfb;
        }
    }
`;

const Image = styled.div`
    width: 150px;
    height: 150px;
    margin: 0 auto 1.5rem;
    position: relative;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 50%;
        display: block;
        margin-bottom: 1rem;
        position: relative;
        z-index: 1;
    }
    &:before {
        content: "";
        width: 100%;
        height: 100%;
        background: #49a6e9;
        position: absolute;
        top: -0.25rem;
        right: -0.5rem;
        border-radius: 50%;
    }
    span {
        position: absolute;
        transform: translateY(25%);
        top: 0rem;
        left: 0;
        display: grid;
        place-items: center;
        width: 2.5rem;
        height: 2.5rem;
        color: white;
        background-color: #49a6e9;
        border-radius: 50%;
        z-index: 1;
    }
`;

const Buttons = styled.div`
    display: flex;
    gap: 1.5rem;
    margin: 0.9rem 0;
    text-align: center;
    button {
        background-color: white;
        border: none;
        color: #60dbfb;
    }
    svg {
        width: 25px;
        height: 25px;
        cursor: pointer;
        &:hover {
            color: black;
        }
    }
`;
