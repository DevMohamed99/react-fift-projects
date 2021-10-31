import React, { useState } from "react";
import styled from "styled-components";
import dataTours from "../../projects/dataTours";
import { ReadMore } from "../../components";

function Tours() {
    const [tours, setTours] = useState(dataTours);

    const removeTour = (id) => {
        const newTours = tours.filter((tour) => tour.id !== id);
        setTours(newTours);
    };

    if (tours.length === 0) {
        return (
            <Main>
                <Header>
                    <h2>No More Tours Left</h2>
                    <Button onClick={() => setTours(dataTours)}>Refresh</Button>
                </Header>
            </Main>
        );
    }

    return (
        <Main>
            <Header>
                <h2>our tours</h2>
                <TitleUnderLine />
            </Header>
            {tours &&
                tours.map((tour) => (
                    <Card key={tour.id}>
                        <img src={tour.image} alt="" />
                        <Footer>
                            <NamePrice>
                                <h4>{tour.name}</h4>
                                <span>$ {tour.price}</span>
                            </NamePrice>
                            <ReadMore text={tour.info} />
                            <Button onClick={() => removeTour(tour.id)}>Not Interested</Button>
                        </Footer>
                    </Card>
                ))}
        </Main>
    );
}

export default Tours;

const Main = styled.main`
    margin: 5rem auto;
    width: 90vw;
    max-width: 650px;
`;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2 {
        margin: 0;
        text-transform: capitalize;
        font-family: "Montserrat";
        color: var(--grey-800);
        font-size: 2.3rem;
    }
`;

const TitleUnderLine = styled.div`
    width: 100px;
    height: 4px;
    background-color: var(--primary-design);
    margin-top: 0.3rem;
`;

const Card = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    margin-top: 4rem;
    border-radius: 0.25rem;
    img {
        border-radius: 0.25rem 0.25rem 0 0;
        width: 100%;
        height: 20rem;
        object-fit: cover;
    }
`;

const Footer = styled.div`
    padding: 1.5rem;
`;

const NamePrice = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    h4 {
        margin: 0;
        color: var(--main);
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
            Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-size: 1rem;
        letter-spacing: 0.1rem;
    }
    span {
        padding: 0.25rem 0.5rem;
        color: #49a6e9;
        background-color: #ebf7ff;
        font-family: "Montserrat";
        border-radius: 7px;
    }
    @media (max-width: 1024px) {
        flex-direction: column;
        h4 {
            text-align: center;
        }
        span {
            margin-top: 1rem;
        }
    }
`;

const Button = styled.div`
    width: 100%;
    margin-top: 1rem;
    cursor: pointer;
    text-align: center;
    padding: 0.6rem 0;
    color: red;
    border: 2px solid red;
    border-radius: 7px;
    font-family: "Roboto Mono";
    font-size: 0.9rem;
    letter-spacing: 0.1rem;
    transition: 250ms linear;
    transition-property: background-color, color;

    &:hover {
        background-color: red;
        color: white;
    }
`;
