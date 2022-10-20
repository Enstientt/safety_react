import React from "react";
import Hero from "../component/HeroSection/Hero";
import Navbar from "../component/Navbar/Navbar";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      signIn: false,
      click: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  handleClick() {
    this.setState({
      signIn: !this.state.signIn,
    });
  }

  render() {
    return (
      <>
        <Navbar></Navbar>
        <Hero></Hero>
      </>
    );
  }
}

export default Home;
