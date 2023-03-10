import React from 'react';
import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';

import Mac from './Mac';

const Desc = styled.div`
    max-width: 200px;
    width: 100%;
    height: 70px;
    padding: 10px;
    background-color: #fff;
    border-radius: 10px;
    position: absolute;
    top: 100px;
    right: 100px;
    color: #111;


    @media only screen and (max-width: 768px) {
       top: 0;
       bottom: -200px;
       left: -300px;
       right: 0;
       margin: auto;
       max-width: 150px;
       padding: 20px;
    }
`;

const WebDesign = () => {
    return (
        <>
            <Canvas>
                <Stage
                    environment="city"
                    intensity={0.6}>
                    <Mac />
                </Stage>
                <OrbitControls enableZoom={false} />
            </Canvas>
            <Desc>Hi 👋. This is ThreeJS 3D models</Desc>
        </>
    );
};

export default WebDesign;
