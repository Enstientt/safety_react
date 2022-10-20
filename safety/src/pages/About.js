import React from "react";
import { Button } from "../component/ButtonElm";
import { HeroBg, HeroBtn, HeroCon, HeroContent, HeroH1, HeroP, VideoB } from "../component/HeroSection/HeroEle";
import Navbar from "../component/Navbar/Navbar";
import { Footer } from "../component/Sign/signEL";
import Video from '../videos/prod.mp4'

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroCon>
            <HeroBg>
                <VideoB   muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <h1>here is the about title</h1>
                <h3>e-change safety is about exchange and egociate your price <br /> with the agencies that provide the nicer price</h3>
            </HeroContent>
            <Footer>E-<strong>Change</strong> all the rights are reserved</Footer>
        </HeroCon>
    </div>
  );
};

export default About;
