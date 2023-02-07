import React from 'react'
import '../index.css'
import logo from '../assets/logo.jpg'
import Navbar from '../Components/Navbar';

const AboutPage = () => {
  return (
    <>
      
      <div className="container">

        <div className="container-black">
            <img src={logo} alt="logo" className='logo' />
            <div className="titles-product">
                <h1 className='title'>Cantinho Show</h1>
                <h3 className='subtitle'>Departamentos Premium</h3>
                <button className='btn-title'>Contáctame</button>
            </div>
            <ul className='redes-product'>
              <li><a href='#'>Facebook</a></li>
              <li><a href='#'>Instagram</a></li>
            </ul>
        </div>

        <div className="container-white">

            

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

export default AboutPage