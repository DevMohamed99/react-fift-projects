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
                <Route path="/clone-facebook">
                    <Switch>
                        <Route path="/clone-facebook/login" component={Login} />
                        <Route path="/clone-facebook/profile">
                            <SwitchPages Component={<ProfileChatApp />} />
                        </Route>
                        <Route exact path="/clone-facebook/home">
                            <SwitchPages Component={<Feed />} />
                        </Route>
                        <Route path="/clone-facebook/friends">
                            <SwitchPages Component={<FriendsChatApp />} />
                        </Route>
                        <Route path="/clone-facebook/market-place">
                            <SwitchPages Component={<MarketChatApp />} />
                        </Route>
                        <Route path="/clone-facebook/videos">
                            <SwitchPages Component={<VideosChatApp />} />
                        </Route>
                        <Route path="/clone-facebook/pages">
                            <SwitchPages Component={<PagesChatApp />} />
                        </Route>
                    </Switch>
                </Route>

                <Route path="/menu">
                    <Menu />
                </Route>
                <Route path="/accordion">
                    <Accordion />
                </Route>
                <Route path="/reviews">
                    <Reviews />
                </Route>
                <Route path="/tours">
                    <Tours />
                </Route>
                <Route path="/birthday-reminder">
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
