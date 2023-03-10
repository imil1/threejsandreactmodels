import React from 'react';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Cube from './Cube';

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    justify-content: center;
`;
const Container = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    max-width: 1040px;
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 768px) {
        padding: 20px;
    }
`;
const Left = styled.div`
    flex: 1;

    @media only screen and (max-width: 768px) {
        display: none;
    }
`;
const Title = styled.h1`
    font-size: 64px;

    @media only screen and (max-width: 768px) {
        font-size: 52px;
    }
`;
const WhatWeDo = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;
const Line = styled.img`
    height: 5px;
    width: 20px;
`;
const Subtitle = styled.h2`
    text-transform: capitalize;
    color: #08a858;
`;
const Desc = styled.p`
    text-transform: capitalize;
    font-size: 24px;
    color: lightcyan;
`;
const Button = styled.button`
    background-color: #08a858;
    color: #fff;
    text-transform: capitalize;
    font-size: 16px;
    font-weight: 500;
    max-width: 150px;
    width: 100%;
    padding: 10px 15px;
    border: none;
    border-radius: 13px;
    cursor: pointer;
`;
const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    @media only screen and (max-width: 768px) {
        align-items: center;
        text-align: center;
    }
`;

const Who = () => {
    return (
        <Section>
            <Container>
                <Left>
                    <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
                        <OrbitControls enableZoom={false} />
                        <ambientLight intensity={1} />
                        <directionalLight position={[3, 2, 1]} />
                        <Cube />
                    </Canvas>
                </Left>
                <Right>
                    <Title>Think outside the square space</Title>
                    <WhatWeDo>
                        <Line src="./img/line.png" />
                        <Subtitle>who we are</Subtitle>
                    </WhatWeDo>
                    <Desc>
                        a creative group of designers and developers with a
                        passion for the art
                    </Desc>
                    <Button>See our works</Button>
                </Right>
            </Container>
        </Section>
    );
};

export default Who;
