import React, { useRef, useState } from 'react';
import msgicon from '../assets/myimg/marqee/msg.png';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { CgPhone } from 'react-icons/cg';
import { FaLocationDot, FaArrowRightLong } from 'react-icons/fa6';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      emailjs.sendForm('service_f43v5sr', 'template_6eon2o9', formRef.current, '9KmNbXAlWq3sGn_88')
        .then((result) => {
          console.log('Email sent successfully:', result.text);
          toast.success('Message sent successfully!');
          // Reset form fields after successful submission
          setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
          });
        })
        .catch((error) => {
          console.error('Error sending email:', error);
        });
    } else {
      toast.error('Please fill out all required fields.');
    }
  };

  return (
    <div className='min-h-screen px-5 lg:px-40'>
      <div className='flex justify-center text-[#000F38] text-4xl font-bold'>Get in Touch</div>
      <div className='flex justify-center text-[#0A4B7F] font-semibold'>CONTACT US</div>
      <div className='flex flex-col lg:flex-row mt-10 lg:mt-20'>
        <div className='lg:w-1/2'>
          <div className='flex items-center lg:text-xl font-semibold'>
            Send us a message <img className='w-10 ml-3' src={msgicon} alt='img' />
          </div>
          <div className='opacity-65 lg:mt-4'>
            Feel free to reach out through the contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our health community.
          </div>
          <div className='mt-5 flex flex-col gap-3 items-start'>
            <div className='flex items-center'>
              <BsFillEnvelopeFill size={30} color='#0A4B7F' />
              <span className='ml-2'>swayogya19@gmail.com</span>
            </div>
            <div className='flex items-center mt-3 lg:mt-0'>
              <CgPhone size={30} color='#0A4B7F' />
              <span className='ml-2'>+91 9079938655</span>
            </div>
          </div>
          <div className='mt-5 flex items-start gap-3'>
            <FaLocationDot size={30} color='#0A4B7F' />
            <div>
              Swayogya Rehab Solutions Pvt Ltd, <br />
              Room No 206 (C), School of Chemical Technology, <br />
              KIIT-TBI, KIT University, Bhubaneswar, India
            </div>
          </div>
        </div>

        <div className='lg:w-1/2   lg:ml-20 mt-10  lg:mt-0 text-[#626365]'>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div>Your name</div>
            <input
              className='outline-none bg-[#EBECFE] p-3 rounded-md w-full text-sm mt-2'
              type='text'
              name='name'
              placeholder='Enter your name'
              value={formData.name}
              onChange={handleChange} 
            />
            
            <div className='mt-4'>Phone Number</div>
            <input
              className='outline-none bg-[#EBECFE] p-3 rounded-md w-full text-sm mt-2'
              type='text'
              name='phone'
              placeholder='Enter your mobile number'
              value={formData.phone}
              onChange={handleChange}
            />
            <div className='mt-4'>Your Email</div>
            <input
              className='outline-none bg-[#EBECFE] p-3 rounded-md w-full text-sm mt-2'
              type='text'
              name='email'
              placeholder='Enter your email id'
              value={formData.email}
              onChange={handleChange}
            />
            <div className='mt-4'>Write Your message here</div>
            <textarea
              className='resize-none bg-[#EBECFE] p-3 rounded-md w-full outline-none text-sm mt-2'
              type='text'
              name='message'
              placeholder='Enter your message'
              value={formData.message}
              onChange={handleChange}
            />
            <br />
            <div className='mb-10 lg:mb-0'>
            <button className='mt-6  hover:bg-[#212ea0] bg-[#0A4B7F]  px-5 py-3 ml-24 lg:ml-0 rounded-full flex gap-2 items-center text-white' type='submit'>
              Submit now <FaArrowRightLong color='white' />
            </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer position='bottom-right' autoClose={3000} />
    </div>
  );
};

export default Contact;
