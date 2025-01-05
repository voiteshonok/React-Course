import React from 'react';
import styled from 'styled-components';
import homepng from '../../assets/home.png';

const CardContainer = styled.div`
    display: flex;
    margin: 100px 200px;
`;

const Content = styled.div`
    flex: 1;
`;

const Title = styled.div`
    font-family: Inter, sans-serif;
    font-size: 60px;
    font-weight: 400;
    line-height: 60px;
    letter-spacing: 1.8px;
    text-align: left;
`;

const Text = styled.div`
    font-family: Inter, sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 24.12px;
    letter-spacing: 0.36px;
    text-align: left;
    margin: 20px 0;
`;

const Button = styled.button`
    background: #35B8BE;
    color: white;
    border: 1px solid #35B8BE;
    padding: 10px 20px;
    margin: 5px 0;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background: white;
        color: #35B8BE;
    }
`;

const TrustPilot = styled.div`
    margin: 200px 0 10px;
`;

const Stars = styled.div`
    font-family: Inter, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
`;

const Image = styled.img`
    width: 600px;
    height: 580px;
`;

const HomeCard = () => {
    return (
        <CardContainer>
            <Content>
                <Title>
                    Beautiful food & takeaway, delivered to your door.
                </Title>
                <Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.
                </Text>
                <Button>Place an Order</Button>
                <TrustPilot>TrustPilot</TrustPilot>
                <Stars>4.8 out of 5 based on 2000+ reviews</Stars>
            </Content>
            <Image src={homepng} alt='' />
        </CardContainer>
    );
};


export default HomeCard;