import React, { useRef } from 'react';
import './Contact.css'
import { HiOutlineMail } from 'react-icons/hi'
import { RiPhoneFill, RiWhatsappLine } from 'react-icons/ri'
import Sidebar from '../SideBar/SideBar';
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
            <Sidebar/>
            <section className='grid w-full' id="contact">
                
                <h2 className='text-green-800 font-bold text-5xl'>Contact Us</h2>
                <div className='w-96 my-6 place-self-center'>
                <h4 className='lorem text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut voluptatum eveniet doloremque autem excepturi eaque, sit laboriosam voluptatem nisi delectus. Facere explicabo hic minus accusamus alias fuga nihil dolorum quae. </h4>
                </div>
                <div className='contact_container'>
                    <div className="contact_options">
                        <article className='contact_option'>
                            <HiOutlineMail className='contact_icon' />
                            <h4>Email Address</h4>
                            <h5>ireporter@gmail.com</h5>
                            <a href="mailto:ireporter@gmail.com" target={'_blank'} rel="noreferrer">Send Message</a>
                        </article>

                        <article className='contact_option'>
                            <RiPhoneFill className='contact_icon' />
                            <h4>Call Us</h4>
                            <h5>iReport</h5>
                            <a href="" target={'_blank'} rel="noreferrer">Send a message</a>
                        </article>

                        <article className='contact_option'>
                            <RiWhatsappLine className='contact_icon' />
                            <h4>WhatsApp</h4>
                            <h5>Lets Talk</h5>
                            <a href="https://api.whatsapp.com/send?phone=+254" target={'_blank'} rel="noreferrer">Send Message</a>
                        </article>
                    </div>

                    <form className='contact_form' ref={form} onSubmit={sendEmail}>
                        <input type="text" name="name" placeholder="Your Full Name" required />
                        <input type="email" name="email" placeholder="Your Email" required />
                        <textarea name="message" rows="7" placeholder='Your Message' required />
                        <button type="submit" className='btn btn-primary '>Send Message</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact;
