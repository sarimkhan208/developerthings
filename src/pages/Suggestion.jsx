import React, { useState } from 'react'
import './suggestion.css'
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import { AiOutlineQuestion } from "react-icons/ai";
import emailjs from '@emailjs/browser';
import { FiUser } from "react-icons/fi";
import { Loading } from '../components/Loading';
import { AlertBox } from '../components/AlertBox';
import { SuccessfullBox } from '../components/SuccessfullBox';
export const Suggestion = () => {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [websiteLink,setWebsiteLink] = useState('')
    const [message,setMessage] = useState('')
    const [isLoading,setIsLoading] = useState(false)
    const [isAlertBox,setIsAlertBox] = useState(false)
    const [isSuccessfull,setIsSuccessfull] = useState(false)



    const serviceId = 'service_f0h5weu'
    const templateId = 'template_fytidyn'
    const publicKey = 'Q9V_qbTaHbuGv5a4i'

    const handleSubmit = (e)=>{
        e.preventDefault();
        setIsLoading(true)
        const templateParams = {
            from_name : name,
            from_email : email,
            website_link : websiteLink,
            message : message
        }
        if(name.length==0 || email.length==0 || websiteLink.length==0){
            setIsAlertBox(true)
            setIsLoading(false)
            setTimeout(()=>{
                setIsAlertBox(false)
            },3000)
        }else{
            emailjs.send(serviceId,templateId,templateParams,publicKey)
            .then((res)=>{

                console.log('email sent successfully',res)
                setEmail('')
                setMessage('')
                setName('')
                setWebsiteLink('')
                setIsLoading(false)
                setIsSuccessfull(true)
                setTimeout(()=>{
                    setIsSuccessfull(false)
                },3000)
            })
            .catch((err)=>console.log('error ',err))
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e);
        }
    };
  return (
    <div className='w-[100%] relative ' >
    <div className='w-[90%] tablet:w-[65%] laptop:w-[35%] mx-auto pt-[50px] font-montserret ' >
        <div className='absolute top-1 right-1  '  >
            {
                isAlertBox?<div  data-aos={'fade-left'}><AlertBox/></div>:''
            }
        </div>
        <div className='absolute top-1 right-1  '  >
            {
                isSuccessfull?<div  data-aos={'fade-left'}><SuccessfullBox/></div>:''
            }
        </div>
        {
            isLoading?<Loading/>:
            <form onSubmit={handleSubmit} className="form_main">
                <p className="text-[#263238] text-center text-[16px] tablet:text-[18px] laptop:text-[24px] font-[700] z-30 ">Any Good Website from Your Side</p>
                <p className="text-[#263238] text-center text-[12px] tablet:text-[13px] laptop:text-[14px] font-[500] z-30 mb-[30px] ">We'll add that with mentioning your name 🥳</p>
            
                <div className="inputContainer">
                    <span className="inputIcon"><FiUser /></span>
                <input type="text" className="inputField" id="username" placeholder="Your Name" value={name} onChange={(e)=>setName(e.target.value)} />
                </div>
        
                
                <div className="inputContainer">
                    <span className="inputIcon"><MdOutlineAlternateEmail /></span>
                    <input type="email" className="inputField" id="password" placeholder="Your Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>


                <div className="inputContainer">
                    <span className="inputIcon"><FaLink /></span>
                    <input type="text" className="inputField" id="password" placeholder="Website link" value={websiteLink} onChange={(e)=>setWebsiteLink(e.target.value)} />
                </div>


                <div className="inputContainer">
                    <span className="absolute text-[14px] top-[10px] left-[3px] "><AiOutlineQuestion /></span>
                    <textarea rows="4"  type="text" className="textArea" id="password" value={message} placeholder="If any explanation" onChange={(e)=>setMessage(e.target.value)} />
                </div>
            
                <button onKeyPress={handleKeyPress} id="button">Submit</button>
            </form>
        }
    </div>
    </div>

  )
}
