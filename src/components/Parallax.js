import React from 'react';
import { isMobile } from 'react-device-detect';
import { Tween } from 'react-gsap';
import { Scene } from 'react-scrollmagic';
import tw, { styled } from "twin.macro";

const ParallaxContainer = tw.div`
    height[300px] relative overflow-hidden
`

const Image = styled.div(({ $filter, src }) => [
    `background-image: url(${src});`,
    tw`absolute background-size[cover] w-full background-position[80% 30%] bg-no-repeat h-auto z-0 min-height[450px]`,
    $filter && tw`opacity-50`,
    isMobile && tw``
]);

const ContentContainer = tw.div`
    w-full h-full flex items-center justify-start md:justify-center p-3 z-10 absolute
`;

const Content = styled.div([
    tw`p-5 rounded-2xl flex flex-col items-center justify-center bg-stone-800 bg-opacity-30 max-w-min`,
    `backdrop-filter: blur(5px);`
]);

export default function Parallax({height, image, $filter, children, ...others}) {

    return (
        <ParallaxContainer>
            <Scene duration="200%" triggerHook="onEnter">
                <Tween
                    position="0"
                    from = {{
                        yPercent: -50 
                    }}
                    to = {{
                        yPercent: 0
                    }}
                >
                    <Image src={image} $filter/>
                </Tween>
            </Scene>
            <ContentContainer>
                <Content>
                    {children}
                </Content>
            </ContentContainer>
        </ParallaxContainer>
    )

}