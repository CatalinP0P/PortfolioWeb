import React from 'react'
import "./App.css";

import Header from './Components/Header';
import Hero from "./Components/Hero";
import Achievements from './Components/Achievements';
import MyWork from './Components/MyWork';
import Tools from "./Components/Tools";
import Info from "./Components/Info";
import Footer from './Components/Footer';

export default function App() {
  return (
    
    <div className='myApp' >
      <Header/>
      <Hero/>
      <Achievements/>
      <MyWork/>
      <Tools/>
      <Info/>
      <Footer/>
    </div>
    
  )
}
