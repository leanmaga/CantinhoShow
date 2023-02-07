import React from 'react'
import '../index.css'
import logo from '../assets/logo.jpg'
import Navbar from '../Components/Navbar';
import Property from '../Components/Article'
import property1 from '../assets/property1.jpg'
import property2 from '../assets/property2.jpg'

const ProductPage = () => {
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

            <section className='Home_Properties'>
            
              <div className='Home_Properties_List'>
                  <Property 
                      title='Departamento con vista al mar' 
                      image={property1}
                      description='Este hermoso departamento cuenta con vistas panorámicas al mar, una piscina privada y está ubicado a solo unos pasos de la playa. Cuenta con 2 dormitorios, 2 baños y una cocina totalmente equipada.'
                  />
                  <Property 
                      title='Departamento de lujo' 
                      image={property2}
                      description='Este departamento de lujo cuenta con una vista impresionante de la playa, una piscina privada y un amplio balcón con vistas al mar. Cuenta con 3 dormitorios, 3 baños y una cocina totalmente equipada.'
                  />
              </div>
    
            </section>

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

export default ProductPage;