import React from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import star from '../../Logo/star.svg';
import greenLine from '../../Logo/greenline.svg';
import styles from './PrivacyPolicy.module.css';

export default function PrivacyPolicy() {
  return (
    <>
     <div className={styles.bodyContainer}>
        <h1>Our Commitment to Privacy</h1>
          <h1>Transparency.<span className={styles.UnderlineText}><img className={styles.underLine} src={greenLine} alt='GreenLine'/></span></h1>
        <p>Learn about how we handle your data responsibly and ensure your privacy is protected</p><p>every step of the way.</p><img src={bubbles} className={styles.bubbly}></img>
        <div className={styles.PriText}>
        <p>This Privacy Policy describes Sabrasta Business Solutions Pvt. Ltd. (Herein after referred to as the “Company”) policies and procedures on the collection and use and disclosure of the Information provided by the Users and visitors of the Website (together referred to as the “Users”). The Company shall not use the User’s information in any manner except as provided under this Privacy Policy. Every User who accesses the Website agrees to be bound by the terms of this Privacy Policy.</p>
        <br></br>
        <br></br>
        <p>Interpretation: In this Privacy Policy, references to “You”, “Your”, “User” shall mean the end user accessing the Website or the Services and “We”, “Us” and “Our” shall mean the Company, its affiliates and partners.</p>
        <p>Information collection and use</p>
        <p>We collect several types of information for various purposes to provide</p>
        <p>and improve our Service to you.</p>
        <p>Types of data collected</p>
        <p>Personal data</p>
        <p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (“Personal Data”). Personally identifiable information may include, but is not limited to:</p>
        <ul>
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Cookies and Usage Data</li>
        </ul>
        <p>Usage data</p>
        <p>We may also collect information how the Service is accessed and used (“Usage Data”). This Usage Data may include information such as your computer’s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
        <p>Tracking & cookies data</p>
        <p>We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.</p>
        <br></br>
        <br></br>
        <p>Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.</p>
        <br></br>
        <br></br>
        <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>
        <br></br><br></br>
        <p>Examples of Cookies we use:</p>
        <ul>
          <li>Session Cookies. We use Session Cookies to operate our Service.</li>
          <li>Preference Cookies. We use Preference Cookies to remember your preferences and various settings.</li>
          <li>Security Cookies. We use Security Cookies for security purposes.</li>
        </ul>
        <p>Use of data</p>
        <p>NetBramha Studio uses the collected data for various purposes:</p>
        <ul>
          <li>To provide and maintain the Service</li>
          <li>To notify you about changes to our Service</li>
          <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
          <li>To provide customer care and support</li>
          <li>To provide analysis or valuable information so that we can improve the Service</li>
          <li>To monitor the usage of the Service</li>
          <li>To detect, prevent and address technical issues</li>
         </ul> 
        <p>Security of data</p>
        <p>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
        <p>Service providers</p>
        <p>We may employ third party companies and individuals to facilitate our Service (“Service Providers”), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used</p>
        <br></br>
        <br></br>
        <p>These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpos</p>
        <p>Analytics</p>
        <p>We may use third-party Service Providers to monitor and analyze the use of our Service.</p>
        <p>Google analytics</p>
        <p>Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network.</p>
        <br></br>
        <br></br>
        <p>You can opt-out of having made your activity on the Service available to Google Analytics by installing the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript (ga.js, analytics.js, and dc.js) from sharing information with Google Analytics about visits activity</p>
        <p>For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page:</p>
        <p>Links to other sites</p>
        <p>Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party’s site. We strongly advise you to review the Privacy Policy of every site you visit.</p>
        <br></br>
        <br></br>
        <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
        <p>Children’s privacy</p>
        <p>Our Service does not address anyone under the age of 18 (“Children”).</p>
        <br></br>
        <br></br>
        <p>We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.</p>
        <p>Changes to this privacy policy</p>
        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
        <br></br>
        <br></br>
        <p>We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the “effective date” at the top of this Privacy Policy.</p>
        </div>
        </div>
          </>
        );
  }