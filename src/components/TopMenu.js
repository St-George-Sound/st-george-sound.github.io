import React, { useEffect, useState } from "react";
import { Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";
import tw, {styled} from "twin.macro";
import { isSafari, isMobile } from "react-device-detect";
import {ReactComponent as AnimatedWordmark} from "../resources/Squarer_animated.svg";
import {ReactComponent as Wordmark} from "../resources/Squarer.svg";
import { StyledLink } from "./Utilities";

const LogoContainer = tw.div`
  max-w-screen-md h-full flex flex-col items-center justify-center
`;

const TopMenuContainer = tw.div`
  top-0 left-0 w-full z-10 fixed p-4 box-border flex flex-row items-center justify-around font-sans text-stone-50 hover:text-stone-400
`;

const TopLink = styled.a(({isVisible}) => [
  tw`text-stone-400 hover:text-stone-50 transition-all text-decoration[none] uppercase display[none] md:display[block] h-4 user-select[none] opacity-0 duration-500 tracking-widest font-weight[300] hi-dpi:font-weight[200]`,
  isVisible && tw`opacity-100`
]);

const LeadLine = styled.div(({isVisible}) => [
  tw`text-stone-300 text-center transition-all duration-700 opacity-0 tracking-extreme font-weight[300] hi-dpi:font-weight[200] py-0 uppercase h-0`,
  isVisible && tw`opacity-100 py-2 h-auto`
])

const LeadStyledLink = styled(StyledLink)(({isVisible}) => [
  tw`transition-all duration-200 opacity-0 font-weight[300] hi-dpi:font-weight[200] p-0 m-0 uppercase h-0 text-center rounded-lg`,
  `backdrop-filter: blur(10px)`,
  isVisible && tw`opacity-100 py-3 px-5 mt-2 h-auto`
])

const StyledWordmark = tw(Wordmark)`
  transition-all
`;

const ExtremeTracking = tw.span`tracking-extreme`;

export default function TopMenu({noAnimate}) {

  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimationDone(true)
    }, 6700)
  });

  return (
    <Scene
      duration={400}
      offset={0}
    >
      {(progress) => (
        <Tween
          to={{
            top: "0px",
            height: "90px",
            backgroundColor: "#1c1917CC",
            backdropFilter: "blur(5px)"
          }}
          from={{
            height: "100vh",
            backgroundColor: "#00000099",
            backdropFilter: isMobile ? "blur(2px)" : "blur(0)"
          }}
          ease="Power3.easeOut"
          totalProgress={noAnimate ? 1 : progress}
          paused
        >
          <TopMenuContainer>
            <TopLink isVisible={noAnimate || progress >= 0.8} href="#">Home</TopLink>
            <TopLink isVisible={noAnimate || progress >= 0.8} href="#">About</TopLink>
            <LogoContainer>
              {
                !animationDone && !isSafari ?
                <AnimatedWordmark />
                :
                <StyledWordmark />
              }
              <LeadLine isVisible={!noAnimate && progress <=0.2}>
                Modern soundtracks & sound design
              </LeadLine>
              <LeadStyledLink href="#works" isVisible={!noAnimate && progress <=0.1}>
                <ExtremeTracking>
                  Liste
                </ExtremeTracking>n
              </LeadStyledLink>
            </LogoContainer>
            <TopLink isVisible={noAnimate || progress >= 0.8} href="#">Works</TopLink>
            <TopLink isVisible={noAnimate || progress >= 0.8} href="#">Contact</TopLink>
          </TopMenuContainer>
        </Tween>
      )}
    </Scene>
  )
}