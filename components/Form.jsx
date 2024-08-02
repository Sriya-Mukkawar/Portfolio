'use client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from 'lucide-react'

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Form = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_wzi0j3b', 'template_9ckyynn', form.current, {
            publicKey: 'j4FXZkGZXY6iHWOSH',
          })
          .then(
            () => {
                toast.success('Email sent successfully!');
              console.log('SUCCESS!');
              e.target.reset();
            },
            (error) => {
                toast.error('Failed to send email. Please try again.');
              console.log('FAILED...', error.text);
            },
          );
      };
    return (
        
        <form ref={form} className='flex flex-col gap-y-4' onSubmit = {sendEmail}>
            <div className='relative flex items-center'>
                <Input type='name' name='user_name' placeholder='Name' />
                <User className='absolute right-6 size-{20}' />
            </div>
            <div className='relative flex items-center'>
                <Input type='email' name='user_email' placeholder='Email' />
                <MailIcon className='absolute right-6 size-{20}' />
            </div>
            <div className='relative flex items-center'>
                <Textarea type='name' name='message' placeholder='Type Your Message Here.' />
                <MessageSquare className='absolute top-4 right-6 size-{20}' />
            </div>
            <Button className='flex items-center gap-x-1 max-w-[166px]'>Let's Talk
                <ArrowRightIcon size={20} />
            </Button>
            <ToastContainer />
        </form>
    )
}

export default Form