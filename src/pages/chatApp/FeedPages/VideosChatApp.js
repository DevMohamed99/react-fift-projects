/* eslint-disable react-hooks/exhaustive-deps */
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import HtmlParser from "react-html-parser";

function VideosChatApp() {
    const pathName = window.location.pathname;

    useEffect(() => {
        if (pathName.includes("/apis-ui/clone-facebook")) {
            document.title = "Facebook-Clone";
        }
    });
    const options = {
        method: "GET",
        url: "https://free-football-soccer-videos.p.rapidapi.com/",
        headers: {
            "x-rapidapi-host": "free-football-soccer-videos.p.rapidapi.com",
            "x-rapidapi-key": "dfa3f8f817msh44335afe7348bd4p1dd844jsn8bec3d861aaf",
        },
    };
    const [video, stateVideo] = useState();
    const fetchFeed = () => {
        axios
            .request(options)
            .then(function (response) {
                console.log(response.data[0]);
                stateVideo(response.data[0].embed);
            })
            .catch(function (error) {
                console.error(error);
            });
    };

    useEffect(() => {
        fetchFeed();
    }, []);
    return <MainVideos>{HtmlParser(video)}</MainVideos>;
}

// function video({ embed }) {
//     return { embed };
// }

export default VideosChatApp;

const MainVideos = styled.div``;
