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
<<<<<<< HEAD
   const [submittedData, setSubmittedData] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget:'',
    start:'',
    info:'',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Update the specific field
    });
  }
      const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    console.log('Form Data Submitted:', formData);
    // Here you can handle the form data (e.g., send it to an API)
     setSubmittedData(formData); // Store the submitted data
    // Reset form if needed
    setFormData({ name: '', email: '', age: '' });
     const regex = /^(?:[1-9]\d{3,}|1000)$/;

    if (regex.test(inputValue)) {
      alert(`Input is valid: ${inputValue}`);
      setError('');
    } else {
      setError('Please enter a number greater than or equal to 1000.');
    }

  };
  return (
    <>
     <form className={styles.bodyContainer} onSubmit={handleSubmit}>
     {/* <div className={styles.bodyContainer}> */}
        <h1>Connect With Us: Let's Start a</h1>
        <h1>Conversation.<span className={styles.UnderlineText}><img className={styles.underLine} src={greenLine} alt='GreenLine'/></span></h1>
        <p>We're here to listen, collaborate, and help you achieve your goals. Reach out today to get started.</p><img src={bubbles} className={styles.bubbly}></img>
        <div className={styles.DropDown}>
          <div className={styles.row}>
            <div className = {styles.column1}><input type='text' placeholder='Enter your name *' name="name" value={formData.name} onChange={handleChange}></input></div>
            <div className = {styles.column1}><input type='text' placeholder='Enter your phone number *' name='phone' value={formData.phone} onChange={handleChange}></input></div>
            </div>
            <div className={styles.row}>
            <div className = {styles.column1}><input type='text' placeholder='Enter your Email ID *' name='email' value={formData.email} onChange={handleChange}></input></div>
            <div className = {styles.column1}><input type='text' placeholder='Your budget in USD *' name='budget' value={formData.budget} onChange={handleChange}></input></div>
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
                 <option value="Referral" >Referral</option>
                 <option value="Google/Search" >Google/Search</option>
                 <option value="Awards" >Awards</option>
                 <option value="Social Media" >Social Media</option>
                 <option value="Recommended by friends">Recommended by friends</option>
=======
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
>>>>>>> origin/dibigh
              </select>
              </div>
          </div>
              <div className={styles.row}>
<<<<<<< HEAD
              <div id = {styles.ColumnBig}><textarea type='text' placeholder="About your Project *" className={styles.inputF} name='message' rows='200' onChange={handleChange}></textarea><div className={styles.Placeholder}></div><center><p>By proceeding, you are agreeing to Sabrasta’s privacy policy & communication</p></center></div>
          </div>
        </div>
        <button type= "submit" className={styles.sendEnquiry} onClick={()=>{console.log('button pressed')}}>Send Enquiry</button>
        {/* </div> */}
      </form>
       {submittedData && (
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px' }}>
          <h3>Submitted Data:</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email</strong> {submittedData.email}</p>
          <p><strong>Budget</strong> {submittedData.budget}</p>
          <p><strong>start</strong> {submittedData.start}</p>
          <p><strong>info</strong> {submittedData.info}</p>
        </div>
      )}
=======
              <div id = {styles.ColumnBig}><input type='text' className={styles.inputF} name='message'></input><div className={styles.Placeholder}>About your Project *</div><center><p>By proceeding, you are agreeing to Sabrasta’s privacy policy & communication</p></center></div>
          </div>
        </div>
        <button type= "submit" className={styles.sendEnquiry} onClick={()=>{console.log('button pressed')}}>Send Enquiry</button>
        </form>
>>>>>>> origin/dibigh
    </>
  )
}

export default ContactUs