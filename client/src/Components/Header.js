import React from 'react'
import instagramSVG from "../Assets/instagram.svg";
import githubSVG from "../Assets/github.svg";
import linkedinSVG from "../Assets/linkedin.svg";

export default function Header() {
  return (
    <div>

        <div className='header container-1'>
            <div className='row headerLeft' >
                <label className='h4Design' >Pop Catalin</label>
                <p className='headerOptionals'> About me </p>
                <p className='headerOptionals' > Contact </p>
            </div>
            
            <div className='row headerRight' >
                <p className='color-secondary headerOptionals' > (0746) 816 304 </p>
                <img src={instagramSVG}></img>
                <img src={githubSVG} ></img>
                <img src={linkedinSVG} ></img>
            </div>
        </div>
        <hr className='color-black-25' ></hr>
    </div>
  )
}
