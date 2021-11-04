import styled from "styled-components";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase-config";
import { useDispatch, useSelector } from "react-redux";
import { getLoginState, userState } from "../../features/users/usersSlice";
import {Redirect} from "react-router";

function Login() {
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
            <LoginButton onClick={signIn}>Sign In</LoginButton>
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

const LoginButton = styled.button`
    background-color: var(--blue-500);
    color: var(--main);
    width: 300px;
    padding: 0.5rem 0;
    letter-spacing: 0.15rem;
    font-family: "Roboto Mono";
    font-weight: 500;
    border-radius: 15px;

    &:hover {
        opacity: 0.8;
    }
`;
