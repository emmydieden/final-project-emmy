import React from 'react'
import Lottie from "react-lottie"
import AnimationFire from "/src/assets/lottie-animations/AnimationFire.json"

export const Spinner = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: AnimationFire, 
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
    }
  return (
  <Lottie options={defaultOptions} height={400} width={400}/>
  )
}
