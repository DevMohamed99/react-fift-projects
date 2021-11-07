import styled from "styled-components";

function customImg({image}) {
    return (
        <>
            <ImageStyling src={image} />
        </>
    )
}

export default customImg

// TODO: Styling image
const ImageStyling = styled.img`

`