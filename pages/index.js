import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import LandingPage from "../src/LandingPage";
import { useEffect, useRef } from "react";
import HomePage from "../src/Home";
import cat from "../public/cat.gif";
// import Walking from "../public/ABSOLUTE_ASSETS/Walking.gif";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// import videoUrl from '../video/homePageVideo.mp4'
import ReactPlayer from "react-player";
export default function Home() {
  // deleteCookie('totileTime');
  const ref = useRef();
  return (
    <Layout>
      {"premium" != true ? (
        <div>
          <LandingPage />
        </div>
      ) : (
        <Parallax
          pages={7}
          ref={ref}
          style={{
            width: "98%",
            marginLeft: "-15px",
            marginTop: "-15px",
            height: "90%",
          }}
        >
          <ParallaxLayer offset={0} speed={1} factor={2}>
            <div className="animation_layer parallax" id="artback"></div>

            {/* <video width="100%" height="100%" preload="auto">
              <source src="https://pixabay.com/videos/christmas-christmas-decorations-141964/" type="video/mp4" />
            </video> */}

          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={1}
            factor={4}
            style={{ marginTop: "-140px" }}
          >
            <div className="animation_layer parallax" id="artback"></div>
          </ParallaxLayer>
          <ParallaxLayer
            sticky={{ start: 0.5, end: 3.5 }}
            style={{ textAlign: "center" }}
          >
            <Image src={cat} alt=".."  height={60} width={60}/>
          </ParallaxLayer>
        </Parallax>
      )}
    </Layout>
  );
}
