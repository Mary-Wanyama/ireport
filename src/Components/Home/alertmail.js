import React, { useRef } from 'react';
import './Contact.css'
// import { RiMessengerLine } from 'react-icons/ri'
// import emailjs from '@emailjs/browser';

const Contact = () => {
;

    return (
        <>
            <section className='grid w-full' id="contact">
                <div className='contact_container'>
                    <form className='contact_form' ref={form} onSubmit={sendEmail}>
                        <input type="text" name="name" placeholder="Your Full Name" required />
                        <input type="email" name="email" placeholder="Your Email" required />
                        <textarea name="message" rows="7" placeholder='Your Message' required />
                        <button type="submit" className='btn btn-primary '>Send Message</button>
                    </form>
                </div>
            </section>
            <FAQ />
        </>
    )
}

export default Contact;
