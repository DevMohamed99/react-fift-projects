import React from "react";
import { useEffect } from "react";

function MarketChatApp() {
    const pathName = window.location.pathname;

    useEffect(() => {
        if (pathName.includes("/apis-ui/clone-facebook")) {
            document.title = "Facebook-Clone";
        }
    });
    return <div>MarketChatApp</div>;
}

export default MarketChatApp;
