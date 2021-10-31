import styled from "styled-components";
import { TopBar, LeftSide, RightSide } from "../../components";
import { getLoginState } from "../../features/users/usersSlice";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

function SwitchPages({ Component }) {
    const isLoggedIn = useSelector(getLoginState);
    const pathname = window.location.pathname;
    if (!isLoggedIn) {
        return <Redirect to="/clone-facebook/login" />;
    }
 
    if(isLoggedIn) {
        return (
            <Main>
                <TopBar />
                <Page pathname={pathname}>
                    <LeftSide />
                    {Component}
                    <RightSide pathname={pathname} />
                </Page>
            </Main>
        );
    }
    }
    

export default SwitchPages;

const Main = styled.main`
    height: 100vh;
`;

const Page = styled.div`
    width: 100vw;
    display: grid;
    height: calc(100vh - 40px);
    grid-template-columns: ${(props) =>
        props.pathname === "/clone-facebook/profile" ? "16% 84%" : "16% 64% 20%"};
`;
