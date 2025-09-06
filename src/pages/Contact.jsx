import React from 'react';
import { useRef } from 'react';
import Navbar from '../components/Navbar'
import emailjs from '@emailjs/browser'
import CommissionStatus from '../components/CommissionStatus';



export default function Contact () {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        // console.log(form.current)
        emailjs.sendForm(
            'service_nj0xhy1',
            'template_dwms63k',
            form.current,
            'M1uv4rOE-7cagbIqw'
        )
        .then(
            (result) => {
                alert('Message sent!');
            },
            (error) => {
                alert('Something went wrong.');
            }
        );
    }

    return(
        <>
            <div className="bg-lime-100 font-display py-20 text-center">
                <header className="text-4xl font-extrabold mb-4">
                    Have a question or want to place an order?
                </header>
                <h2>
                    Contact me below!
                </h2>
            </div>
            <div className="flex items-center flex-col" >
                <CommissionStatus />
                <div className="bg-lime-100 min-w-100 rounded-3xl shadow m-10 p-10 text-center">
                    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 mx-auto p-4 justify-center">
                        <input type="text" name="user_name" placeholder="Your Name" required className="border p-2 min-w-100 rounded" />
                        <input type="text" name="email" placeholder="Your Email" required className="border p-2 rounded" />
                        <textarea name="message" placeholder="Your Message" required className="border p-2 rounded min-h-50" />
                        <button type="submit" className="bg-emerald-400 text-white py-2 px-4 rounded">Send</button>
                    </form>
                </div>
            </div>

{/* 
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 max-w-md mx-auto p-4">
                <input type="text" name="user_name" placeholder="Your Name" required className="border p-2 rounded" />
                <input type="email" name="user_email" placeholder="Your Email" required className="border p-2 rounded" />
                <textarea name="message" placeholder="Your Message" required className="border p-2 rounded" />
                <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Send</button>
            </form> */}
        </>
    );
}