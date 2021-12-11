import React from "react";
import { useEffect } from "react";

function FriendsChatApp() {
    const pathName = window.location.pathname;

    useEffect(() => {
        if (pathName.includes("/apis-ui/clone-facebook")) {
            document.title = "Facebook-Clone";
        }
    });
    return <div>FriendsChatApp</div>;
}

export default FriendsChatApp;
