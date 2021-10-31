import React from "react";
import styled from "styled-components";
import Post from "../../../components/chat/feed/Post";
import Share from "../../../components/chat/feed/Share";
import Story from "../../../components/chat/feed/Story";
import { Posts } from "./dataChatPosts";

function Feed() {
    return (
        <MainFeed>
            <Story />
            <Share />
            {Posts &&
                Posts.map((post, index) => {
                    return (
                        <Post
                            key={index}
                            profilePic="/assets/person/3.jpeg"
                            image={`/${post.photo}`}
                            username="Mohamed"
                            timestamp={post.date}
                            message={post.desc}
                            likes={post.like}
                            comment={post.comment}
                        />
                    );
                })}
        </MainFeed>
    );
}

export default Feed;

const MainFeed = styled.div`
    padding: 2rem 9rem;
    overflow-y: scroll;
    scrollbar-width: none;
    
    
    /* background-color: var(--primary-700); */
`;

// const CSS = css``;
