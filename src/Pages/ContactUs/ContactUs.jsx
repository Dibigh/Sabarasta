import React from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import star from '../../Logo/star.svg';
import greenLine from '../../Logo/greenline.svg';
import styles from './ContactUs.module.css';

function ContactUs() {
  return (
    <>
     <div className={styles.bodyContainer}>
      <span id = {styles.starDoodle}>
        <img src={star} alt = 'starDoodle'/>
        
      </span>
        <h1>Connect With Us: Let's Start a</h1>
          <h1>Conversation.<span className={styles.UnderlineText}><img className={styles.underLine} src={greenLine} alt='GreenLine'/></span></h1>
        <p>We're here to listen, collaborate, and help you achieve your goals. Reach out today to get started. </p>
        <div className={styles.DropDown}>
          <div className={styles.row}>
            
            <div className = {styles.column1}><input type='text' placeholder='Enter your name *'></input></div>
            <div className = {styles.column1}><input type='text' placeholder='Enter your phone number *'></input></div>
            </div>
            <div className={styles.row}>
            <div className = {styles.column1}><input type='text' placeholder='Enter your Email ID *'></input></div>
            <div className = {styles.column1}><input type='text' placeholder='Select your budget in USD *'></input></div>
          </div>
           <div className={styles.row}>
            <div className = {styles.column1}><input type='dropdown' placeholder='When do you want to start *'></input><span><RiArrowDropDownLine /></span></div>
            <div className = {styles.column1}><input type='dropdown' placeholder='How did you hear about us *'></input><span><RiArrowDropDownLine /></span></div>
          </div>
           <div className={styles.row}>
            <div id = {styles.ColumnBig}><input type='text' className={styles.inputF}></input><div className={styles.Placeholder}>About your Project *</div><center><p>By proceeding, you are agreeing to Sabrasta’s privacy policy & communication</p></center></div>
          </div>
        </div>
        <button>Send Enquiry</button>
        </div>
    </>
  )
}

export default ContactUs