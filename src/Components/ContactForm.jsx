// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../Pages/contactpage.css'


function ContactForm() {
  
  const [state, handleSubmit] = useForm("xrgvbpge");
  if (state.succeeded) {
      return <p>Gracias por contactarnos!</p>;
  }

  return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Nombre:
        </label>
        <input
          id="name"
          type="text" 
          name="name"
        />
        <label htmlFor="email">
          Email:
        </label>
        <input
          id="email"
          type="email" 
          name="email"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <label htmlFor="message">
          Escriba su consulta:
        </label>
        <textarea
          id="message"
          name="message"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Enviar
        </button>
    </form>
  );
}
export default ContactForm;