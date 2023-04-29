import React from 'react'
import "./MyWork.css";

import gallery1 from "../Assets/photoGallery1.png";
import gallery2 from "../Assets/photoGallery2.png";

export default function MyWork() {
  return (
    <div className='myWork container-1' >
        <h2>My Work</h2>
        <p className='color-black-50' >I specialize in web development with react.js, node.js<br/>and .Net Framework</p>

        <div className='gallery' >
            <h4> JavaScript Games </h4>
            <div>
                <img src={gallery1} ></img>
            </div>
        </div>

        <div className='gallery'>
            <h4> Asp.Net Full Stack Apps </h4>
            <div>
                <img src={gallery2} ></img>
            </div>
        </div>
    </div>
  )
}
