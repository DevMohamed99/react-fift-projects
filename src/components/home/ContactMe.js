import styled from "styled-components";
import * as Unicons from "@iconscout/react-unicons";
import { SectionHeading } from "..";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";

toast.custom();

function ContactMe({ Id }) {
    // const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const sendData = async (data) => {
        await axios
            .post(
                `https://script.google.com/macros/s/AKfycbyq_hHa48hfkAw7ay99RptCvqqg3PJBR8PwhfZt1o2Yg-JmNsrzs3VGV2YvxSFd43UM/exec`,
                data,
                { headers: { "Access-Control-Allow-Origin": "*" } }
            )
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        const postData = "DATA=" + data.fullName + "," + data.email + "," + data.message;
        sendData(postData);
    };

    console.log(errors);

    return (
        <ContactMeMain id={Id}>
            <SectionHeading textHeading="Contact Me" mT="5rem" mB="5rem" />
            <ContactMeContainer>
                <ContactMeBox>
                    <ContactInfo>
                        <ContactTitle>
                            <h3>Get in touch</h3>
                            <p>
                                These are my contact informations you send to me Email message , Whatsapp
                                message or phone Call ...
                            </p>
                        </ContactTitle>
                        <ContactInformations>
                            <ContactInformation>
                                <ContactInfoImage>
                                    <Unicons.UilLocationPinAlt />
                                </ContactInfoImage>
                                <p>Morocco Mohammedia</p>
                            </ContactInformation>
                            <ContactInformation>
                                <ContactInfoImage>
                                    <Unicons.UilEnvelopeShare />
                                </ContactInfoImage>
                                <p>elmoumnymohamed1999@gmail.com</p>
                            </ContactInformation>
                            <ContactInformation>
                                <ContactInfoImage>
                                    <Unicons.UilPhoneVolume />
                                </ContactInfoImage>
                                <p>+212690322618</p>
                            </ContactInformation>
                        </ContactInformations>
                    </ContactInfo>
                    <ContactForm>
                        <h3>Contact Me</h3>
                        <ContactFullDetails onSubmit={handleSubmit(onSubmit)}>
                            <FullNameInput className="fullName">
                                <Unicons.UilUser />
                                <hr />
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    {...register("fullName", { required: "Full Name is required" })}
                                />
                            </FullNameInput>
                            <EmailInput className="email">
                                <Unicons.UilEnvelope />
                                <hr />
                                <input
                                    type="email"
                                    placeholder="example@gmail.com"
                                    {...register("email", { required: "Email is required" })}
                                />
                            </EmailInput>

                            <textarea
                                placeholder="What's in your mind ..."
                                type="text"
                                maxrows="5"
                                {...register("message", { required: "Message is required" })}
                            />
                            <ContactSendMessage>
                                <span>Send</span>
                            </ContactSendMessage>
                        </ContactFullDetails>
                    </ContactForm>
                </ContactMeBox>
            </ContactMeContainer>
        </ContactMeMain>
    );
}

export default ContactMe;

const ContactMeMain = styled.div``;

const ContactMeContainer = styled.div`
    width: 100%;
    padding: 13.5rem 4rem 8rem;
    position: relative;
    &:after,
    &:before {
        position: absolute;
        content: "";
        width: 100%;
        z-index: -1;
        left: 0;
    }
    &:before {
        top: 0;
        height: 40%;
        background: url("https://raw.githubusercontent.com/sefyudem/portfolio-website/main/img/map.png")
            center center / cover;
    }
    &:after {
        top: 40%;
        height: 60%;
        background: url("https://raw.githubusercontent.com/sefyudem/portfolio-website/main/img/contact-bg.png")
            center bottom / cover;
    }
`;

const ContactMeBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: flex-start;
    gap: 0 4rem;
    width: 100%;
    padding: 5.5rem 4.5rem;
    border-radius: 45px;
    background-color: var(--grey-200);
    box-shadow: var(--dark-shadow);
`;

const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
`;

const ContactTitle = styled.div`
    h3 {
        font-family: "Montserrat";
        font-weight: 500;
        font-size: 1.7rem;
        position: relative;
        color: var(--orange-clr);
        &:after {
            content: "";
            width: 15%;
            height: 3px;
            background-color: var(--blue);
            display: flex;
        }
    }
    p {
        margin-top: 1rem;
        color: var(--grey-500);
    }
`;

const ContactForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h3 {
        font-family: "Montserrat";
        font-weight: 500;
        font-size: 1.7rem;
        color: var(--orange-clr);
    }
`;

const ContactInformations = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    color: var(--grey-500);
`;

const ContactInformation = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    p {
        font-size: 1.1rem;
        letter-spacing: 0.12rem;
    }
`;

const ContactInfoImage = styled.div`
    background-color: var(--blue);
    border-radius: 50%;
    padding: 0.7rem;
    min-height: 47px;
`;

const ContactFullDetails = styled.form`
    display: grid;
    grid-template-columns: repeat(1, minmax(200px, 1fr));
    gap: 0.7rem;
    .fullName,
    .email,
    .phone,
    textarea {
        display: flex;
        align-items: center;
        gap: 0.7rem;
        padding: 0.6rem 1rem;
        border-radius: 23px;
        border: 2px solid var(--grey-300);
        background-color: var(--input-clr-bg);
        transition: background-color border 250ms ease-in-out;
        &:hover,
        &:focus-within {
            background-color: var(--grey-200);
            border-color: var(--blue);
        }
    }
    .input-sty,
    .slc-country {
        border: none;
        background-color: transparent;
    }
    .input-sty {
        height: auto;
    }
    .slc-country {
        border: none;
        .selected-flag:hover,
        .selected-flag:focus {
            background-color: transparent;
        }
    }
    .btn-country {
    }
    hr {
        height: 60%;
        width: 2px;
        background-color: var(--grey-400);
    }
    input {
        background-color: transparent;
    }

    input,
    textarea {
        width: 100%;
        outline: none;
        &::placeholder {
            letter-spacing: 0.12rem;
        }
    }

    textarea {
        resize: none;
        scrollbar-width: none;
        height: 150px;
    }
    .checked {
        border: 2px solid var(--green);
    }
    .not-checked {
        border: 2px solid var(--red-dark);
    }
`;

const FullNameInput = styled.div``;

const EmailInput = styled.div``;

const ContactSendMessage = styled.button`
    cursor: pointer;
    text-align: center;
    background-color: var(--orange-clr);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    color: var(--grey-600);
    margin-top: 1rem;
    span {
        font-size: 1.1rem;
        letter-spacing: 0.12rem;
    }
`;
