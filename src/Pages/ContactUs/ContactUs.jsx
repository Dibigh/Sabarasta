import React from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import star from '../../Logo/star.svg';
import greenLine from '../../Logo/redLine.svg';
import styles from './ContactUs.module.css';
import bubbles from '../../Logo/Bubbles.svg'
import { useEffect, useState,useRef } from "react";

function ContactUs() {
  //  const [result, setResult] = React.useState("");

  // const onSubmit = async (event) => {
  //   event.preventDefault();
  //   setResult("Sending....");
  //   const formData = new FormData(event.target);

  //   formData.append("access_key", "10e5b3c1-57a8-4902-b261-723a971465fa");

  //   const response = await fetch("https://api.web3forms.com/submit", {
  //     method: "POST",
  //     body: formData
  //   });

  //   const data = await response.json();

  //   if (data.success) {
  //     setResult("Form Submitted Successfully");
  //     event.target.reset();
  //   } else {
  //     console.log("Error", data);
  //     setResult(data.message);
    // }
  // };
  return (
    <>
     <form className={styles.bodyContainer} onSubmit={onSubmit}>
        <h1>Connect With Us: Let's Start a</h1>
          <h1>Conversation.<span className={styles.UnderlineText}><img className={styles.underLine} src={greenLine} alt='GreenLine'/></span></h1>
        <p>We're here to listen, collaborate, and help you achieve your goals. Reach out today to get started.</p><img src={bubbles} className={styles.bubbly}></img>
        <div className={styles.DropDown}>
          <div className={styles.row}>
            <div className = {styles.column1}><input type='text' placeholder='Enter your name *' name="name"></input></div>
            <div className = {styles.column1}><input type='text' placeholder='Enter your phone number *' name='phonenumber'></input></div>
            </div>
            <div className={styles.row}>
            <div className = {styles.column1}><input type='text' placeholder='Enter your Email ID *' name='email'></input></div>
            <div className = {styles.column1}><input type='text' placeholder='Select your budget in USD *' name='budget'></input></div>
          </div>
           <div className={styles.row}>
              <div className = {styles.column1}>
              <select className={styles.DropMenu} >
                 <option value="Option1">When do you want to start *</option>
                 <option value="option2">Start in a month</option>
                 <option value="option3">Engage immediately</option>
                 <option value="option4">start in a week</option>
              </select>
              </div>
               <div className = {styles.column1}>
              <select className={styles.DropMenu} >
                 <option value="option1" >Referral</option>
                 <option value="option2" >Google/Search</option>
                 <option value="option3" >Clutch</option>
                 <option value="option4" >Awards</option>
                 <option value="option5" >Social Media</option>
                 <option value="option6" >Dribble/ Behance</option>
              </select>
              </div>
          </div>
              <div className={styles.row}>
              <div id = {styles.ColumnBig}><input type='text' className={styles.inputF} name='message'></input><div className={styles.Placeholder}>About your Project *</div><center><p>By proceeding, you are agreeing to Sabrasta’s privacy policy & communication</p></center></div>
          </div>
        </div>
        <button type= "submit" className={styles.sendEnquiry} onClick={()=>{console.log('button pressed')}}>Send Enquiry</button>
        </form>
    </>
  )
}

export default ContactUs