import styled from "styled-components";
import * as Unicons from "@iconscout/react-unicons";
import { AboutMe, MyProjects, Portfolio } from "../components";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getNavBarHeightState } from "../features/components/useActiveNav";
import { Link } from "react-router-dom";

// Hook

function Home() {
    // eslint-disable-next-line
    const getHeight = useSelector(getNavBarHeightState);
    const [width, setWidth] = useState(window.innerWidth);
    const [activeElem, setActiveElem] = useState("home");

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [width]);

    const handleActiveNav = (height, scrollPosition) => {
        if (scrollPosition <= height.Home - 170) {
            if (activeElem !== "home") {
                setActiveElem("home");
            }
        } else if (scrollPosition > height.Home - 170 && scrollPosition <= height.Home + height.About - 170) {
            if (activeElem !== "aboutMe") {
                setActiveElem("aboutMe");
            }
        } else if (scrollPosition > height.Home + height.About - 170) {
            if (activeElem !== "projects") {
                setActiveElem("projects");
            }
        }
    };

    return (
        <Main>
            <MainHome
                onScroll={(e) => {
                    handleActiveNav(getHeight, e.target.scrollTop);
                }}>
                {/* // ! section NavBar */}
                <HeaderProfiler>
                    <h1>𝓔𝓛 𝓜𝓸𝓾𝓶𝓷𝔂</h1>
                    <MenuItems>
                        <MenuItem
                            className={
                                activeElem === "home" && width > 600 ? "text-blue-500" : "var(--grey-500)"
                            }>
                            <a href="/#home">
                                <Unicons.UilEstate />
                                <span>Home</span>
                            </a>
                        </MenuItem>
                        <MenuItem
                            className={
                                activeElem === "aboutMe" && width > 600 ? "text-blue-500" : "var(--grey-500)"
                            }>
                            <a href="/#aboutMe">
                                <Unicons.UilUser />
                                <span>About</span>
                            </a>
                        </MenuItem>
                        <MenuItem
                            className={
                                activeElem === "projects" && width > 600 ? "text-blue-500" : "var(--grey-500)"
                            }>
                            <a href="/#projects">
                                <Unicons.UilConstructor />
                                <span>Projects</span>
                            </a>
                        </MenuItem>
                    </MenuItems>
                </HeaderProfiler>
                {/* // !  section Portfolio */}
                <Portfolio Id="home" />
                {/* // ! section About Me */}
                <AboutMe Id="aboutMe" screenWidth={width} />
                {/* // ! section Projects  */}
                <MyProjects Id="projects" />
                {/* // ! section Contact Me  */}
                {/* <ContactMe Id="contactMe" /> */}
                {/* // ! section Footer  */}
                <Footer mBNavBar={width <= 600 && "2rem"}>
                    <ContactMeNow>
                        <Link to={{ pathname: "https://github.com/Mohamedsol99" }} target="_blank">
                            <Unicons.UilGithub />
                        </Link>
                        <Link
                            to={{ pathname: "https://www.linkedin.com/in/elmoumny-mohamed-198121225/" }}
                            target="_blank">
                            <Unicons.UilLinkedin className="linkedInIcon" />
                        </Link>
                    </ContactMeNow>
                    <h4>All rights reserved 2021, created in 11/21.</h4>
                </Footer>
            </MainHome>
            <BottomNavBar Display={width <= 610 ? "flex" : "none"}>
                <a
                    href="/#home"
                    className={activeElem === "home" && width <= 610 ? "text-blue-500" : "var(--grey-500)"}>
                    <Unicons.UilEstate />
                </a>
                <a
                    href="/#aboutMe"
                    className={
                        activeElem === "aboutMe" && width <= 610 ? "text-blue-500" : "var(--grey-500)"
                    }>
                    <Unicons.UilUser />
                </a>
                <a
                    href="/#projects"
                    className={
                        activeElem === "projects" && width <= 610 ? "text-blue-500" : "var(--grey-500)"
                    }>
                    <Unicons.UilConstructor />
                </a>
            </BottomNavBar>
        </Main>
    );
}

export default Home;

const Main = styled.div`
    position: relative;
`;

const MainHome = styled.main`
    background-color: var(--grey-200);
    margin: 0 auto;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
    scrollbar-width: none;
    position: relative;
    z-index: 0;
`;

// ! section Nav Bar
const HeaderProfiler = styled.div`
    overflow: hidden;
    background-color: var(--grey-200);
    position: sticky;
    top: 0;
    padding: 1rem 2rem 0.6rem;
    width: 100%;
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
        color: var(--blue-500);
    }
    @media (max-width: 610px) {
        justify-content: center;
        padding-top: 0.6rem;
        ul {
            display: none;
        }
        h1 {
            font-size: 1.15rem;
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
    &:hover,
    &:focus-within {
        color: var(--blue-500);
    }
`;

// ! section Footer
const Footer = styled.div`
    width: 100%;
    background-color: var(--main);
    margin-bottom: ${(props) => (props.mBNavBar ? props.mBNavBar : "0")};
    padding: 0.9rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--grey-300);
    gap: 0.7rem;
    h4 {
        font-family: "Roboto Mono";
        font-weight: 500;
        letter-spacing: 0.2rem;
    }
    @media (max-width: 600px) {
        h4 {
            font-size: 0.9rem;
            text-align: center;
            margin-bottom: 1rem;
        }
    }
`;

const ContactMeNow = styled.div`
    display: flex;
    gap: 1rem;
    .whatsAppIcon {
        color: var(--green);
    }
    .linkedInIcon {
        color: var(--blue-500);
    }
    svg {
        width: 40px;
        height: 40px;
    }
`;

const BottomNavBar = styled.div`
    background-color: var(--grey-200);
    border-top: 1px solid var(--grey-400);
    width: 100%;
    position: absolute;
    bottom: 0;
    display: ${(props) => props.Display};
    align-items: center;
    justify-content: space-around;
    color: var(--grey-500);
    padding: 0.5rem 0;
    svg {
        width: 30px;
        height: 30px;
    }
`;
