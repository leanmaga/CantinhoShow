import React from 'react'
import '../Pages/contactpage.css'
import { useState } from 'react'


const Form = () => {

    const [sent, setSent] = useState(false)
  
   
    
  return (
    <>
        <div id="wrapper">

            <h1 id="tituloconid" className='title'>Envie su consulta</h1>

            <form action="https://formsubmit.co/c8fc63c5f65fee69999c9119fdc949fe" method="POST">

                <label for="nombre">Nombre</label>
                <input type="text" name='name' />
                
                <label for="email">Correo Electrónico</label>
                <input type="email" name='email_replyto' />

                <label for="subject">Asunto</label>
                <input type="text" name='subject' />

                <label for="comments">Comentarios</label>
                <textarea name="comments" id="" cols="30" rows="10">        
                </textarea>

                <input type="submit" value='Enviar'/>

                <input type="hidden" name='_next' value='http://127.0.0.1:5174/contacto'/>
                <input type="hidden" name='_captcha' value='false'/>

            </form>

            

                
            {sent && <p>Mensaje enviado con éxito</p>}

        </div>
        <button>
        <a href="https://form.jotform.com/230154732554654">Complete su consulta aquì</a>
        </button>
         </>
  )
}

export default Form