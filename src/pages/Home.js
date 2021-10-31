import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Home() {
    return (
        <Main>
            <Header>
                <h2>basic projects</h2>
                <TitleUnderLine />
            </Header>
            <Projects>
                <ProjectCard>
                    <Link to="/birthday-reminder">
                        <img src="/images/project-1.png" alt="" />
                        <h4>Birthday Reminder</h4>
                    </Link>
                </ProjectCard>
                <ProjectCard>
                    <Link to="/tours">
                        <img src="/images/project-2.png" alt="" />
                        <h4>Tours</h4>
                    </Link>
                </ProjectCard>
                <ProjectCard>
                    <Link to="/reviews">
                        <img src="/images/project-3.png" alt="" />
                        <h4>Reviews</h4>
                    </Link>
                </ProjectCard>
                <ProjectCard>
                    <Link to="/accordion">
                        <img src="/images/project-4.png" alt="" />
                        <h4>Accordion</h4>
                    </Link>
                </ProjectCard>
                <ProjectCard>
                    <Link to="/menu">
                        <img src="/images/project-5.png" alt="" />
                        <h4>Menu</h4>
                    </Link>
                </ProjectCard>
                <ProjectCard>
                    <Link to="/tabs">
                        <img src="/images/project-6.png" alt="" />
                        <h4>Side Menu</h4>
                    </Link>
                </ProjectCard>
                <ProjectCard>
                    <Link to="/slider">
                        <img src="/images/project-7.png" alt="" />
                        <h4>Slider</h4>
                    </Link>
                </ProjectCard>
            </Projects>
            <Header>
                <h2>UI projects</h2>
                <TitleUnderLine />
            </Header>
            <Header>
                <h2>apis/UI projects</h2>
                <TitleUnderLine />
            </Header>
            <Projects>
                <ProjectCard>
                    <Link to="/clone-facebook/home">
                        <img
                            src="https://media.kasperskydaily.com/wp-content/uploads/sites/92/2021/02/19064621/what-is-off-facebook-activity-featured.jpg"
                            alt=""
                        />
                        <h4>Clone Facebook</h4>
                    </Link>
                </ProjectCard>
            </Projects>
            <Footer>
                <h4>Created in 09/21, @ All rights reserved 2021.</h4>
            </Footer>
        </Main>
    );
}

export default Home;

const Main = styled.main`
    background-color: var(--grey-200);
    overflow-y: auto;
    height: 100vh;
`;

const Header = styled.div`
    padding-top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 4rem;
    h2 {
        margin: 0;
        font-family: "Inconsolata", monospace;
        text-transform: capitalize;
        font-size: 2.44rem;
        font-weight: 400;
        color: var(--grey-800);
    }
`;

const TitleUnderLine = styled.div`
    background-color: var(--primary-design);
    width: 140px;
    height: 3px;
    margin-top: 0.8rem;
`;

const Projects = styled.section`
    width: 90vw;
    max-width: 1120px;
    margin: 0px auto 5rem;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.9rem;
    @media (max-width: 1160px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    @media (max-width: 768px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`;

const ProjectCard = styled.div`
    box-shadow: var(--shadow-4);
    cursor: pointer;
    background-color: var(--grey-50);
    text-align: center;
    border-radius: 0.25rem;
    transition: 250ms linear;
    transition-property: transform, background-color, color;
    a {
        text-decoration: none;
    }
    img {
        width: 100%;
        height: 220px;
        border-radius: 0.25rem 0.25rem 0px 0px;
        object-fit: cover;
    }
    h4 {
        font-family: "Inconsolata", monospace;
        font-size: 1.25rem;
        color: var(--grey-700);
        letter-spacing: 0.1rem;
        margin: 1rem;
    }

    &:hover {
        transform: scale(1.05);
    }
`;

const Footer = styled.div`
    text-align: center;
    background-color: var(--grey-700);
    padding: 0.9rem 0;
    h4 {
        font-family: "Roboto Mono", monospace;
        font-weight: 300;
        color: var(--grey-100);
    }
`;
