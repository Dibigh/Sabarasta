import React from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import star from '../../Logo/star.svg';
import greenLine from '../../Logo/redLine.svg';
import styles from './TermsOfUse.module.css';
import bubbles from '../../Logo/Bubbles.svg';

export default function PrivacyPolicy() {
  return (
    <>
     <div className={styles.bodyContainer}>
        <h1>Clear Guidelines for a Seamless</h1>
          <h1>Experience.<span className={styles.UnderlineText}><img className={styles.underLine} src={greenLine} alt='GreenLine'/></span></h1>
        <p>Explore our terms of use to ensure a smooth and transparent interaction with our services.</p><p>Your understanding is key to our mutual success.</p><img src={bubbles} className={styles.bubbly}></img>
        <div className={styles.PriText}>
        <h2>Introduction</h2>
        <p>At Sabrasta Business Solutions Pvt. Ltd., we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information in relation to our IT consulting services.</p>
        <br></br>
        <br></br>
        <h2>1. Information We Collect</h2>
        <p>We may collect personal information such as your name, email address, phone number, company details, and other information relevant to providing our services. This data is collected when you engage with us through our website, email, or directly via consultations.</p>
        <br></br>
        <br></br>
        <h2>2. How We Use Your Information</h2>
        <p>We use the information collected to:</p>
        <p>- Provide and improve our IT consulting services.</p>
        <p>- Respond to inquiries or service requests.</p>
        <p>- Keep you informed about updates or new services.</p>
        <p>- Ensure the security and functionality of our services.</p>
        <br></br>
        <br></br>
        <h2>3. Information Sharing</h2>
        <p>We do not sell, rent, or trade your personal information to third parties. However, we may share information with trusted partners to help provide our services, only under strict confidentiality agreements.</p>
        <br></br>
        <br></br>
        <h2>4. Data Security</h2>
        <p>We take appropriate technical and organizational measures to ensure the security of your personal information and protect it from unauthorized access, loss, or disclosure.</p>
        <br></br><br></br>
        <h2>5. Your Rights </h2>
        <p>You have the right to access, correct, or request the deletion of your personal information. To exercise these rights, please contact us at [contact information].</p>
        <br></br><br></br>
        <h2>6. Changes to the Privacy Policy</h2>
        <p>We may update this Privacy Policy periodically. Any changes will be posted on this page, and we encourage you to review it regularly.</p>
        <br></br>
        <br></br>
        <h2>7. Contact Us</h2>
        <p>If you have any questions or concerns about this Privacy Policy, please reach out to us at policy@sabrasta.com</p>
        <br></br>
        <br></br>
        <p>Last updated: 2024 September 23</p>
        </div>
        </div>
          </>
        );
  }