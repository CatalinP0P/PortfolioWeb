import React from 'react'
import instagramSVG from "../Assets/instagram.svg";
import githubSVG from "../Assets/github.svg";
import linkedinSVG from "../Assets/linkedin.svg";

export default function Header() {
  const scrollToContact = () =>
  {
    window.scrollTo({
      top: document.getElementsByClassName("contact")[0].offsetTop,
      behavior: "smooth",
    })
  }
  
  const openInstagram = () =>
  {
    window.open("https://www.instagram.com/catalin__pop");
  }

  const openLinkedin = () =>
  {
    window.open("https://www.linkedin.com/in/catalin-pop-7440b0261/");
  }

  const openGithub = () =>
  {
    window.open("https://github.com/CatalinP0P");
  }

  return (
    <div>

        <div className='header container-1'>
            <div className='row headerLeft' >
                <label className='h4Design' >Pop Catalin</label>
                <p className='headerOptionals' > About me </p>
                <p className='headerOptionals' onClick={() => scrollToContact()} > Contact </p>
            </div>
            
            <div className='row headerRight' >
                <p className='color-secondary headerOptionals' > (0746) 816 304 </p>
                <img src={instagramSVG} onClick={() => openInstagram()} ></img>
                <img src={githubSVG} onClick={() => openGithub()}></img>
                <img src={linkedinSVG} onClick={() => openLinkedin()} ></img>
            </div>
        </div>
        <hr className='color-black-25' ></hr>
    </div>
  )
}
