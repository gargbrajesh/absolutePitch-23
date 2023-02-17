import React, { useRef } from "react";
import Image from "next/image";
import useStyles from "../utils/styles.module";
import { useParallax } from "react-scroll-parallax";
import { ParallaxProvider } from 'react-scroll-parallax'
const Home = () => {
    const classes = useStyles();
    const target = useRef(null);
    const train = useParallax({
        speed: 500,
        targetElement: target.current,
      })
    
      const cloud = useParallax({
        speed: 200,
        targetElement: target.current,
      })
  return (
    
    <div className={classes.homeImage} ref={target}>
    <div className="fixed top-10 left-40">
        <Image src="/Slide _16_9.png" height={120} width={120} alt='..' />
      </div>
      <div ref={train.ref} className="absolute"
        style={{
          top: '11vh',
          left: '30vw',
        }}
      >
        <Image src="/HomePage.png" height={350} width={700}  alt='..'/>
      </div>
    </div>
  )
}

export default Home
