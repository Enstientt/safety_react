import React  from 'react'
import Video from '../../videos/video.mp4'
import {HeroCon,HeroBg,VideoB,HeroContent,HeroH1,HeroP,HeroBtn,ArrowForword,ArrowRight} from './HeroEle';
import {Button} from '../ButtonElm'
import { Footer } from '../Sign/signEL';
class Hero extends React.Component{
    constructor(props){
        super(props);
        this.state={
            hover:false
        }
    this.handleHover=this.handleHover.bind(this);    
    }
  handleHover(){
      this.setState({
          hover:true
      })
      
  } 
render(){
    return (
        <HeroCon>
            <HeroBg>
                <VideoB   muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>E-change </HeroH1>
                <HeroP>Sign up and negociate your currency price plus keep updated with market changes</HeroP>
                <HeroBtn>
                    <Button to="signup" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} 
                    primary='true' dark='true'>Get start{this.state.hover ? <ArrowForword />:<ArrowRight />}</Button>
                </HeroBtn>
            </HeroContent>
            <Footer>E-<strong>Change</strong> all the rights are reserved</Footer>
        </HeroCon>

    ) 

}   
}

export default Hero
