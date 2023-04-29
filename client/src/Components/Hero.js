import React from 'react'
import "./Hero.css";
import downSVG from "../Assets/downarrow.svg";

export default function Hero() {
  const handleScroll = () =>
  {
    window.scrollTo({
      top: document.getElementsByClassName("myWork")[0].offsetTop,
      behavior: "smooth",
    });
  }

  return (
    <div className='heroArea container-2' >
        <h4 className='color-primary' > Hi there! </h4>
        <h3> I'm Pop Catalin. </h3>
        <p className='color-black-50' >I am a self-taught web developer who’s looking for endless improvement.<br/>Welcome to my portfolio web page</p>
        <button className='btn btn-primary bg-gradient' onClick={() => handleScroll()} >
          see my work
          <img src={downSVG} ></img>
        </button>
    </div>
  )
}
