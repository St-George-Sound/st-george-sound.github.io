import React from "react";
import tw, { styled } from "twin.macro";
import wide_self from "../img/wide_self.jpg";
import Parallax from "./Parallax";
import Slide from "./Slide";
import { GradientText, Header, LinkButton, StyledLink, Text } from "./Utilities";
import { TopVideoPlayer } from './VideoPlayer';


const HomeContainer = tw.div`
    absolute top-0
`;

const VideoContainer = styled.div`
  height: 100vh;
  overflow: hidden;
`;

const ButtonContainer = tw.div`my-3`;

export default function Home() {
    return (
        <HomeContainer>
            <VideoContainer>
                <TopVideoPlayer />
            </VideoContainer>
            <Slide>
                <Header>What we do</Header>
                <Text>
                    St. George Sound creates premium soundtracks at an accessible price that highlight the style and excellence of your work.
                </Text>
                <Text>
                    We tend to work best in projects with a serious feel, often sci-fi or horror. However, just because you don't fit these areas doesn't mean we wouldn't be excited to work with you!
                    Take a listen to <StyledLink href="#works">our past works</StyledLink> to decide whether our style fits what you're looking for.
                </Text>
                <ButtonContainer>
                    <LinkButton href="#contact">Let's talk</LinkButton>
                </ButtonContainer>
            </Slide>
            <Parallax image={wide_self} $filter>
                <Header noMargin>
                    <GradientText>Let's work together.</GradientText>    
                </Header>    
            </Parallax> 
            <Slide id="contact">
                <Header>Contact</Header>
                <Text>Curious about cost? Want to talk about a project? Send an email to <StyledLink href="mailto:nate@stgeorgesound.com">nate@stgeorgesound.com</StyledLink> or fill out the form below!</Text>

            </Slide>
        </HomeContainer>
    )
}
