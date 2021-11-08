import styled from "styled-components";
import * as Unicons from "@iconscout/react-unicons";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

function Portfolio({ Id }) {
    return (
        <PortfolioMain id={Id}>
            <PortfolioContent>
                <PortfolioWelcome>
                    <h1>Hi!, I'am EL Moumny Mohamed</h1>
                    <h3>Web Developer</h3>
                    <p>
                        I have knowledge and experience in web development I'm using VS code as editor and
                        Github with his control tool Git in my workplace and other things to help me get best
                        experience of coding <span><a href="#contactMe">Show More</a></span>
                    </p>
                    <PortfolioSocial>
                        <a href="/#contactMe" className="contactMe">
                            Contact Me
                            <Unicons.UilMessage />
                        </a>
                        <Social>
                            <Link to={{ pathname: "https://github.com/Mohamedsol99" }} target="_blank">
                                <Unicons.UilGithub className="githubIcon" />
                            </Link>
                            <Link to={{ pathname: "https://github.com/Mohamedsol99" }} target="_blank">
                                <Unicons.UilInstagramAlt className="instagramIcon" />
                            </Link>
                            <Link to={{ pathname: "https://www.linkedin.com/Mohamedsol99" }} target="_blank">
                                <Unicons.UilLinkedin className="linkedInIcon" />
                            </Link>
                        </Social>
                    </PortfolioSocial>
                </PortfolioWelcome>
                <PortfolioImage>
                    <img
                        src="https://fuertedevelopers.in/wp-content/uploads/2020/08/aboutus.gif"
                        alt=""
                    />
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
        </PortfolioMain>
    );
}

export default Portfolio;

const PortfolioMain = styled.div`
    overflow: hidden;
`;

const PortfolioContent = styled.div`
    height: 780px;
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
        span{
            color: var(--blue-500);
            font-weight: 500;
        }
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
