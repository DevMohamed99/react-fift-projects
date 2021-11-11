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
                        experience of coding ...
                    </p>
                    <PortfolioSocial>
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
                    <img src="https://fuertedevelopers.in/wp-content/uploads/2020/08/aboutus.gif" alt="" />
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
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2rem;
    place-items: center;
    @media (max-width: 780px) {
        grid-template-columns: repeat(1, minmax(150px, 1fr));
    }
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
        span {
            color: var(--blue-500);
            font-weight: 500;
        }
    }
    @media (max-width: 780px) {
        align-items: center;
        margin-top: 1.5rem;
        h3,
        h1,
        p {
            text-align: center;
        }
    }
`;

const PortfolioSocial = styled.div`
    margin-top: 1rem;
    display: flex;
    align-items: center;
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
        width: 86%;
        margin: 0 auto;
    }
    @media (max-width: 780px) {
        grid-column: 1/2;
        grid-row: 3/4;
        font-size: 1rem;
    }
`;