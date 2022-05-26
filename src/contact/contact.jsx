import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
const contact = () => {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          

          <article className='contact_option'> 
            <AiOutlineMail className='contact_option-icon'/> 
            <h4>E-mail</h4>
            <h5>neseilhannn@gmail.com</h5>
            <a href='mailto:neseilhannn@gmail.com'> Send a message.</a>
            </article>

            <article className='contact_option'>
            <AiOutlineLinkedin className='contact_option-icon'/> 
            <h4>Linkedin</h4>
            <h5>Nese İlhan</h5>
            <a href='https://www.linkedin.com/in/nese-ilhan-0343b818a/'> Send a message.</a>
            </article>

                  
            <article className='contact_option'>     
            <BsWhatsapp className='contact_option-icon'/> 
            <h4>Phone</h4>
            <h5>0555 123 45 67</h5>
            <a href='https://wa.me/905551234567'>Send a message.</a>
            </article>
           
            </div>
            

           
           <article className='contact_options'>
           <form>
           
             <input type="text" name="name" placeholder="Your full name" required/>
             <input type="email" name="email" placeholder="Your email" required/>
             <textarea name="message" rows="4" placeholder="Your messaage"></textarea>
             <button type="submit" className='btn btn-primary'> Send Message </button>
             
           </form>
           </article>

</div>
         

     
    </section>
  )
}

export default contact