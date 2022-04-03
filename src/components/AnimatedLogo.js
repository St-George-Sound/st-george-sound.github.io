import React from 'react'
import tw from 'twin.macro'
import webmVideo from '../img/logo_animation_dark-vp9-chrome.webm'
import appleVideo from '../img/logo_animation_dark.mov'

const StyledVideo = tw.video`
  w-full max-h-full
`

export default function AnimatedLogo(props) {

  return (
    <StyledVideo autoPlay muted playsInline>
      <source src={appleVideo} type="video/mp4; codecs='hvc1'" />
      <source src={webmVideo} type="video/webm" />
    </StyledVideo>
  )
}
