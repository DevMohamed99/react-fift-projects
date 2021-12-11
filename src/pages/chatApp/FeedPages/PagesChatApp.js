import React from "react";
import { useEffect } from "react";

function PagesChatApp() {
    const pathName = window.location.pathname;

    useEffect(() => {
        if (pathName.includes("/apis-ui/clone-facebook")) {
            document.title = "Facebook-Clone";
        }
    });
    return <div>PagesChatApp</div>;
}

export default PagesChatApp;
