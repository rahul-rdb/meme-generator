import React from 'react'
import trollFace from "../images/Troll Face.png"
export default function Header() {
  return (
    <div className='container'>
        <img src={trollFace} alt="trollFace" className='header--image'/>
        <h1 className='header--title'>Meme Generator</h1>
        <h2 className='header--project'>React Course Project-3</h2>
    </div>
  )
}
