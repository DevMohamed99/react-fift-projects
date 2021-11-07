import styled from "styled-components";
import { SectionHeading } from "..";

function ContactMe({ Id }) {
    return (
        <ContactMeMain id={Id}>
            <SectionHeading textHeading="Contact Me" mT="5rem" mB="5rem" />
        </ContactMeMain>
    );
}

export default ContactMe;

const ContactMeMain = styled.div``;
