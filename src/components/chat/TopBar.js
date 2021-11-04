import React from "react";
import styled from "styled-components";
import {
    Home,
    Search,
    Flag,
    SubscriptionsOutlined,
    StoreOutlined,
    SupervisedUserCircle,
    Add,
    Forum,
    NotificationsActive,
    FlagOutlined,
    HomeOutlined,
    SupervisedUserCircleOutlined,
    Subscriptions,
    Store,
    MoreVert,
    ForumOutlined,
    NotificationsActiveOutlined,
    LogoutOutlined,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import DropDown from "../DropDown";
import { Link } from "react-router-dom";
import useBarState from "../Custom/useBarState";
import { useDispatch, useSelector } from "react-redux";
import {
    getActiveMenuItem,
    getAllStates,
    setMenuState,
} from "../../features/components/useMenuState";
import {userLogged} from "../../features/users/usersSlice";

function TopBar() {

    // ? focus element on NavBar
    const dispatch = useDispatch();
    const handle = () => {
        dispatch(userLogged(false));
    };

    // * get all states menu
    const allStatesMenu = useSelector(getAllStates);
    // * get active menu item
    const isActiveMenuItem = useSelector(getActiveMenuItem);
    const payloadState = { activeState: isActiveMenuItem, currentState: "" };
    // ? a function for updating a state menu item
    const changeStateMenu = (state, currentState) => {
        if (!state) {
            payloadState.currentState = currentState;
            dispatch(setMenuState(payloadState));
        }
    };

    const [onSelect, OnSelectHandler, getActiveSelector] = useBarState({
        stateAdd: false,
        stateMessage: false,
        stateNotification: false,
        stateDropDown: false,
    });

    const options = [
        {
            id: 1,
            icon: <LogoutOutlined />,
            name: "LogOut",
            arrow: false,
            click: ()=>{handle()},
            isLink: true,
            linked: "/apis-ui/clone-facebook/home",
        },
      
    ];

    return (
        <NavBar>
            <Left>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                    alt=""
                />
                <SearchBar>
                    <Search />
                    <input type="text" placeholder="Search for posts, friends or places .." />
                </SearchBar>
            </Left>
            <Middle>
                <Link to="/apis-ui/clone-facebook/home">
                    <CenterMenu
                        className={allStatesMenu.stateHome && "topBar-active"}
                        onClick={() => changeStateMenu(allStatesMenu.stateHome, "stateHome")}
                        onfocus={allStatesMenu.stateHome}>
                        {allStatesMenu.stateHome ? (
                            <Home fontSize="large" />
                        ) : (
                            <HomeOutlined fontSize="large" />
                        )}
                    </CenterMenu>
                </Link>

                <Link to="/apis-ui/clone-facebook/pages">
                    <CenterMenu
                        className={allStatesMenu.statePages && "topBar-active"}
                        onClick={() => changeStateMenu(allStatesMenu.statePages, "statePages")}
                        onfocus={allStatesMenu.statePages}>
                        {allStatesMenu.statePages ? (
                            <Flag fontSize="large" />
                        ) : (
                            <FlagOutlined fontSize="large" />
                        )}
                    </CenterMenu>
                </Link>
                <Link to="/apis-ui/clone-facebook/videos">
                    <CenterMenu
                        className={allStatesMenu.stateVideos && "topBar-active"}
                        onClick={() => changeStateMenu(allStatesMenu.stateVideos, "stateVideos")}
                        onfocus={allStatesMenu.stateVideos}>
                        {allStatesMenu.stateVideos ? (
                            <Subscriptions fontSize="large" />
                        ) : (
                            <SubscriptionsOutlined fontSize="large" />
                        )}
                    </CenterMenu>
                </Link>
                <Link to="/apis-ui/clone-facebook/market-place">
                    <CenterMenu
                        className={allStatesMenu.stateMarket && "topBar-active"}
                        onClick={() => changeStateMenu(allStatesMenu.stateMarket, "stateMarket")}
                        onfocus={allStatesMenu.stateMarket}>
                        {allStatesMenu.stateMarket ? (
                            <Store fontSize="large" />
                        ) : (
                            <StoreOutlined fontSize="large" />
                        )}
                    </CenterMenu>
                </Link>
                <Link to="/apis-ui/clone-facebook/friends">
                    <CenterMenu
                        className={allStatesMenu.stateFriends && "topBar-active"}
                        onClick={() => changeStateMenu(allStatesMenu.stateFriends, "stateFriends")}
                        onfocus={allStatesMenu.stateFriends}>
                        {allStatesMenu.stateFriends ? (
                            <SupervisedUserCircle fontSize="large" />
                        ) : (
                            <SupervisedUserCircleOutlined fontSize="large" />
                        )}
                    </CenterMenu>
                </Link>
            </Middle>
            <Right>
                <Link to="/apis-ui/clone-facebook/profile">
                    <Info
                        className={allStatesMenu.stateProfile && "profile"}
                        onfocus={allStatesMenu.stateProfile}
                        onClick={() => changeStateMenu(allStatesMenu.stateProfile, "stateProfile")}>
                        <Avatar />
                        <span>Name Name</span>
                    </Info>
                </Link>
                <IconButton
                    className="active-button"
                    onClick={() => {
                        if (!onSelect.stateAdd) {
                            OnSelectHandler(getActiveSelector(), "stateAdd");
                        }
                    }}>
                    <Add />
                </IconButton>
                <IconButton
                    className="active-button"
                    onClick={() => {
                        if (!onSelect.stateMessage) {
                            OnSelectHandler(getActiveSelector(), "stateMessage");
                        }
                    }}>
                    {onSelect.stateMessage ? <Forum /> : <ForumOutlined />}
                </IconButton>
                <IconButton
                    className="active-button"
                    onClick={() => {
                        if (!onSelect.stateNotification) {
                            OnSelectHandler(getActiveSelector(), "stateNotification");
                        }
                    }}>
                    {onSelect.stateNotification ? (
                        <NotificationsActive />
                    ) : (
                        <NotificationsActiveOutlined />
                    )}
                </IconButton>
                <IconButton
                    className="active-button"
                    onClick={() => {
                        if (!onSelect.stateDropDown) {
                            OnSelectHandler(getActiveSelector(), "stateDropDown");
                        }
                    }}>
                    <DropDown
                        options={options}
                        icon={<MoreVert />}
                        classNames="top-10 -right-2 .shadow-2xl"
                        width="200px"
                        iconHoverColor="var(--blue-600)"
                        iconColor={onSelect.stateDropDown && "var(--blue-600)"}
                    />
                </IconButton>
            </Right>
        </NavBar>
    );
}

export default TopBar;

const NavBar = styled.div`
    height: 40px;
    display: flex;
    gap: 1rem;
    padding: 2rem 1.2rem;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75);
`;

const Left = styled.div`
    display: flex;
    flex: 0.7;
    gap: 2rem;
    img {
        width: 40px;
        height: 40px;
        object-fit: cover;
        cursor: pointer;
    }
`;

const Middle = styled.div`
    display: flex;
    justify-content: center;
    flex: 1.1;
    gap: 1.5rem;
`;

const Right = styled.div`
    flex: 0.7;
    display: flex;
    gap: 0.4rem;
    justify-content: flex-end;
    .active-button {
        padding: 0.6rem 0.8rem;
        color: var(--main);
        &:hover,
        :focus {
            background: var(--grey-300);
            color: var(--blue-500);
        }
    }
    .profile {
        background-color: var(--grey-400);
    }
`;

const SearchBar = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: var(--grey-300);
    padding: 0.65rem 0.75rem;
    border-radius: 33px;
    color: var(--grey-900);
    input {
        outline: none;
        border: none;
        background-color: transparent;
        font-size: 1rem;
        font-family: "Inconsolata";
        font-weight: Bold;
        color: var(--main);
        width: 100%;
    }
    svg {
        font-size: 1.25rem;
        color: var(--main);
    }
`;

const CenterMenu = styled.button`
    display: flex;
    align-items: center;
    cursor: pointer;
    border: none;
    background-color: transparent;
    padding: 0.15rem 1.4rem;
    border-bottom: none;
    position: relative;
    .MuiSvgIcon-root {
        color: ${(props) => (props.onfocus ? "var(--blue-600)" : "var(--main)")};
    }
    &:hover .MuiSvgIcon-root {
        color: var(--blue-600);
    }
`;

const Info = styled.div`
    display: flex;
    align-items: center;
    gap: 0.7rem;
    cursor: pointer;
    padding: 0.35rem 0.7rem;
    border-radius: 23px;
    span {
        color: ${(props) => (props.onfocus ? "var(--body-bg)" : "var(--main)")};
        font-family: "Inconsolata";
        font-weight: 500;
        font-size: 1.2rem;
        letter-spacing: 0.14rem;
    }
    &:hover {
        background-color: var(--grey-400);
        span {
            color: var(--body-bg);
        }
    }
    /* span:after {
        content: "ii";
        height: 3px;
        background-color: var(--blue-600);
        position: absolute;
        left: 0px;
        right: 0px;
        bottom: -6px;
        transform-origin: left center 0px;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        opacity: 0;
        transform: scale(0);
        &:hover {
            
            opacity: 1;
            transform: scale(1);
        }
    } */
`;
