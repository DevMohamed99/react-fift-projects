import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Post from "../../../components/chat/feed/Post";
import Share from "../../../components/chat/feed/Share";
import Story from "../../../components/chat/feed/Story";
// import { Posts } from "../../../projects/dataChatPosts";
import db from "../../../firebase-config";
import { onSnapshot, collection } from "firebase/firestore";

function Feed({ customPadding }) {
    const pathName = window.location.pathname;

    useEffect(() => {
        if (pathName.includes("/apis-ui/clone-facebook")) {
            document.title = "Facebook-Clone";
        }
    });
    const [posts, setPosts] = useState([]);

    useEffect(
        () =>
            onSnapshot(collection(db, "posts"), (snapshot) => {
                setPosts(snapshot.docs.map((doc) => doc.data()));
            }),
        []
    );
    console.log(posts);
    return (
        <MainFeed padding={customPadding}>
            <Story />
            <Share />
            {posts &&
                posts.map((post, index) => {
                    return (
                        <Post
                            key={index}
                            profilePic={post.profilePic}
                            image={post.image}
                            username={post.userName}
                            timestamp={post.timestamp}
                            message={post.message}
                            likes={67}
                            comment={8}
                        />
                    );
                })}
        </MainFeed>
    );
}

export default Feed;

const MainFeed = styled.div`
    padding: ${(props) => props.padding};
    overflow-y: scroll;
    scrollbar-width: none;

    /* background-color: var(--primary-700); */
`;

// const CSS = css``;
