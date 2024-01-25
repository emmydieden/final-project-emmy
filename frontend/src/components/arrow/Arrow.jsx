import React from 'react'
import Lottie from "react-lottie"
import AnimationArrow from "/public/lottie-animations/AnimationArrow.json"

export const Arrow = ({onClick}) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: AnimationArrow, 
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
    }
  return (
    <Lottie options={defaultOptions} height={50} width={50} onClick={onClick}/>
  )
}
