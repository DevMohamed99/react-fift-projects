import styled from "styled-components";
import { SectionHeading } from "..";
import * as Unicons from "@iconscout/react-unicons";
import { ErrorOutline } from "@mui/icons-material";

function AboutMe({ Id }) {
    return (
        <AboutMeMain id={Id}>
            <SectionHeading textHeading="About Me" mT="5rem" mB="2rem" />
            <AboutMeContent>
                <h2>Who Am I ?</h2>
                <AboutMySelf>
                    <h6>I'am Web Developer</h6>
                    <p>
                        My name is <span>EL Moumny Mohamed</span>, I'm 21 years old, I've 2 degrees in my
                        studies first degree in High School and second in University in computer science .From
                        high school <span>my dream job was to be a developer</span> for me developer can do
                        anything with any language of development that's what I like in this job ..
                    </p>
                    <Buttons>
                        <CVButton>
                            <a href="/files/CVMohamed.pdf" download="EL Moumny CV">
                                <span>Download CV</span>
                                <Unicons.UilImport />
                            </a>
                        </CVButton>
                        <ContactMeButton>
                            <a href="#contactMe">
                                <span>Contact Me</span>
                                <Unicons.UilMessage />
                            </a>
                        </ContactMeButton>
                    </Buttons>
                </AboutMySelf>
                <h2>What are my Skills ?</h2>
                <AboutMeCards>
                    <AboutMeCard>
                        <CardTitle>
                            <Unicons.UilBracketsCurly />
                            <h3>Front-end Skills</h3>
                        </CardTitle>
                        <SkillsBars>
                            <SkillBar>
                                <span className="langue">HTML</span>
                                <span className="percantage">90%</span>
                                <Bar>
                                    <BarProgress barProgress="90%"></BarProgress>
                                </Bar>
                            </SkillBar>
                            <SkillBar>
                                <span className="langue">CSS</span>
                                <span className="percantage">85%</span>
                                <Bar>
                                    <BarProgress barProgress="85%"></BarProgress>
                                </Bar>
                            </SkillBar>
                            <SkillBar>
                                <span className="langue">JavaScript</span>
                                <span className="percantage">77%</span>
                                <Bar>
                                    <BarProgress barProgress="77%"></BarProgress>
                                </Bar>
                            </SkillBar>
                            <SkillBar>
                                <span className="langue">React JS</span>
                                <span className="percantage">80%</span>
                                <Bar>
                                    <BarProgress barProgress="80%"></BarProgress>
                                </Bar>
                            </SkillBar>
                        </SkillsBars>
                    </AboutMeCard>
                    <AboutMeCard>
                        <CardTitle>
                            <Unicons.UilServerConnection />
                            <h3>Back-end Skills</h3>
                        </CardTitle>
                        <SkillsBars>
                            <SkillBar>
                                <span className="langue">Firebase</span>
                                <span className="percantage">70%</span>
                                <Bar>
                                    <BarProgress barProgress="70%"></BarProgress>
                                </Bar>
                            </SkillBar>
                            <SkillBar>
                                <span className="langue">Rest APIs</span>
                                <span className="percantage learning">Still Learning</span>
                                <Bar>
                                    <BarProgress barProgress="0%"></BarProgress>
                                </Bar>
                            </SkillBar>
                            <SkillBar>
                                <span className="langue">Next JS</span>
                                <span className="percantage learning">Still Learning</span>
                                <Bar>
                                    <BarProgress barProgress="0%"></BarProgress>
                                </Bar>
                            </SkillBar>
                            <SkillBar>
                                <span className="langue">Express</span>
                                <span className="percantage learning">Still Learning</span>
                                <Bar>
                                    <BarProgress barProgress="0%"></BarProgress>
                                </Bar>
                            </SkillBar>
                        </SkillsBars>
                    </AboutMeCard>
                </AboutMeCards>
                <span className="waring">
                    <ErrorOutline />
                    * Note : This progress will be updating ... 
                </span>
            </AboutMeContent>
        </AboutMeMain>
    );
}

export default AboutMe;

// ! section AboutMe
const AboutMeMain = styled.div`
    overflow: hidden;
`;

const AboutMeContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
    h2 {
        font-family: "Poppins";
        font-size: 1rem;
        font-weight: 500;
        letter-spacing: 0.15rem;
        color: var(--primary-color);
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 3rem 0 1rem;
        position: relative;
        &:after {
            content: "";
            position: absolute;
            background: var(--primary-color);
            height: 2px;
            width: 60%;
            bottom: -24%;
        }
    }
    .waring{
        color: var(--primary-color);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .5rem;
        margin: 1.2rem 0;
        svg{
            width: 20px;
            height: 20px;
        }

    }
`;

const AboutMySelf = styled.div`
    width: 45%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    h6 {
        text-transform: uppercase;
        color: var(--blue);
        margin-bottom: 0.6rem;
    }
    p {
        padding: 0 1rem;
        text-align: center;
        font-size: 0.95rem;
        letter-spacing: 0.1rem;
        color: var(--grey-500);
        line-height: 1.9;
        span {
            color: var(--main);
            font-size: 0.9rem;
        }
    }
`;

const Buttons = styled.div`
    margin-top: 2rem;
    display: flex;
    align-items: center;
    gap: 3rem;
`;

const CVButton = styled.div`
    padding: 1rem 2rem;
    background-color: var(--blue);
    border-radius: 33px;
    border: 2px solid var(--blue);
    color: var(--body-bg);
    cursor: pointer;
    a {
        display: flex;
        align-items: center;
        gap: 1rem;
        span {
            letter-spacing: 0.1rem;
        }
    }
    transition: background color 250ms ease-in-out;
    &:hover {
        background-color: transparent;
        color: var(--main);
    }
`;

const ContactMeButton = styled(CVButton)`
    background-color: transparent;
    color: var(--main);
    &:hover {
        background-color: var(--blue);
        color: var(--body-bg);
    }
`;

const AboutMeCards = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 27% 27%;
    justify-content: center;
    gap: 3rem;
`;

const AboutMeCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1.4rem;
    border: 2px solid var(--grey-300);
    border-radius: 16px;
    padding: 1rem 2rem;
    box-shadow: var(--shadow-1);
`;

const CardTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.7rem;
    color: var(--blue);
    h3 {
        font-family: "Poppins";
        font-weight: 400;
        font-size: 1.2rem;
        letter-spacing: 0.12rem;
    }
    svg {
        width: 22px;
        height: 22px;
    }
`;

const SkillsBars = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 1rem;
`;

const SkillBar = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.4rem;
    span {
        letter-spacing: 0.06rem;
        color: var(--main);
    }
    .langue {
        display: flex;
        justify-content: flex-start;
    }
    .percantage {
        display: flex;
        justify-content: flex-end;
    }
    .learning {
        color: var(--primary-color);
    }
`;

const Bar = styled.div`
    grid-column: 1/3;
    border-radius: 33px;
    width: 100%;
    height: 5px;
    background-color: var(--grey-300);
`;

const BarProgress = styled.div`
    border-radius: 33px;
    width: ${(props) => props.barProgress};
    height: 5px;
    background-color: var(--green);
`;
