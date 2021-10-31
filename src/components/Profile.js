import React from 'react'
import styled from 'styled-components'

function Profile({image, name, age}) {
    return (
        <Container>
            <img src={image} alt="" />
            <IdentifyProfile>
                   <h6>{name}</h6>
                   <span>{age} years</span>
            </IdentifyProfile>
        </Container>
    )
}

export default Profile


const Container =styled.div`
 display: flex;
 height: 70px;
 justify-content: flex-start;
 align-items: center;
 padding-left: 1rem;
 margin-bottom: 1rem;
 img{
     width: 70px;
     height: 70px;
     border-radius: 50%;
     object-fit: cover;
     margin-right: 1rem;
 }
`

const IdentifyProfile = styled.div`
h6{
    margin: 0 0 0.5rem;
    font-family: "Roboto mono";
    font-size: 1rem;
    color: var(--grey-800);
    letter-spacing: 0.05rem;
}
span{
    font-size: 0.9rem;
    color: var(--primary-400);
}
`