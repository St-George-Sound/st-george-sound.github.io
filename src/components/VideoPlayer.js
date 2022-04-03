import React, { useEffect, useState } from 'react';
import tw, {styled} from "twin.macro";

import firstFrame from "../img/first_frame.jpg";
import videoSmall from "../img/background_480.mov";
import videoLarge from "../img/background_1080.mov";

const VideoContainer = tw.div`
    relative overflow-hidden w-full h-full
`;

const StyledVideo = styled.video(({ isLoaded }) => [
    tw`opacity-0 absolute top-0 left-0 w-full h-full transition-opacity object-cover`,
    isLoaded && tw`opacity-100`
]);

const StyledImage = styled.img(({ isLoaded }) => [
    tw`opacity-100 blur w-full h-full transition-all object-cover`,
    isLoaded && tw`opacity-0`
]);

export const VideoPlayer = React.forwardRef((props, ref) => {
    function InternalVideoPlayer({firstFrame, largeVideo, smallVideo, ...others}) {
        const video = window.innerWidth > 720 ? largeVideo : smallVideo;

        const [isVideoLoaded, setIsVideoLoaded] = useState(false);

        const onVideoLoad = () => {setIsVideoLoaded(true)};

        return (
            <VideoContainer ref={ref}>
                <StyledImage isLoaded={isVideoLoaded} src={firstFrame} />
                <StyledVideo isLoaded={isVideoLoaded} autoPlay muted playsInline loop {...others} src={video} onLoadedData={onVideoLoad} />
            </VideoContainer>
        )
    }

    return <InternalVideoPlayer {...props} />
});

export const TopVideoPlayer = React.memo(() => {
    return <VideoPlayer firstFrame={firstFrame} smallVideo={videoSmall} largeVideo={videoLarge} />
});
