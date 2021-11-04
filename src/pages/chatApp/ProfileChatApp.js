import { Add, EditRounded, Favorite, Home, School, Work } from "@mui/icons-material";
import styled from "styled-components";
import Feed from "./FeedPages/Feed";

function ProfileChatApp() {
    return (
        <MainProfile>
            <TopProfile>
                <CoverImg src={`/${"assets/post/3.jpeg"}`} alt="" />
                <ProfileUserImg src={`/${"assets/person/7.jpeg"}`} />
            </TopProfile>
            <CenterProfile>
                <ProfileInfo>
                    <h4>Youness hassan</h4>
                    <p>
                        Lorem ipsum dolor sit am Lorem ipsum dolor sit am Lorem ipsum d Lorem ipsum
                        dolor sit am Lore
                    </p>
                </ProfileInfo>
                <ProfileSettings>
                    <AddStory>
                        <Add /> Add to Story
                    </AddStory>
                    <EditProfile>
                        <EditRounded /> Edit Profile
                    </EditProfile>
                </ProfileSettings>
            </CenterProfile>
            <BottomProfile>
                <Feed customPadding="2rem 6rem" />
                <Sticky>
                    <AboutUser>
                        <ProfileStates>
                            <h2>About you</h2>
                            <ProfileState>
                                <Home />
                                <span>current Town is Morocco</span>
                            </ProfileState>
                            <ProfileState>
                                <Work />
                                <span>Don't have any job yet</span>
                            </ProfileState>
                            <ProfileState>
                                <Favorite />
                                <span>Single</span>
                            </ProfileState>
                            <ProfileState>
                                <School />
                                <span>Study in university</span>
                            </ProfileState>
                        </ProfileStates>
                        <hr />
                        <FriendsList>
                            <h2>Friends</h2>
                            <Friends>
                                <Friend>
                                    <img src={`/${"assets/person/10.jpeg"}`} alt="" />
                                    <span>Jolie </span> 
                                </Friend>
                                <Friend>
                                    <img src={`/${"assets/person/9.jpeg"}`} alt="" />
                                    <span>Merry</span>
                                </Friend>
                                <Friend>
                                    <img src={`/${"assets/person/8.jpeg"}`} alt="" />
                                    <span>Kitty</span>
                                </Friend>
                                <Friend>
                                    <img src={`/${"assets/person/7.jpeg"}`} alt="" />
                                    <span>Youssef</span>
                                </Friend>
                                <Friend>
                                    <img src={`/${"assets/person/6.jpeg"}`} alt="" />
                                    <span>Shark</span>
                                </Friend>
                                <Friend>
                                    <img src={`/${"assets/person/5.jpeg"}`} alt="" />
                                    <span>Susan</span>
                                </Friend>
                            </Friends>
                        </FriendsList>
                    </AboutUser>
                </Sticky>
            </BottomProfile>
        </MainProfile>
    );
}

export default ProfileChatApp;

const MainProfile = styled.div`
    overflow-y: scroll;
    scrollbar-width: none;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TopProfile = styled.div`
    width: 100%;
    position: relative;
`;

const CoverImg = styled.img`
    width: 100%;
    padding: 0 1rem;
    height: 300px;
    object-fit: cover;
`;

const ProfileUserImg = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: 200px;
    object-fit: cover;
    border: 3px solid var(--body-bg);
`;

const CenterProfile = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    border-bottom: 2px solid var(--grey-300);
    padding-bottom: 2rem;
`;

const ProfileInfo = styled.div`
    width: 50%;
    margin-top: 3.3rem;
    text-align: center;

    h4 {
        font-family: "Montserrat";
        font-size: 2.5rem;
        color: var(--main);
        letter-spacing: 0.1rem;
    }
    p {
        font-family: "Roboto Mono";
        color: var(--grey-600);
    }
`;

const ProfileSettings = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
`;

const AddStory = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    cursor: pointer;
    width: 400px;
    background-color: var(--blue-500);
    padding: 0.5rem 0;
    color: var(--body-bg);
    font-family: "Roboto Mono";
    letter-spacing: 0.15rem;
    font-weight: 500;
    border-radius: 10px;
    svg {
        width: 19px;
        height: 19px;
    }
    &:hover {
        opacity: 0.84;
    }
`;

const EditProfile = styled(AddStory)`
    background-color: var(--grey-400);
    color: var(--main);
`;

const AboutUser = styled.div`
    position: sticky;
    top: 0.01rem;
    padding: 1.3rem;
    border-left: 2px solid var(--grey-300);
    display: flex;
    flex-direction: column;
    align-items: center;
    hr {
        background-color: var(--grey-300);
        height: 2.5px;
        width: 80%;
        margin: 1rem 0;
    }
    h2 {
        font-family: "Montserrat";
        font-weight: 700;
        font-size: 1.3rem;
        letter-spacing: 0.15rem;
        margin-left: 0.1rem;
        margin-bottom: 0.7rem;
    }
`;

const ProfileStates = styled.div`
    width: 100%;
`;

const FriendsList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const ProfileState = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.8rem;
    color: var(--grey-500);
    svg {
        width: 20px;
        height: 20px;
    }
`;

const Friends = styled.div`
    margin-top: 0.3rem;
    border-radius: 10px;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.5rem 0.3rem;
`;
const Friend = styled.div`
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
    cursor: pointer;
    transition: background border-radius 250ms ease-in-out;
    img {
        width: 90px;
        height: 100px;
        object-fit: cover;
        border-radius: 10px;
    }
    span {
        font-size: 0.85rem;
        font-family: "Poppins";
        letter-spacing: 0.1rem;
        color: var(--grey-600);
    }
    &:hover {
        background-color: var(--grey-400);
        border-radius: 10px;
    }
`;

const BottomProfile = styled.div`
    display: grid;
    grid-template-columns: 70% 30%;
`;

const Sticky = styled.div`
    position: relative;
    top: 0px;
`;
