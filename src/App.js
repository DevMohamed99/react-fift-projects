import React from "react";
import { Home } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
    BirthdayReminder,
    Tours,
    Reviews,
    Accordion,
    Menu,
    Login,
    Feed,
    ProfileChatApp,
    FriendsChatApp,
    VideosChatApp,
    MarketChatApp,
    PagesChatApp,
    SwitchPages,
} from "./pages";

function App() {
    return (
        <Router>
            <Switch>
                {/*  all about facebook app */}
                <Route path="/apis-ui/clone-facebook">
                    <Switch>
                        <Route path="/apis-ui/clone-facebook/login" component={Login} />
                        <Route path="/apis-ui/clone-facebook/profile">
                            <SwitchPages Component={<ProfileChatApp />} />
                        </Route>
                        <Route exact path="/apis-ui/clone-facebook/home">
                            <SwitchPages Component={<Feed customPadding="2rem 9rem" />} />
                        </Route>
                        <Route path="/apis-ui/clone-facebook/friends">
                            <SwitchPages Component={<FriendsChatApp />} />
                        </Route>
                        <Route path="/apis-ui/clone-facebook/market-place">
                            <SwitchPages Component={<MarketChatApp />} />
                        </Route>
                        <Route path="/apis-ui/clone-facebook/videos">
                            <SwitchPages Component={<VideosChatApp />} />
                        </Route>
                        <Route path="/apis-ui/clone-facebook/pages">
                            <SwitchPages Component={<PagesChatApp />} />
                        </Route>
                    </Switch>
                </Route>
                <Route path="/ui">
                    <Route path="/ui/login"></Route>
                    <Route path="/ui/sign-in"></Route>
                    <Route path="/ui/login-sign-in"></Route>
                </Route>
                <Route path="/basic/menu">
                    <Menu />
                </Route>
                <Route path="/basic/accordion">
                    <Accordion />
                </Route>
                <Route path="/basic/reviews">
                    <Reviews />
                </Route>
                <Route path="/basic/tours">
                    <Tours />
                </Route>
                <Route path="/basic/birthday-reminder">
                    <BirthdayReminder />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
