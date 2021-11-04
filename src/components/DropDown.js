import { ArrowForwardIosOutlined } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import OutsideClickHandler from "react-outside-click-handler";

function DropDown({
    options,
    onfocus = false,
    classNames,
    icon,
    width,
    iconWidth,
    iconHeight,
    iconHoverColor,
    iconColor,
}) {
    

    const [dropDown, setDropDown] = useState(false);
    const handlerDropDownArrow = () => {
        setDropDown(!dropDown);
    };
    return (
        <MainDropDown>
            <OutsideClickHandler onOutsideClick={() => setDropDown(false)}>
                <IconDropDown
                    onClick={handlerDropDownArrow}
                    iconWidth={iconWidth}
                    iconHeight={iconHeight}
                    iconHoverColor={iconHoverColor}
                    iconColor={dropDown && iconColor}>
                    {icon}
                </IconDropDown>            
            {dropDown && (
                <DropDownList Width={width} className={classNames}>
                    {options &&
                        options.map((option, index) => (
                            <DropDownItem key={option.id} onClick={option.click} >
                                {option.isLink ? (
                                    <Link to={option.linked}>
                                        {option.icon}
                                        <span>{option.name}</span>
                                    </Link>
                                ) : (
                                    <>
                                        {option.icon}
                                        <span>{option.name}</span>
                                    </>
                                )}
                                {option.arrow && <ArrowForwardIosOutlined className="arrowRight" />}
                            </DropDownItem>
                        ))}
                </DropDownList>
            )}
            </OutsideClickHandler>
        </MainDropDown>
    );
}

export default DropDown;

const MainDropDown = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
`;

const IconDropDown = styled.div`
    display: flex;
    justify-content: flex-end;
    transition: svg 350ms ease-in-out;
    svg {
        width: ${(props) => props.iconWidth};
        height: ${(props) => props.iconHeight};
        cursor: pointer;
        color: ${(props) => props.iconColor};
        &:hover {
            color: ${(props) => props.iconHoverColor};
        }
    }
`;

const DropDownList = styled.ul`
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    position: absolute;
    width: ${(props) => props.Width};
    background-color: var(--body-bg);
    border-radius: 13px;
`;

const DropDownItem = styled.li`
    padding: 0.7rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    color: var(--main);
    border-radius: 13px;
    cursor: pointer;
    transition: background 250ms ease-in-out;
    a {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        margin-right: 0.4rem;
    }
    svg {
        width: 25px;
        height: 25px;
    }
    span {
        font-size: 1rem;
        letter-spacing: 0.07rem;
    }
    .arrowRight {
        width: 18px;
        height: 18px;
        cursor: pointer;
    }
    &:hover {
        background-color: var(--grey-300);
    }
`;
