import React from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

import Map from './Map';

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
`;
const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    gap: 50px;
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media only screen and (max-width: 768px) {
       justify-content: center;
    }
`;
const Right = styled.div`
    flex: 1;

    @media only screen and (max-width: 768px) {
        display: none;
    }
`;
const Title = styled.h3`
    font-weight: 200;
`;
const Form = styled.form`
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 25px;

    @media only screen and (max-width: 768px) {
        width: 350px;
    }
`;
const Input = styled.input`
    padding: 20px;
    background-color: #f0f0f0;
    border: none;
    border-radius: 5px;
`;
const TextArea = styled.textarea`
    padding: 20px;
    background-color: #f0f0f0;
    border: none;
    border-radius: 5px;
`;
const Button = styled.button`
    background-color: #08a858;
    border: none;
    cursor: pointer;
    color: #fff;
    font-weight: 800;
    border-radius: 13px;
    outline: none;
    padding: 20px;
`;

const Contact = () => {
    const form = React.useRef(null);
    const [success, setSuccess] = React.useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_m4srf0p',
                'template_iv1qlfd',
                form.current,
                'A8jMqxgPTMpE-s_QW'
            )
            .then(
                (res) => {
                    console.log(res.text);
                    setSuccess(true);
                },
                (err) => {
                    console.log(err.text);
                    setSuccess(false);
                }
            );
    };

    return (
        <Section>
            <Container>
                <Left>
                    <Form
                        onSubmit={handleSubmit}
                        ref={form}>
                        <Title>Contact me</Title>
                        <Input
                            placeholder="Name"
                            name="name"
                        />
                        <Input
                            placeholder="Email"
                            name="email"
                        />
                        <TextArea
                            placeholder="Write your message"
                            name="message"
                            rows={10}
                        />
                        <Button type="submit">Send</Button>
                        {success && 'Your message has been sent'}
                    </Form>
                </Left>
                <Right>
                    <Map />
                </Right>
            </Container>
        </Section>
    );
};

export default Contact;
