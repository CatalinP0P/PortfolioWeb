import React from 'react'
import "./MyWork.css";

import gallery1 from "../Assets/photoGallery1.png";
import gallery2 from "../Assets/photoGallery2.png";
import gallery3 from "../Assets/photoGallery3.png";

export default function MyWork() {
    const openTetris = () =>
    {
        window.open("https://catalinp0p.github.io/TetrisJS/");
    }

    const openFlappybird = () =>
    {
        window.open("https://catalinp0p.github.io/FlappyBirdJS/");
    }

    const openPacman = () =>
    {
        window.open("https://catalinp0p.github.io/PacmanJS/");
    }

    const openMeteo = () =>
    {
        window.open("https://catalinp0p.github.io/WeatherApp/")
    }

    const handleGallery1Click = (e) =>
    {
        var x = e.pageX - e.target.offsetLeft;
        var y = e.pageY - e.target.offsetTop;
        
        var imageHeight = e.target.height;
        var imageWidth = e.target.width;

        if ( y < (16/100) * imageHeight )  
            return; 
        if ( x < (5/100) * imageWidth )
            return;
        if ( x > (95/100) * imageWidth )
            return;
        if ( x > (43/100) * imageWidth && x < (57/100) * imageWidth )
            return;

        if ( x < (25/100) * imageWidth )
            openTetris();
        else if ( x < (45/100) * imageWidth )
            openFlappybird();
        else
            openPacman();
    }

    return (
        <div className='myWork container-1' >
            <h2>My Work</h2>
            <p className='color-black-50' >I specialize in web development with react.js, node.js<br/>and .Net Framework</p>

            <div className='gallery' >
                <h4> JavaScript Games </h4>
                <div>
                    <img src={gallery1} onClick={(e) => handleGallery1Click(e)} ></img>
                </div>
            </div>

            <div className='gallery'>
                <h4> Asp.Net Full Stack Apps </h4>
                <div>
                    <img src={gallery2} ></img>
                </div>
            </div>

            <div className='gallery' >
                <h4> Node.js + React.js + Rest </h4>
                <div>
                    <img src={gallery3} style={{cursor: "pointer"}} onClick={() => openMeteo()} ></img>
                </div>
            </div>
        </div>
    )
}
