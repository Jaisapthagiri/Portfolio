import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_e3gyc2b',
        'template_xv0ynlh',
        form.current,
        'pFGX6Su7kHFY4M76q'
      )
      .then(
        () => {
          toast.success('Email sent successfully!');
          form.current.reset();
        },
        () => {
          toast.error('Failed to send email. Please try again.');
        }
      );
  };

  return (
    <div className="my-10 mt-10 border rounded-xl max-w-2xl mx-auto p-6 backdrop-blur">
      <form ref={form} onSubmit={handleSubmit} className="flex flex-col items-center text-sm text-blue-800">
        <p className="text-xs bg-indigo-200 text-indigo-600 font-medium px-3 py-1 rounded-full">Contact Us</p>
        <h1 className="text-4xl font-bold py-4 text-center">Let’s Get In Touch.</h1>
        <div className="max-w-96 w-full px-4">
          <label htmlFor="from_name" className="font-medium mt-10">Full Name</label>
          <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-blue-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-400 overflow-hidden">
            <input name="from_name" type="text" className="h-full px-2 w-full outline-none bg-transparent placeholder-slate-400" placeholder="Your Name" required />
          </div>

          <label htmlFor="from_email" className="font-medium mt-4">Email Address</label>
          <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-blue-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-400 overflow-hidden">
            <input name="from_email" type="email" className="h-full px-2 w-full outline-none bg-transparent placeholder-slate-400" placeholder="Your Mail" required />
          </div>

          <label htmlFor="subject" className="font-medium mt-4">Subject</label>
          <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-blue-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-400 overflow-hidden">
            <input name="subject" type="text" className="h-full px-2 w-full outline-none bg-transparent placeholder-slate-400" placeholder="Subject" required />
          </div>

          <label htmlFor="message" className="font-medium mt-4">Message</label>
          <textarea name="message" rows="4" className="w-full mt-2 p-2 bg-transparent border border-blue-300 rounded-lg resize-none outline-none focus:ring-2 focus:ring-indigo-400 placeholder-slate-400" placeholder="Message" required></textarea>

          <button type="submit" className="flex items-center justify-center gap-1 mt-5 bg-indigo-500 hover:bg-indigo-600 text-white py-2.5 w-full rounded-full transition">
            Submit Form
            <svg className="mt-0.5" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="m18.038 10.663-5.625 5.625a.94.94 0 0 1-1.328-1.328l4.024-4.023H3.625a.938.938 0 0 1 0-1.875h11.484l-4.022-4.025a.94.94 0 0 1 1.328-1.328l5.625 5.625a.935.935 0 0 1-.002 1.33" fill="#fff" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
