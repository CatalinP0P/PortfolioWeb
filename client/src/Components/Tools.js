import React, {useState} from 'react'
import "./Tools.css";

import csharp from "../Assets/c#.png";
import react from "../Assets/react.png";
import node from "../Assets/node.svg"
import css from "../Assets/css.svg";

import vscode from "../Assets/vscode.svg"
import mysql from "../Assets/mysql.svg";
import git from "../Assets/github.svg";
import figma from "../Assets/github.svg";


export default function Tools() {
    const [tab, setTab] = useState(0);

  return (
    <div className='Tools container-2' >
        <div className='toolsButton' >
            <button className={tab == 0 ? "selected color-black-75" : "color-black-50"} onClick={() => setTab(0)} > Frameworks </button>
            <button className={tab == 1 ? "selected color-black-75" : "color-black-50"} onClick={() => setTab(1)}> Tools </button>
        </div>

        <div className={tab == 0 ? 'itemList' : "hidden"}>
            <div className='item' >
                <img src={node}></img>
                <p> Node.js </p>
            </div>    

            <div className='item' >
                <img src={react}></img>
                <p> React.js </p>
            </div>    

            <div className='item' >
                <img src={csharp}></img>
                <p> .Net </p>
            </div>     
        </div>

        <div className={tab == 1 ? 'itemList' : 'hidden'} >
            <div className='item' >
                <img src={vscode}></img>
                <p> VSCode </p>
            </div> 

            <div className='item' >
                <img src={figma}></img>
                <p> Figma </p>
            </div> 
            
            <div className='item' >
                <img src={mysql}></img>
                <p> MySql </p>
            </div> 
            
            <div className='item' >
                <img src={git}></img>
                <p> GitHub </p>
            </div> 
        </div>
    </div>
  )
}
