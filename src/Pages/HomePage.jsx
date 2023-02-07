import React from 'react'
import '../index.css'
import logo from '../assets/logo.jpg'
import imgPortada from '../assets/bg.jpg'
import Navbar from '../Components/Navbar'

const HomePage = () => {

  return (
    
    <>
      
      <div className="container">

        <div className="container-black">
            <img src={logo} alt="logo" className='logo' />
            <img src={imgPortada} alt="imagen playa buzios" className='portada'/>
            <ul className='redes'>
              <li><a href='#'>Facebook</a></li>
              <li><a href='#'>Instagram</a></li>
            </ul>
        </div>

        <div className="container-white">

          <div className="titles">
            <h1 className='title'>Cantinho Show</h1>
            <h3 className='subtitle'>Departamentos Premium</h3>
            <button className='btn-title'>Contáctame</button>
          </div>

        </div>

        <div className="container-navbar">

            <nav>

              <button className='btn-nav'><a>X</a></button>
              
              <Navbar/>


              <button className='btn-nav'>
                <a className='lang'>Lg</a>
              </button>
              
            </nav>
          </div>

      </div>
      
  </>
  );
}

export default HomePage