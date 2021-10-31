import React from "react";
import styled from "styled-components";
import { Avatar } from "@mui/material";

function Story() {
    return (
        <MainStory>
            <StoryElement
                image="https://cdn.pixabay.com/photo/2020/04/25/13/28/bird-5090810_960_720.jpg"
                profilePicture="/assets/person/1.jpeg"
                Name="Alex Alex"
            />
            <StoryElement
                image="https://cdn.pixabay.com/photo/2021/09/30/18/26/woman-6670772_960_720.jpg"
                profilePicture="/assets/person/3.jpeg"
                Name="Jane Alex"
            />
            <StoryElement
                image="https://cdn.pixabay.com/photo/2020/12/09/21/03/dome-5818581_960_720.jpg"
                profilePicture="/assets/person/2.jpeg"
                Name="Mo Fire"
            />
            <StoryElement
                image="https://cdn.pixabay.com/photo/2011/06/21/14/50/iceland-poppy-8110_960_720.jpg"
                profilePicture="/assets/person/4.jpeg"
                Name="Khalid Khalid"
            />
            <StoryElement
                image="https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014_960_720.jpg"
                profilePicture="/assets/person/5.jpeg"
                Name="Mohamed Mohamed"
            />
        </MainStory>
    );
}

function StoryElement({ image, profilePicture, Name }) {
    return (
        <StoryItems img={image}>
            <Avatar src={profilePicture} />
            <h4>{Name}</h4>
        </StoryItems>
    );
}
export default Story;

const MainStory = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    gap: 1rem;
`;

//  style Story Items
const StoryItems = styled.div`
    width: 170px;
    height: 200px;
    position: relative;
    background-image: url(${(props) => props.img});
    background-position: center center;
    background-size: cover;
    padding: 0.5rem 1.2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    border-radius: 13px;
    cursor: pointer;
    box-shadow: var(--dark-shadow);
    transition: 250ms ease-in;
    transition-property: transform;
    .MuiAvatar-root {
        border: 4px solid var(--blue-500);
        margin: 10px 0;
    }
    &:hover {
        transform: scale(1.07);
    }

    h4 {
        font-family: "Inconsolata";
        font-size: 1rem;
        color: white;
        letter-spacing: 0.05rem;
    }
`;
