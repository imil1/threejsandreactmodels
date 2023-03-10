import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
    display: flex;
    justify-content: center;

    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`;

const Container = styled.div`
    width: 1040px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;

    @media only screen and (max-width: 768px) {
        width: 100%;
        padding: 20px;
    }
`;

const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;

   
`;

const Logo = styled.img`
    height: 50px;
    border-radius: 15px;
`;

const List = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;

    @media only screen and (max-width: 768px) {
       display: none;
    }
`;

const ListItem = styled.li`
    cursor: pointer;
`;

const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;
const Icon = styled.img`
    height: 18px;
    width: 18px;
    cursor: pointer;
`;
const Button = styled.button`
    padding: 5px 10px;
    background-color: #08a858;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

const Navbar = () => {
    return (
        <Section>
            <Container>
                <Links>
                    <Logo
                        src="./img/logo-atom.svg"
                        style={{ cursor: 'pointer' }}
                    />
                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>Studio</ListItem>
                        <ListItem>Works</ListItem>
                        <ListItem>Contact</ListItem>
                    </List>
                </Links>
                <Icons>
                    <Icon src="./img/search.png" />
                    <Button>Hire Now</Button>
                </Icons>
            </Container>
        </Section>
    );
};

export default Navbar;
