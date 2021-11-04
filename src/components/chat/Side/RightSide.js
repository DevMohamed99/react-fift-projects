import React from "react";
import styled from "styled-components";


function RightSide({ pathname }) {
    return (
        <MainRightSide pathname={pathname}>
            <RSHeader>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
                    />
                </svg>
                <h3>Online Friends</h3>
            </RSHeader>
            <FriendsList>
                <OnlineFriend>
                    <img src={`/${"assets/person/4.jpeg"}`} alt="" />
                    <span>Sara Jon</span>
                </OnlineFriend>
                <OnlineFriend>
                    <img src={`/${"assets/person/5.jpeg"}`} alt="" />
                    <span>Niha Khalid</span>
                </OnlineFriend>
                <OnlineFriend>
                    <img src={`/${"assets/person/6.jpeg"}`} alt="" />
                    <span>Saad Cool</span>
                </OnlineFriend>
                <OnlineFriend>
                    <img src={`/${"assets/person/4.jpeg"}`} alt="" />
                    <span>Sara Jon</span>
                </OnlineFriend>
                <OnlineFriend>
                    <img src={`/${"assets/person/5.jpeg"}`} alt="" />
                    <span>Niha Khalid</span>
                </OnlineFriend>
                <OnlineFriend>
                    <img src={`/${"assets/person/6.jpeg"}`} alt="" />
                    <span>Saad Cool</span>
                </OnlineFriend>
                <OnlineFriend>
                    <img src={`/${"assets/person/4.jpeg"}`} alt="" />
                    <span>Sara Jon</span>
                </OnlineFriend>
                <OnlineFriend>
                    <img src={`/${"assets/person/5.jpeg"}`} alt="" />
                    <span>Niha Khalid</span>
                </OnlineFriend>
                <OnlineFriend>
                    <img src={`/${"assets/person/6.jpeg"}`} alt="" />
                    <span>Saad Cool</span>
                </OnlineFriend>
                <OnlineFriend>
                    <img src={`/${"assets/person/4.jpeg"}`} alt="" />
                    <span>Sara Jon</span>
                </OnlineFriend>
                <OnlineFriend>
                    <img src={`/${"assets/person/5.jpeg"}`} alt="" />
                    <span>Niha Khalid</span>
                </OnlineFriend>
                <OnlineFriend>
                    <img src={`/${"assets/person/6.jpeg"}`} alt="" />
                    <span>Saad Cool</span>
                </OnlineFriend>
                <OnlineFriend>
                    <img src={`/${"assets/person/4.jpeg"}`} alt="" />
                    <span>Sara Jon</span>
                </OnlineFriend>
                <OnlineFriend>
                    <img src={`/${"assets/person/5.jpeg"}`} alt="" />
                    <span>Niha Khalid</span>
                </OnlineFriend>
                <OnlineFriend>
                    <img src={`/${"assets/person/6.jpeg"}`} alt="" />
                    <span>Saad Cool</span>
                </OnlineFriend>
               
            </FriendsList>
        </MainRightSide>
    );
}

export default RightSide;

const MainRightSide = styled.div`
    display: ${(props) => props.pathname === "/apis-ui/clone-facebook/profile" && "none"};
    flex-direction: column;
    padding: 1rem 1.1rem 0;
    overflow-y: scroll;
    scrollbar-width: none;
    border-left: 2px solid var(--grey-300);
`;

const RSHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
    svg {
        color: var(--grey-600);
    }
    h3 {
        font-family: "Roboto Mono";
        font-weight: 500;
        letter-spacing: 0.1rem;
        color: var(--blue-500);
    }
`;

const FriendsList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    margin-bottom: 2rem;
`;

const OnlineFriend = styled.div`
    width: 100%;
    padding: 0.6rem 1rem;
    border-radius: 30px;
    display: flex;
    align-items: center;
    position: relative;
    gap: 1rem;
    cursor: pointer;
    img {
        width: 35px;
        height: 35px;
        object-fit: cover;
        border-radius: 50%;
    }
    span {
        font-family: "Inconsolata";
        font-weight: 400;
        letter-spacing: 0.19rem;
        font-size: 1.05rem;
        color: var(--main);
    }
    &:after {
        content: "";
        position: absolute;
        border-radius: 50%;
        width: 10px;
        height: 10px;
        background-color: var(--green);
        top: 10px;
        left: 42px;
    }
    &:hover {
        background-color: var(--grey-300);
    }
`;
