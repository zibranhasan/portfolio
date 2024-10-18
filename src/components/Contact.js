import React from 'react';
//motion
import {motion} from 'framer-motion';
//variants
import { fadeIn} from '../variants';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_iqx7h8f', 'template_bwnqijd', form.current, 'wgPW2M5_TFkXUoVWb')
      .then((result) => {
          console.log(result.text);
          alert("successful")
      }, (error) => {
          console.log(error.text);
      });
  };




  return (
  <section className='mt-15 py-16 lg:section' id='contact'>
   <div className='container mx-auto mt-25'>
<div className='flex flex-col lg:flex-row'>
  {/* text */}
  <motion.div variants={fadeIn('right', 0.3)} 
        initial="hidden" whileInView={'show'} 
        viewport={{once:false, amount:0.2}}  className='flex-1 flex justify-start items-center'>
    <div>
      <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide '>Get in touch</h4>
      <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's work <br /> together!
      </h2>
    </div>
  </motion.div>
  {/* form */}
  <motion.form 
  action='https://formspree.io/f/xrgvjbzb' method='POST'
  ref={form} onSubmit={sendEmail} 
  variants={fadeIn('left', 0.3)} 
        initial="hidden" whileInView={'show'} 
        viewport={{once:false, amount:0.2}}   className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
   <input 
   className='bg-transparent border-b py-3 outline-none w-full 
   placeholder:text-white focus:border-accent transition-all' 
   type="text" 
   placeholder='Your name' 
   name="user_name"
   />
   <input 
   className='bg-transparent border-b py-3 outline-none w-full 
   placeholder:text-white focus:border-accent transition-all' 
   type="email" 
   placeholder='Your email' 
   name="user_email"
   />
    <textarea  className='bg-transparent border-b py-12 outline-none w-full 
   placeholder:text-white focus:border-accent transition-all
   resize-none mb-12'
   placeholder='Your message'
   name="message"
   ></textarea>

<input className='btn btn-lg' type="submit" value="Send" />
    </motion.form>
</div>
   </div>
    </section>);
};

export default Contact;

