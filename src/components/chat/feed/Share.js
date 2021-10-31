import styled from "styled-components";
import { PermMedia, EmojiEmotions, Videocam, Send } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

function Share() {
    const [inputValue, setInputValue] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        setInputValue("");
        setImageUrl("");
    };

    return (
        <MainShare>
            <ShareTop>
                <Avatar src="/assets/person/2.jpeg" />
                <form>
                    <TextareaAutosize
                        placeholder="What's in your mind ..."
                        value={inputValue}
                        type="text"
                        onChange={(e) => setInputValue(e.target.value)}
                        className="input1"
                        rows="1"
                    />
                    <TextareaAutosize
                        placeholder="image Url ..."
                        value={imageUrl}
                        type="text"
                        onChange={(e) => setImageUrl(e.target.value)}
                        className="input2"
                    />
                    <button onClick={handleSubmit} className="bg-blue-700 py-1 px-3" type="submit">
                        <Send />
                    </button>
                </form>
            </ShareTop>
            <ShareBottom>
                <ShareOptions Color="var(--red-dark)">
                    <Videocam />
                    <span>Live Video</span>
                </ShareOptions>
                <ShareOptions Color="var(--green-dark)">
                    <PermMedia />
                    <span>Photo/Video</span>
                </ShareOptions>
                <ShareOptions Color="var(--gold-clr)">
                    <EmojiEmotions />
                    <span>Feelling</span>
                </ShareOptions>
            </ShareBottom>
        </MainShare>
    );
}

export default Share;

const MainShare = styled.div`
    background-color: var(--body-bg);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 1.3rem;
    border-radius: 10px;
    box-shadow: var(--shadow-1);
`;

const ShareTop = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 2rem;
    gap: 1rem;
    form {
        display: flex;
        gap: 0.7rem;
        width: 100%;
    }
    textarea {       
        background-color: var(--grey-200);
        padding: 0.9rem 1.3rem;
        scrollbar-width: none;
        outline: none;
        resize: none;
        border-radius: 13px;
        font-size: 1rem;
        font-family: "Inconsolata";
        font-weight: Bold;
        color: var(--grey-500);
        box-shadow: var(--shadow-1);
        &::placeholder {
            color: var(--grey-500);
        }
    }
    button {
        display: none;
    }
    .input1{
        flex: 1.4;
    }
    .input2{
        flex: 0.5;
    }
`;

const ShareBottom = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: space-around;
    border-top: 2px solid var(--grey-300);
    width: 90%;
    padding-top: 0.65rem;
`;

const ShareOptions = styled.div`
    display: flex;
    align-items: center;
    gap: 0.7em;
    cursor: pointer;
    span {
        color: var(--grey-600);
        font-family: "Inconsolata";
        font-weight: 100;
        letter-spacing: 0.1rem;
    }
    .MuiSvgIcon-root {
        width: 25px;
        height: 25px;
        color: ${(props) => props.Color};
    }
    span:hover {
        color: ${(props) => props.Color};
    }
`;