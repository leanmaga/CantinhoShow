import React from 'react';
import '../Pages/productpage.css'

function Property(props) {
  return (
    <article className='container-card'>
       <div className='element1'>
          <img src={props.image} alt={props.title}/>
        </div>
        <div className="element2">  
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <button className='Property_Details'>Ver detalles</button>
        </div>
    </article>
  );
}

export default Property;
