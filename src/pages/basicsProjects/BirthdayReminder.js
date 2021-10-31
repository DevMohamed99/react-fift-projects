import React, { useState } from "react";
import styled from "styled-components";
import { Profile } from "../../components";
import data from "../../projects/data";

function BirthdayReminder() {
    const [people, setPeople] = useState(data);
    return (
        <Main>
            <Card>
                <h1>{people.length} birthdays today</h1>
                {people &&
                    people.map((person) => (
                        <Profile
                            key={person.id}
                            image={person.image}
                            name={person.name}
                            age={person.age}
                        />
                    ))}
                <Button onClick={() => setPeople([])}>clear all</Button>
            </Card>
        </Main>
    );
}

export default BirthdayReminder;

const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: var(--clr-pink);
    overflow: auto;
`;

const Card = styled.div`
    margin: 6rem auto;
    background-color: white;
    width: 25vw;
    max-width: 500px;
    height: auto;
    border-radius: 10px;
    padding: 1.5rem 1.5rem;
    box-shadow: var(--dark-shadow);
    h1 {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
            Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-weight: 400;
        letter-spacing: 0.2rem;
        font-size: 1.5;
        margin: 0;
        margin-bottom: 1.5rem;
    }
`;

const Button = styled.div`
    margin-top: 1.5rem;
    text-transform: capitalize;
    text-align: center;
    cursor: pointer;
    background-color: var(--clr-pink);
    color: var(--grey-50);
    padding: 0.5rem;
    font-size: 1.4rem;
    font-family: "Roboto mono";
    border-radius: 5px;
`;
