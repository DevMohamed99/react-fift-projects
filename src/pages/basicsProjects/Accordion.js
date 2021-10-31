import React, { useState } from "react";
import styled from "styled-components";
import dataAccordion from "../../projects/dataAccordion";

function Accordion() {
    return (
        <Main>
            <Card>
                <h1>questions and answers about login</h1>
                <Questions>
                    {dataAccordion.length > 0 &&
                        dataAccordion.map((question) => (
                            <QuestionCard
                                key={question.id}
                                title={question.title}
                                info={question.info}
                            />
                        ))}
                </Questions>
            </Card>
        </Main>
    );
}

function QuestionCard({ title, info }) {
    const [isShowing, setIsShowing] = useState(false);

    return (
        <QCard>
            <HeaderQ>
                <h3>{title}</h3>
                {isShowing ? (
                    <svg
                        onClick={() => setIsShowing(false)}
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M20 12H4"
                        />
                    </svg>
                ) : (
                    <svg
                        onClick={() => setIsShowing(true)}
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 4v16m8-8H4"
                        />
                    </svg>
                )}
            </HeaderQ>
            {isShowing && <p>{info}</p>}
        </QCard>
    );
}

export default Accordion;

const Main = styled.main`
    background-color: #4b145b;
    min-height: 100vh;
    overflow: auto;
    display: flex;
    align-items: center;
`;

const Card = styled.div`
    display: grid;
    grid-template-columns: 250px 1fr;
    gap: 3rem;
    margin: 5rem auto;
    width: 90vw;
    max-width: 850px;
    background-color: white;
    border-radius: 4px;
    padding: 2.9rem 1.9rem;
    h1 {
        text-transform: capitalize;
        font-family: "Inconsolata", monospace;
        color: var(--grey-800);
        font-weight: 400;
        line-height: 1.2;
        margin: 0;
    }
`;

const Questions = styled.div``;

const QCard = styled.div`
    padding: .8rem 1rem;
    border-radius: 7px;
    border: 2px solid var(--grey-200);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    margin-bottom: 0.9rem;
    p {
        margin: 0;
        margin-top: 0.9rem;
        font-family: "Inconsolata";
        line-height: 1.4;
        color: var(--grey-700);
    }
`;

const HeaderQ = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
        margin: 0;
        font-family: "Roboto Mono";
        font-size: 0.95rem;
        color: var(--grey-700);
        font-weight: 400;
        letter-spacing: 0.02rem;
    }
    svg {
        width: 20px;
        height: 20px;
        color: red;
        background-color: var(--grey-200);
        padding: 0.4rem;
        border-radius: 50%;
        cursor: pointer;
    }
`;
