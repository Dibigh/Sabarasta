import React from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import star from '../../Logo/star.svg';
import greenLine from '../../Logo/redLine.svg';
import styles from './ContactUs.module.css';
import bubbles from '../../Logo/Bubbles.svg'
import { useEffect, useState,useRef } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget:'',
    start:'',
    info:'',
    message:'',
  });
  const [errors, setErrors] = useState({});

const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
     const validateForm = () => {
    let formErrors = {};
    if(formData.name='') 
      formErrors.name = "Name is required !";
    if(!formData.email) {
      formErrors.email = "Email is required !";;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email="Email is invalid !";
    }
    if(formData.phone.length!=10)
    {
      formErrors.phone='Invalid Phone number !';
    }
    if(formData.budget<500)
    {
      formErrors.budget='Budget must be greater than 500$ !';
    }
    if (!formData.message) 
    formErrors.message = "Message is required !";
    return formErrors;
  };
  const handleSubmit = async (e) => {
        e.preventDefault();
       const validationErrors = validateForm();
      if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
      }
      setErrors({});
      validateForm();
        try {
            const response = await fetch('http://localhost:5000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (data.success && Object.keys(errors).length === 0 ) {
                alert('Email sent successfully!');
                  setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  budget:'',
                  start:'',
                  info:'',  
                  message:'',
                  });
            } else {
                alert('Error sending email');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
  return (
    <>
     <form className={styles.bodyContainer} onSubmit={handleSubmit}>
        <h1>Connect With Us: Let's Start a</h1>
        <h1>Conversation.<span className={styles.UnderlineText}><img className={styles.underLine} src={greenLine} alt='GreenLine'/></span></h1>
        <p>We're here to listen, collaborate, and help you achieve your goals. Reach out today to get started.</p><img src={bubbles} className={styles.bubbly}></img>
        <div className={styles.DropDown}>
          <div className={styles.row}>
            <div className = {styles.column1}><input type='text' placeholder='Enter your name *' name="name" value={formData.name} onChange={handleChange}/>123123</div>{errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
            <div className = {styles.column1}><input type='text' placeholder='Enter your phone number *' name='phone' value={formData.phone} onChange={handleChange}/></div>
            </div>
            <div className={styles.row}>
            <div className = {styles.column1}><input type='text' placeholder='Enter your Email ID *' name='email' value={formData.email} onChange={handleChange}/></div>
            <div className = {styles.column1}><input type='text' placeholder='Your budget in USD *' name='budget' value={formData.budget} onChange={handleChange}/></div>
          </div>
           <div className={styles.row}>
              <div className = {styles.column1}>
              <select className={styles.DropMenu} name ='start' value={formData.start} onChange={handleChange}>
                 <option value="Option1">When do you want to start *</option>
                 <option value="Start in a month">Start in a month</option>
                 <option value="Engage immediately">Engage immediately</option>
                 <option value="start in a week">start in a week</option>
              </select>
              </div>
               <div className = {styles.column1}>
              <select className={styles.DropMenu} name ='info' value={formData.info} onChange={handleChange}>
                 <option value="how do you hear about us" >How do you hear about us</option>
                 <option value="Referral" >Referral</option>
                 <option value="Google/Search" >Google/Search</option>
                 <option value="Awards" >Awards</option>
                 <option value="Social Media" >Social Media</option>
                 <option value="Recommended by friends">Recommended by friends</option>
              </select>
              </div>
          </div>
              <div className={styles.row}>
              <div id = {styles.ColumnBig}><textarea type='text' placeholder="About your Project *" className={styles.inputF} name='message' value ={formData.message} rows='200' onChange={handleChange}></textarea><div className={styles.Placeholder}></div><center><p>By proceeding, you are agreeing to Sabrasta’s privacy policy & communication</p></center></div>
          </div>
        </div>
        <button type= "submit" className={styles.sendEnquiry} onClick={()=>{console.log('button pressed')}}>Send Enquiry</button>
      </form>
    </>
  )
}

export default ContactUs