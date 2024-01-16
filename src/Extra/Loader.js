import React from 'react'
import Loader_image from '../assets/image/Header_logo.png'

function Loader() {
  return (
    <>
      <div id="loading-wrapper">
        <div id="loading-text">
        <img src={Loader_image} alt="Loade_image" />
        </div>
        <div id="loading-content"></div>
      </div>
    </>
  )
}

export default Loader
