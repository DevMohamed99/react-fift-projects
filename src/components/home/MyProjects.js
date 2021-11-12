import styled from "styled-components";
import { CustomHeight, SectionHeading } from "..";
import dataImageBP from "../../projects/dataImageBP";
import dataImageAP from "../../projects/dataImageAP";
import ImgSlider from "../ImgSlider";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNavBarHeightState, setNavBarHeight } from "../../features/components/useActiveNav";

function MyProjects({ Id }) {
    const dispatch = useDispatch();
    const reduxHeight = useSelector(getNavBarHeightState);
    const payload = { stateName: "Projects", stateHeight: 0 };
    const { observe, height } = CustomHeight();

    useEffect(() => {
        if (height !== reduxHeight.Projects) {
            payload.stateHeight = height;
            dispatch(setNavBarHeight(payload));
        }
    });

    return (
        <MyProjectsMain ref={observe} id={Id}>
            <SectionHeading
                textHeading="Projects"
                mT="3rem"
                clrFront="var(--body-bg)"
                clrBack="1.5px var(--grey-700)"
            />
            <ProjectContainer>
                <HeaderTitle>
                    <h2>apis/UI projects</h2>
                    <TitleUnderLine />
                </HeaderTitle>
                <ImgSlider data={dataImageAP} numbToShow={3} showUp={false} />
                <HeaderTitle>
                    <h2>basic projects</h2>
                    <TitleUnderLine />
                </HeaderTitle>
                <ImgSlider data={dataImageBP} numbToShow={3} showUp={false} />
            </ProjectContainer>
        </MyProjectsMain>
    );
}

export default MyProjects;

const MyProjectsMain = styled.div`
    background-color: var(--main);
    padding-top: 0.2rem;
`;

const ProjectContainer = styled.div``;

const HeaderTitle = styled.div`
    overflow: visible;
    padding-top: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
    h2 {
        margin: 0;
        font-family: "Inconsolata", monospace;
        text-transform: capitalize;
        letter-spacing: 0.12rem;
        font-size: 2rem;
        font-weight: 400;
        color: var(--orange-clr);
    }
    @media (max-width: 600px) {
        padding-top: 1.5rem;
        h2 {
            font-size: 1.4rem;
        }
        div {
            width: 95px;
        }
    }
`;

const TitleUnderLine = styled.div`
    background-color: var(--primary-design);
    width: 140px;
    height: 3px;
    margin-top: 0.8rem;
`;
