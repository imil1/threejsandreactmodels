import React from 'react';
import styled from 'styled-components';

import WebDesign from './WebDesign';
import Development from './Development';
import ProductDesign from './ProductDesign';
import Social from './Social';


const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    justify-content: center;
    position: relative;
`;
const Container = styled.div`
    width: 1040px;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 768px) {
        padding: 20px;
        width: 100%;
        flex-direction: column;
    }
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;

    @media only screen and (max-width: 768px) {
        padding: 20px;
        justify-content: center;
        
    }
`;
const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
const ListItem = styled.li`
    font-size: 50px;
    font-weight: 800;
    cursor: pointer;
    color: transparent;
    -webkit-text-stroke: 1px #fff;
    position: relative;

    @media only screen and (max-width: 768px) {
        font-size: 24px;
        color: #FFF;
        -webkit-text-stroke: 0px;
    }

    ::after {
        content: '${(props) => props.text}';
        position: absolute;
        top: 0;
        left: 0;
        color: #18dae0;
        width: 0px;
        overflow: hidden;
        white-space: nowrap;
    }

    &:hover {
        ::after {
            animation: moveText 0.5s linear both;

            @keyframes moveText {
                to {
                    width: 100%;
                }
            }
        }
    }
`;
const Right = styled.div`
    flex: 1;
`;

const data = [
    'Web Design',
    'Development',
    'Illustration',
    'Product Design',
    'Social Media',
];

const Works = () => {
    const [work, setWork] = React.useState('Web Design');
    return (
        <Section>
            <Container>
                <Left>
                    <List>
                        {React.Children.toArray(
                            data.map((item) => (
                                <ListItem
                                    text={item}
                                    onClick={() => setWork(item)}>
                                    {item}
                                </ListItem>
                            ))
                        )}
                    </List>
                </Left>
                <Right>
                    {work === 'Web Design' ? (
                        <WebDesign />
                    ) : work === 'Development' ? (
                        <Development />
                    ) : work === 'Product Design' ? (
                        <ProductDesign />
                    ) : (
                       <Social/> 
                    )}
                </Right>
            </Container>
        </Section>
    );
};

export default Works;
