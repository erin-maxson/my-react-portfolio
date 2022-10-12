import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section id="Contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className="contact_option">
            <h4>Email</h4>
            <h5>erin@cohatch.com</h5>
            <a href="mailto:erin@cohatch.com">Email me here!</a>
          </article>
        </div>
        <form action="">
          <input type='text' name='name' placeholder='Your Full Name Here' required />
          <input type='email' name='email' placeholder='yourname@email.com' required />
          <input type='message' name='message' placeholder='Add your message here' required />
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      </div>
      </section>
  )
}

export default Contact