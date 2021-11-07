import styled from "styled-components";
import * as Unicons from "@iconscout/react-unicons";
import { AboutMe, ContactMe, MyProjects, Portfolio } from "../components";

function Home() {
    return (
        <Main>
            {/* // ! section NavBar */}
            <HeaderProfiler>
                <h1>𝓔𝓛 𝓜𝓸𝓾𝓶𝓷𝔂</h1>
                <MenuItems>
                    <MenuItem>
                        <a href="/#portfolio">
                            <Unicons.UilScenery />
                            <span>Portfolio</span>
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a href="/#aboutMe">
                            <Unicons.UilUser />
                            <span>About</span>
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a href="/#projects">
                            <Unicons.UilConstructor />
                            <span>Projects</span>
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a href="/#contactMe">
                            <Unicons.UilMessage />
                            <span>Contact Me</span>
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <Unicons.UilMoon />
                    </MenuItem>
                </MenuItems>
            </HeaderProfiler>
            {/* // !  section Portfolio */}
            <Portfolio Id="portfolio" />
            {/*  // ! section About Me */}
            <AboutMe Id="aboutMe" />
            {/* // ! section Projects  */}
            <MyProjects Id="projects" />
            {/* // ! section Contact Me  */}
            <ContactMe Id="contactMe" />
            {/* // ! section Footer  */}
            <Footer>
                <h4>Created in 09/21, @ All rights reserved 2021.</h4>
            </Footer>
        </Main>
    );
}

export default Home;

const Main = styled.main`
    background-color: var(--grey-200);
    width: 90%;
    margin: 0 auto;
    overflow-y: auto;
    height: 100vh;
    scrollbar-width: none;
    position: relative;
`;

// ! section Nav Bar
const HeaderProfiler = styled.div`
    overflow: hidden;
    background-color: var(--grey-200);
    position: sticky;
    top: 0;
    padding: 1.2rem 0 0.6rem;
    margin: 0 auto;
    width: 96%;
    border-bottom: 1px solid var(--grey-300);
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--grey-500);
    font-size: 1.1rem;
    z-index: 3;
    h1 {
        font-family: "Montserrat", sans-serif;
        font-weight: 600;
        letter-spacing: 0.1rem;
        cursor: pointer;
        &:hover {
            color: var(--blue-500);
        }
    }
`;

const MenuItems = styled.ul`
    display: flex;
    gap: 2.5rem;
`;

const MenuItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
    a {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
    }
    span {
        font-family: "Poppins";
        font-weight: 600;
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 0.15rem;
    }
    svg {
        width: 20px;
        height: 20px;
    }
    &:hover {
        color: var(--blue-500);
    }
`;

// ! section Footer
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
