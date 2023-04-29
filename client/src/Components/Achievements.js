import React from 'react'
import "./Achievements.css";

import medalSVG from "../Assets/medal.svg";
import dotnetSVG from "../Assets/dotnet.svg";
import jsSVG from "../Assets/js.svg";
import oopSVG from "../Assets/oop.svg";

export default function Achievements() {
  return (
    <div className='achievementsArea' >
      <h4 className='color-black-50' > Skills & Achievements </h4>
      <div className='container-2 flexbox-row' >
        <div>
          <img src={medalSVG}></img>
          <p> 1st Place <br/> C# Olympics </p>
        </div>

        <div>
          <img src={oopSVG}></img>
          <p> Great OOP <br/> Knowledge </p>
        </div>

        <div>
          <img src={jsSVG}></img>
          <p> JavaScript <br/> Developer </p>
        </div>

        <div>
          <img src={dotnetSVG}></img>
          <p> Dotnet <br/> Developer </p>
        </div>
      </div>
    </div>
  )
}
