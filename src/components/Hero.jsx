import React from 'react';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial, Sphere } from '@react-three/drei';

import Navbar from './Navbar';

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 768px) {
        height: 200vh;
    }
`;
const Container = styled.div`
    height: 100%;
    scroll-snap-align: center;
    max-width: 1040px;
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 50px;
    }
`;
const Left = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;


    @media only screen and (max-width: 768px) {
        flex: 1;
        align-items: center;
    }
`;
const Title = styled.h1`
    font-size: 64px;

    @media only screen and (max-width: 768px) {
        text-align: center;
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

    @media only screen and (max-width: 768px) {
        padding: 20px;
        text-align: center;
        
    }
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
    flex: 3;
    position: relative;
    @media only screen and (max-width: 768px) {
        flex: 1;
        width: 100%;

    }
`;
const Img = styled.img`
    max-width: 800px;
    width: 100%;
    height: 300px;
    object-fit: contain;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    animation: animate 2s infinite ease alternate;

    @media only screen and (max-width: 768px) {
        width: 300px;
        height: 300px;
    }

    @keyframes animate {
        100% {
            transform: translateY(30px);
        }
    }
`;

const Hero = () => {
    return (
        <Section>
            <Navbar />
            <Container>
                <Left>
                    <Title>Think. Make. Solve.</Title>
                    <WhatWeDo>
                        <Line src="./img/line.png" />
                        <Subtitle>what we do</Subtitle>
                    </WhatWeDo>
                    <Desc>
                        we enjoy creating, heman-centered digital experiences
                    </Desc>
                    <Button>learn more</Button>
                </Left>
                <Right>
                    <Canvas>
                        <OrbitControls enableZoom={false} />
                        <ambientLight intensity={1} />
                        <directionalLight position={[5, 6, 4]} />
                        <Sphere
                            args={[1, 100, 200]}
                            scale={2.5}>
                            <MeshDistortMaterial
                                color="#190529"
                                attach="material"
                                distort={0.5}
                                speed={2}
                            />
                        </Sphere>
                    </Canvas>
                    <Img src="./img/avtobot.png" />
                </Right>
            </Container>
        </Section>
    );
};

export default Hero;
