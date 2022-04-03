import React from "react";
import tw, {styled} from "twin.macro";
import { Scene } from "react-scrollmagic";

const StyledSlide = tw.div`
    bg-stone-900 px-4 py-8 md:py-16 md:px-64 text-stone-50 font-sans relative
`;

const GradientCover = styled.div(({ isHidden }) => [
    tw`bg-gradient-to-t from-stone-900 via-stone-900 absolute top-0 bottom-0 left-0 right-0 transition-opacity duration-500 pointer-events-none`,
    isHidden && tw`opacity-0`
]);

export default function Slide({children}) {
    return (
        <StyledSlide>
            <Scene duration={1000}>
                {progress => (
                    <GradientCover isHidden={true} />
                )}
                
            </Scene>
            {children}
        </StyledSlide>
    )
}