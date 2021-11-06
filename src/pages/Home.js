import styled from "styled-components";
import { Link } from "react-router-dom";
import * as Unicons from "@iconscout/react-unicons";
import { Typewriter } from "react-simple-typewriter";
import { SectionHeading } from "../components";

function Home() {
    return (
        <Main>
            {
                // ! section NavBar
            }
            <HeaderProfiler>
                <h1>𝓔𝓛 𝓜𝓸𝓾𝓶𝓷𝔂</h1>
                <MenuItems>
                    <MenuItem>
                        <Link></Link>
                        <Unicons.UilScenery />
                        <span>Portfolio</span>
                    </MenuItem>
                    <MenuItem>
                        <a href="#aboutMe">
                            <Unicons.UilUser />
                            <span>About</span>
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <Link></Link>
                        <Unicons.UilFileAlt />
                        <span>Skills</span>
                    </MenuItem>
                    <MenuItem>
                        <Link></Link>
                        <Unicons.UilConstructor />
                        <span>Projects</span>
                    </MenuItem>
                    <MenuItem>
                        <Link></Link>
                        <Unicons.UilMessage />
                        <span>Contact Me</span>
                    </MenuItem>
                    <MenuItem>
                        <Unicons.UilMoon />
                    </MenuItem>
                </MenuItems>
            </HeaderProfiler>
            {
                // ! section Portfolio
            }
            <Portfolio id="portfolio">
                <PortfolioContent>
                    <PortfolioWelcome>
                        <h1>Hi!, I'am EL Moumny Mohamed</h1>
                        <h3>Front-end developer</h3>
                        <p>
                            I have experience and knowledge in web development using react js and other
                            libraries like react router dom, redux-toolkit ... and for styling styled
                            components, tailwindcss framework ...
                        </p>
                        <PortfolioSocial>
                            <Link className="contactMe">
                                Contact Me
                                <Unicons.UilMessage />
                            </Link>
                            <Social>
                                <Link to={{ pathname: "https://github.com/Mohamedsol99" }} target="_blank">
                                    <Unicons.UilGithub className="githubIcon" />
                                </Link>
                                <Link to={{ pathname: "https://github.com/Mohamedsol99" }} target="_blank">
                                    <Unicons.UilInstagramAlt className="instagramIcon" />
                                </Link>
                                <Link
                                    to={{ pathname: "https://www.linkedin.com/Mohamedsol99" }}
                                    target="_blank">
                                    <Unicons.UilLinkedin className="linkedInIcon" />
                                </Link>
                            </Social>
                        </PortfolioSocial>
                    </PortfolioWelcome>
                    <PortfolioImage>
                        <img src="/images/profilePic.png" alt="" />
                    </PortfolioImage>
                    <PortfolioGoals>
                        <span>
                            My goal in
                            <Typewriter
                                words={[
                                    " start of 2022 To be a fullstuck web developer using Next js, RestApi and more .. Inshaalah ",
                                    " end of 2022 To be a fullstuck Mobile developer using React Native and all his features. Inshaalah ",
                                    " 2021 to get a traineeship (stage) or job in any company to improve my Skills and get more experience",
                                ]}
                                loop={0}
                                cursor
                                cursorStyle={"_"}
                                typeSpeed={90}
                                deleteSpeed={40}
                                delaySpeed={10000}
                            />
                        </span>
                    </PortfolioGoals>
                </PortfolioContent>
            </Portfolio>
            {
                // ! section About Me
            }
            <AboutMe id="aboutMe">
                <SectionHeading textHeading="About Me" mT="5rem" mB="5rem" />
                <AboutMeContent></AboutMeContent>
            </AboutMe>
            {
                // ! section Skills
            }
            <AboutMe id="aboutMe">
                <SectionHeading textHeading="Skills" mT="5rem" mB="5rem" />
                <AboutMeContent></AboutMeContent>
            </AboutMe>
            {
                // ! section Projects
            }
            <HeaderTitle>
                <h2>basic projects</h2>
                <TitleUnderLine />
            </HeaderTitle>
            <Projects>
                <ProjectCard>
                    <Link to="/basic/birthday-reminder">
                        <img src="/images/project-1.png" alt="" />
                        <h4>Birthday Reminder</h4>
                    </Link>
                </ProjectCard>
                <ProjectCard>
                    <Link to="/basic/tours">
                        <img src="/images/project-2.png" alt="" />
                        <h4>Tours</h4>
                    </Link>
                </ProjectCard>
                <ProjectCard>
                    <Link to="/basic/reviews">
                        <img src="/images/project-3.png" alt="" />
                        <h4>Reviews</h4>
                    </Link>
                </ProjectCard>
                <ProjectCard>
                    <Link to="/basic/accordion">
                        <img src="/images/project-4.png" alt="" />
                        <h4>Accordion</h4>
                    </Link>
                </ProjectCard>
                <ProjectCard>
                    <Link to="/basic/menu">
                        <img src="/images/project-5.png" alt="" />
                        <h4>Menu</h4>
                    </Link>
                </ProjectCard>
                <ProjectCard>
                    <Link to="/basic/tabs">
                        <img src="/images/project-6.png" alt="" />
                        <h4>Side Menu</h4>
                    </Link>
                </ProjectCard>
                <ProjectCard>
                    <Link to="/basic/slider">
                        <img src="/images/project-7.png" alt="" />
                        <h4>Slider</h4>
                    </Link>
                </ProjectCard>
            </Projects>
            <HeaderTitle>
                <h2>apis/UI projects</h2>
                <TitleUnderLine />
            </HeaderTitle>
            <Projects>
                <ProjectCard>
                    <Link to="/apis-ui/clone-facebook/home">
                        <img
                            src="https://media.kasperskydaily.com/wp-content/uploads/sites/92/2021/02/19064621/what-is-off-facebook-activity-featured.jpg"
                            alt=""
                        />
                        <h4>Clone Facebook</h4>
                    </Link>
                </ProjectCard>
            </Projects>
            {
                // ! section Contact Me
            }
            <AboutMe id="aboutMe">
                <SectionHeading textHeading="Contact Me" mT="5rem" mB="5rem" />
                <AboutMeContent></AboutMeContent>
            </AboutMe>
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
    scrollbar-width: none;
    position: relative;
`;

// ! Nav Bar
const HeaderProfiler = styled.div`
    /* background-color: var(--grey-400); */
    /* position: sticky;
    top: 0; */
    padding: 1.2rem 0 0.6rem;
    margin: 0 auto;
    width: 90%;
    border-bottom: 1px solid var(--grey-300);
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--grey-500);
    font-size: 1.1rem;
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

// ! section Portfolio
const Portfolio = styled.div``;

const PortfolioContent = styled.div`
    height: 750px;
    margin: 0 3rem;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 75% 20%;
    gap: 0 2rem;
`;

const PortfolioImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    img {
        object-fit: contain;
        width: 700px;
        height: 500px;
    }
`;

const PortfolioWelcome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 2rem;
    width: 80%;
    h1 {
        text-transform: uppercase;
        font-weight: 500;
        color: var(--blue-500);
        letter-spacing: 0.2rem;
    }
    h3 {
        font-family: "Poppins";
        font-weight: 900;
        font-size: 1.9rem;
        letter-spacing: 0.13rem;
        color: var(--main);
    }
    h3,
    h1 {
        margin-bottom: 0.5rem;
    }
    p {
        color: var(--grey-500);
        letter-spacing: 0.05rem;
        margin-bottom: 0.9rem;
    }
`;

const PortfolioSocial = styled.div`
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .contactMe {
        width: 12rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        font-family: "Poppins";
        font-weight: 600;
        font-size: 1.05rem;
        background-color: var(--blue-500);
        padding: 1rem 1rem;
        color: var(--body-bg);
        border-radius: 19px;
        margin-right: 12rem;
        letter-spacing: 0.12rem;
    }
`;

const Social = styled.div`
    display: flex;
    gap: 1rem;
    .githubIcon {
        color: var(--main);
    }
    .instagramIcon {
        color: var(--clr-pink);
    }
    .linkedInIcon {
        color: var(--blue-500);
    }
    .githubIcon,
    .instagramIcon,
    .linkedInIcon {
        width: 35px;
        height: 35px;
    }
`;

const PortfolioGoals = styled.div`
    grid-column: 1/3;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1.2rem;
    span {
        color: var(--primary-color);
        letter-spacing: 0.1rem;
    }
`;

// ! section About Me
const AboutMe = styled.div``;

const AboutMeContent = styled.div``;

// ! section Projects
const HeaderTitle = styled.div`
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
