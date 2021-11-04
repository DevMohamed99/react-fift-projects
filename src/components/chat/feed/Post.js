import { Avatar } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import {
    ThumbUp,
    ChatBubbleOutline,
    NearMe,
    AccountCircleOutlined,
    BookmarkBorderOutlined,
    LocalOfferOutlined,
    ReportOutlined,
    MoreVert,
} from "@mui/icons-material";
import DropDown from "../../DropDown";

function Post({ profilePic, image, username, timestamp, message, likes, comment }) {
    // Like functions
    const [isLiked, setIsLiked] = useState(false);
    const [like, setLike] = useState(likes);

    const likesHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    };

    const options = [
        {
            id: 1,
            icon: <AccountCircleOutlined />,
            name: "Profile",
            arrow: false,
        },
        {
            id: 2,
            icon: <BookmarkBorderOutlined />,
            name: "Save Post",
            arrow: false,
        },
        {
            id: 3,
            icon: <LocalOfferOutlined />,
            name: "Tag Photo",
            arrow: false,
        },
        {
            id: 4,
            icon: <ReportOutlined />,
            name: "Report Post",
            arrow: false,
        },
    ];

    return (
        <MainPost>
            <TopPost>
                <LeftSide>
                    <Avatar src={profilePic} />
                    <PostInfo>
                        <h3>{username}</h3>
                        <p>{timestamp}</p>
                    </PostInfo>
                </LeftSide>
                <RightSide>
                    <DropDown
                        options={options}
                        width="200px"
                        classNames="top-6 right-0 .shadow-2xl"
                        icon={<MoreVert />}
                        iconWidth="30px"
                        iconHeight="30px"
                    />
                </RightSide>
            </TopPost>
            <CenterPost>
                <p>{message}</p>
                <img src={image} alt="" />
            </CenterPost>
            <BottomPost>
                <Counter>
                    <img src={`/${"assets/heart.png"}`} alt="" className="img1" />
                    <img src={`/${"assets/like.png"}`} alt="" />
                    <span>
                        {like} Likes and {comment} Comments
                    </span>
                </Counter>
                <hr />
                <PostOptins>
                    <PostOption
                        Color={isLiked ? "var(--blue-600)" : "var(--grey-600)"}
                        onClick={likesHandler}>
                        <ThumbUp />
                        <span>Like</span>
                    </PostOption>
                    <PostOption Color="var(--orange)">
                        <ChatBubbleOutline />
                        <span>Comment</span>
                    </PostOption>
                    <PostOption Color="var(--green-dark)">
                        <NearMe />
                        <span>Share</span>
                    </PostOption>
                </PostOptins>
            </BottomPost>
        </MainPost>
    );
}

export default Post;

const MainPost = styled.div`
    width: 100%;
    margin: 2rem 0;
    border-radius: 1rem;
    background-color: var(--body-bg);
    box-shadow: var(--shadow-1);
`;

const TopPost = styled.div`
    padding: 1rem 1.3rem 0;
    display: flex;
    justify-content: space-between;
    gap: 1.2rem;
    align-items: center;
    margin-bottom: 1rem;
`;

const LeftSide = styled.div`
    display: flex;
    align-items: center;
    gap: 0.9rem;
`;

const PostInfo = styled.div`
    font-family: "Roboto Mono";
    letter-spacing: 0.1rem;
    h3 {
        color: var(--grey-700);
    }
    p {
        color: var(--grey-400);
        font-size: 0.9rem;
    }
`;

const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const CenterPost = styled.div`
    p {
        margin: 0.7rem 0;
        color: var(--grey-900);
        font-family: "Inconsolata";
        font-size: 1.2rem;
        padding: 0 1.5rem;
    }
    img {
        width: 100%;
        max-height: 500px;
        object-fit: contain;
    }
`;

const BottomPost = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
    gap: 0.5rem;
    hr {
        width: 95%;
        height: 2px;
        background-color: var(--grey-300);
    }
`;

const Counter = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.2rem;
    padding-left: 1rem;
    img {
        width: 27px;
        height: 27px;
        border-radius: 50%;
        border: 2px solid var(--body-bg);
    }
    span {
        margin-left: 0.4rem;
        font-family: "Poppins";
        font-size: 0.8rem;
        color: var(--grey-500);
        cursor: pointer;
        letter-spacing: 0.05rem;
        &:hover {
            color: var(--grey-700);
        }
    }
    .img1 {
        margin-right: -0.8rem;
        z-index: 1;
    }
`;

const PostOptins = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
`;

const PostOption = styled.div`
    cursor: pointer;
    display: flex;
    gap: 0.6rem;
    align-items: center;
    justify-content: center;
    margin-top: 0.3rem;
    svg {
        width: 22px;
        height: 22px;
        color: ${(props) => props.Color};
    }
    span {
        font-family: "Roboto Mono";
        font-weight: 400;
        font-size: 1rem;
        letter-spacing: 0.1rem;
        color: var(--grey-500);
        color: ${(props) => props.Color};
    }
    /* &:hover span {
        
    } */
`;
