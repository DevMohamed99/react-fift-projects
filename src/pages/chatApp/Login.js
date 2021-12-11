import styled from "styled-components";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase-config";
import { useDispatch, useSelector } from "react-redux";
import { getLoginState, userState } from "../../features/users/usersSlice";
import { Redirect } from "react-router";
import { useEffect } from "react";

function Login() {
    const pathName = window.location.pathname;

    useEffect(() => {
        if (pathName.includes("/apis-ui/clone-facebook")) {
            document.title = "Facebook-Clone";
        }
    });
    const isLoggedIn = useSelector(getLoginState);
    const dispatch = useDispatch();
    const user = auth.currentUser;
    const userDetails = {
        isLogged: false,
        name: "Anonymous",
        profilePic: "",
    };

    const signIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                userDetails.isLogged = true;
                userDetails.name = user.displayName;
                userDetails.profilePic = user.photoURL;
                console.log(userDetails);
                dispatch(userState(userDetails));
            })
            .catch((error) => {});
    };
    if (isLoggedIn) {
        return <Redirect to="/apis-ui/clone-facebook/home" />;
    }
    return (
        <MainLogin>
            <Logo>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                    alt=""
                />
                <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="" />
            </Logo>
            <LoginButton onClick={signIn}>
                <img src="/images/google.png" alt="" />
                <span>Sign In With Google</span>
            </LoginButton>
        </MainLogin>
    );
}

export default Login;

const MainLogin = styled.div`
    margin: 0 auto;
    display: grid;
    place-items: center;
    height: 100vh;
    width: 90vw;
`;

const Logo = styled.div`
    display: flex;
    flex-direction: column;
    img {
        object-fit: contain;
        height: 150px;
    }
`;

const LoginButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    border: 2px solid var(--main);
    cursor: pointer;
    padding: 0.5rem 4rem;
    border-radius: 23px;
    transition: background-color border color 250ms ease-in-out;
    img {
        width: 30px;
        height: 30px;
    }
    span {
        color: var(--main);
        letter-spacing: 0.15rem;
        font-family: "Roboto Mono";
        font-weight: 500;
    }
    &:hover {
        border-color: var(--main);
        background-color: var(--main);
        span {
            color: var(--body-bg);
        }
    }
`;
