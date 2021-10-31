import React, { useState } from "react";
import styled from "styled-components";
import dataMenu from "../../projects/dataMenu";

function Menu() {
    const [menu, setMenu] = useState(dataMenu);

     
   // console.log(dataMenu.filter((data)=> data.category === "lunch"));

    function newData(menuItem) {
        if(menuItem === "all"){
            return setMenu(dataMenu);
        }
        if(menuItem === "breakfast"){
            return setMenu(dataMenu.filter((data)=> data.category === menuItem))
        }
        if(menuItem === "lunch"){
            return setMenu(dataMenu.filter((data)=> data.category === menuItem));
        }
        if(menuItem === "shakes"){
            return  setMenu(dataMenu.filter((data)=> data.category === menuItem));
        }
    }
    return (
        <Main>
            <Container>
                <Header>
                    <h2>our menu</h2>
                    <TitleUnderLine />
                </Header>
                <MenuItems>
                    <MenuItem onClick={() => newData("all")}>all</MenuItem>
                    <MenuItem onClick={() => newData("breakfast")}>breakfast</MenuItem>
                    <MenuItem onClick={() => newData("lunch")}>lunch</MenuItem>
                    <MenuItem onClick={() => newData("shakes")}>shakes</MenuItem>
                </MenuItems>
                <Items>
                   {
                       menu.length > 0 && menu.map((item , index) => (
                        <Item key={index}>
                        <img src={item.img} alt="" />
                        <Desc>
                            <HeaderItem>
                                <h3>{item.title}</h3>
                                <span>${item.price}</span>
                            </HeaderItem>
                            <p>
                                {item.desc}
                            </p>
                        </Desc>
                    </Item>
                       ))
                   }
                </Items>
            </Container>
        </Main>
    );
}

export default Menu;

const Main = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    overflow-y: scroll;
`;

const Container = styled.div`
    width: 90vw;
    max-width: 1170px;
    @media (max-width: 780px) {
        width: 90vw;
    }
`;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 5rem;
    margin-bottom: 2.5rem;
    h2 {
        margin: 0;
        text-transform: capitalize;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
            Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        color: var(--grey-800);
        font-size: 2.5rem;
        text-transform: capitalize;
    }
`;

const TitleUnderLine = styled.div`
    width: 100px;
    height: 4px;
    background-color: #c59d5f;
    margin-top: 0.3rem;
`;

const MenuItems = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;
`;

const MenuItem = styled.button`
    color: #c59d5f;
    font-size: 1.3rem;
    font-family: "Inconsolata", "Helvetica Neue", sans-serif;
    text-transform: capitalize;
    padding: 0.375rem 0.75rem;
    margin: 0 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    transition: 250ms linear;
    background-color: transparent;
    border: none;
    &:hover,&:focus {
        color: white;
        background-color: #c59d5f;
        transition-property: background-color, color;
    }
    
`;

const Items = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 3rem;
    margin-bottom: 3rem;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`;

const Item = styled.div`
    display: grid;
    grid-template-columns: 225px 1fr;
    max-width: 40rem;
    gap: 1.5rem;
    img {
        height: 150px;
        width: 100%;
        object-fit: cover;
        border: 3px solid #c59d5f;
        display: block;
        border-radius: 5px;
        box-shadow: var(--shadow-1);
    }
    @media (max-width: 780px) {
        flex-direction: column;
        img {
            height: 200px;
        }
    }
`;

const Desc = styled.div`
    p {
        margin-top: 1.4rem;
        font-size: 0.9rem;
        line-height: 1.2;
        font-family: "Roboto Mono";
        color: var(--grey-500);
    }
`;

const HeaderItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: "Roboto Mono";
    color: #c59d5f;

    border-bottom: 0.5px dotted black;
    h3 {
        margin: 0;
        text-transform: capitalize;
        color: var(--grey-700);
        font-size: 0.85rem;
        letter-spacing: 0.1rem;
        margin-bottom: 0.5rem;
    }
    span {
        font-size: 1rem;
        margin-bottom: 0.5rem;
    }
`;
