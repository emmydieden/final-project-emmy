import React from 'react'
import Lottie from "react-lottie"
import AnimationKnife from "/src/assets/lottie-animations/AnimationKnife.json"

export const LoaderKnife = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: AnimationKnife, 
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
    }
  return (
    <Lottie options={defaultOptions} height={250} width={250}/>
  )
}
