import React, { useRef } from 'react';
import './Contact.css'
import { HiOutlineMail } from 'react-icons/hi'
import { RiPhoneFill, RiWhatsappLine } from 'react-icons/ri'
import Sidebar from '../SideBar/SideBar';
import FAQ from './FAQ';
// import { RiMessengerLine } from 'react-icons/ri'
// import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        //     .then((result) => {
        //         console.log(result.text);
        //     }, (error) => {
        //         console.log(error.text);
        //     });

        e.target.reset()
    };

    return (
        <>
            <Sidebar />
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
