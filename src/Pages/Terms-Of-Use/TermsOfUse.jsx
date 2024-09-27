import React from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import star from '../../Logo/star.svg';
import greenLine from '../../Logo/greenline.svg';
import styles from './TermsOfUse.module.css';
import bubbles from '../../Logo/Bubbles.svg'

export default function PrivacyPolicy() {
  return (
    <>
     <div className={styles.bodyContainer}>
      {/* <span id = {styles.starDoodle}>
        <img src={star} alt = 'starDoodle'/>
      </span> */}
        <h1>Clear Guidelines for a Seamless</h1>
          <h1>Experience.<span className={styles.UnderlineText}><img className={styles.underLine} src={greenLine} alt='GreenLine'/></span></h1>
        <p>Explore our terms of use to ensure a smooth and transparent interaction with our services.</p><p>Your understanding is key to our mutual success.</p>
        <div className={styles.PriText}>
        <p>ACCESSING, BROWSING OR OTHERWISE USING THE WEBSITE INDICATES YOUR ACCEPTANCE TO ALL THE TERMS AND CONDITIONS HEREIN. PLEASE READ THESE TERMS OF USE CAREFULLY BEFORE PROCEEDING. IF YOU DO NOT AGREE WITH THE SAME, PLEASE DO NOT USE THIS WEBSITE.</p>
        <br></br>
        <br></br>
        <p>For the purpose of these Terms of Use, wherever the context so requires “You” or “User” shall mean any natural or legal person visits our platform, either just for the purpose of browsing the Website or engages to buy our products & services. This Website allows the User to surf the Website. The term “We”, “Us”, “Our” shall mean Company</p>
        <br></br>
        <br></br>
        <p>Your use of the Website and services and tools are governed by the following terms and conditions (“Terms of Use”) as applicable to the Website including the applicable policies which are incorporated herein by way of reference. If You transact on the Website, You shall be subject to the policies that are applicable to the Website for such transaction. By mere use of the Website, You shall be contracting with Company and these terms and conditions including the policies constitute your binding obligations, with the Website. Any new features or tools which are added to the current store shall also be subject to the Terms of Use. We reserve the right to update, change or replace any part of these Terms of Use by posting updates and/or changes to Our Website. It is your responsibility to check this page periodically for changes.</p>
        <p>Eligibility to use</p>
        <p>By agreeing to these Terms of Use, you represent that you are persons who can form legally binding contracts under Indian Contract Act, 1872. Persons who are “incompetent to contract” within the meaning of the Indian Contract Act, 1872 including minors, undischarged insolvents etc. are not eligible to use the Website. As a minor, if you wish to use or transact on Website, such use or transaction may be made by your legal guardian or parents on the Website. Company reserves the right to refuse You access to the Website if it is brought to Company’s notice or if it is discovered that you are under the age of 18 years. By visiting Company Website or accepting these Terms of Use, You represent and warrant to Company that You are 18 years of age or older and that You have the right, authority and capacity to use the Website and agree to and abide by these Terms of Use. You also represent and warrant to the Company that You will use the Website in a manner consistent with any and all applicable laws and regulations.</p>
        <p>Privacy and information protection</p>
        <p>ACCESSING, BROWSING OR OTHERWISE USING THE WEBSITE INDICATES YOUR ACCEPTANCE TO ALL THE TERMS AND CONDITIONS HEREIN. PLEASE READ THESE TERMS OF USE CAREFULLY BEFORE PROCEEDING. IF YOU DO NOT AGREE WITH THE SAME, PLEASE DO NOT USE THIS WEBSITE.</p>
        <br></br>
        <br></br>
        <p>Please review our Privacy Policy, which also governs your visit to this Site, to understand our internal policies and practices. The personal information/data provided to us by you during the course of usage of http://netbramha.com/ will be treated as strictly confidential and in accordance with the Privacy Policy and applicable laws and regulations. If You object to your information being transferred or used, please do not use the website</p>
        <p>Charges for using the website</p>
        <p>Company does not charge any fee for browsing the Website. Company reserves the right to change its Fee Policy from time to time. In particular, Company may at its sole discretion introduce new services and modify some or all of the existing services offered on the Website. In such an event Company reserves the right to introduce fees for the new services offered or amend/introduce fees for existing services, as the case may be. Changes to the Fee Policy shall be posted on the Website and such changes shall automatically become effective immediately after they are posted on the Website. Unless otherwise stated, all fees shall be quoted in Indian Rupees.</p>
        <p>Rights of use</p>
        <p>Company grants you limited rights to access and make personal use of this website, but not to download (other than page caching) or modify it, or any portion of it. These rights do not include any commercial use of this website or its contents; any collection and use of any content, descriptions, or prices; any derivative use of this website or its contents; any downloading or copying of account information for the benefit of a third party, or any use of data mining, robots, or similar data gathering and extraction tools</p>
        <br></br>
        <br></br>
        <p>This website or any portion of this website (including but not limited to any copyrighted material, trademarks, or other proprietary information) may not be reproduced, duplicated, copied, sold, resold, visited, distributed or otherwise exploited for any commercial purpose.</p>
        <p>Your conduct</p>
        <p>You must not use the Website in any way that causes, or is likely to cause, the Website or access to it to be interrupted, damaged or impaired in any way. You understand that you, and not Company, are responsible for all electronic communications and content sent from your computer to us and you must use the Website for lawful purposes only. You must not use the Website for any of the following:</p>
        <br></br>
        <br></br>
        <p>For Fraudulent Purposes, Or In Connection With A Criminal Offense Or Other Unlawful Activity;</p>
        <br></br><br></br>
        <p>To Send, Use Or Reuse Any Material That Does Not Belong To You; Or Is Illegal, Offensive (Including But Not Limited To Material That Is Sexually Explicit Content Or Which Promotes Racism, Bigotry, Hatred Or Physical Harm), Deceptive, Misleading, Abusive, Indecent, Harassing, Blasphemous, Defamatory, Libelous, Obscene, Pornographic, Pedophilic Or Menacing; Ethnically Objectionable, Disparaging Or In Breach Of Copyright, Trademark, Confidentiality, Privacy Or Any Other Proprietary Information Or Right; Or Is Otherwise Injurious To Third Parties; Or Relates To Or Promotes Money Laundering Or Gambling; Or Is Harmful To Minors In Any Way; Or Impersonates Another Person; Or Threatens The Unity, Integrity, Security Or Sovereignty Of India Or Friendly Relations With Foreign States; Or Objectionable Or Otherwise Unlawful In Any Manner Whatsoever; Or Which Consists Of Or Contains Software Viruses, Political Campaigning, Commercial Solicitation, Chain Letters, Mass Mailings Or Any “Spam”; Or Violates Any Law For The Time Being In Force; Or Deceives Or Misleads The Addressee About The Origin Of Such Messages Or Communicates Any Information Which Is Grossly Offensive Or Menacing In Nature;</p>
        <br></br>
        <br></br>
        <p>To Not Make Any Unauthorized Commercial Use Of This Website Or Service And You May Not Resell This Service Or Assign Your Rights Or Obligations Under These Terms Of Usage. You May Not Reverse Engineer Any Part Of This Website Or Service.</p>
        <br></br>
        <br></br>
        <p>For Any Act That Causes, Or May Be Likely To Cause Damage Or Impairment To The Website Or In Any Manner Harms The Company Or Any Other Person Or Entity (As Determined By The Company In Its Sole Discretion) Or Interrupt Free Access To It In Any Way</p>
        <br></br>
        <br></br>
        <p>Medical Records And History</p>
        <br></br>
        <br></br>
        <p>Biometric Information Received By Body Corporate Under Lawful Contract Or Otherwise</p>
        <br></br>
        <br></br>
        <p>Visitor Details As Provided At The Time Of Registration Or Thereafter And</p>
        <br></br>
        <br></br>
        <p>Call Data Records</p>
        <p>Policies</p>
        <p>Disclaimer of warranties and liabilities</p>
        <p>We expressly disclaim any warranties or representations (express or implied) in respect of quality, suitability, accuracy, reliability, completeness, timeliness, performance, safety, merchantability, fitness for a particular purpose, or legality of the products listed or displayed or the content (including product information and/or specifications) on the Website. While we have taken precautions to avoid inaccuracies in content, this Website, all content, information, software, products, services & related graphics are provided as is, without warranty of any kind.</p>
        <p>Indemnity and release</p>
        <p>You shall indemnify and hold harmless Company, its subsidiaries, affiliates and their respective officers, directors, agents and employees, from any claim or demand, or actions including reasonable attorney’s fees, made by any third party or penalty imposed due to or arising out of your breach of these Conditions of Use or any document incorporated by reference, or your violation of any law, rules, regulations or the rights of a third party.</p>
        <br></br>
        <br></br>
        <p>You hereby expressly release Company and/or its affiliates and/or any of its officers and representatives from any cost, damage, liability or other consequence of any of the actions/inactions of the vendors and specifically waiver any claims or demands that you may have in this behalf under any statute, contract or otherwise.</p>
        <p>Communications</p>
        <p>When you visit http://netbramha.com or send e-mails to us, you are communicating with us electronically. We may communicate with you by e-mail, SMS, phone call or by posting notices on the website or by any other mode of communication. For contractual purposes, you consent to receive communications including SMS, e-mail or phone calls from us.</p>
        <p>Losses</p>
        <p>We will not be responsible for any business loss (including loss of profits, revenue, contracts, anticipated savings, data, goodwill or wasted expenditure) or any other indirect or consequential loss that is not reasonably foreseeable to both you and us when you commenced using the website.</p>
        <p>Alteration of service or amendments to the conditions</p>
        <p>We reserve the right to make changes to our website, policies, and these Conditions of Use at any time. You will be subject to the policies and Conditions of Use in force at the time that you use the website, unless any change to those policies or these conditions is required to be made by law or government authority. If any of these conditions is deemed invalid, void, or for any reason unenforceable, that condition will be deemed severable and will not affect the validity and enforceability of any remaining condition.</p>
        <p>Events beyond our reasonable control</p>
        <p>We will not be held responsible for any delay or failure to comply with our obligations under these conditions if the delay or failure arises from any cause which is beyond our reasonable control. This condition does not affect your statutory rights. Waiver</p>
        <p>If you breach these conditions and we take no action, we will still be entitled to use our rights and remedies in any other situation where you breach these conditions.</p>
        <p>Governing law and jurisdiction</p>
        <p>These conditions are governed by and construed in accordance with the laws of India. You agree, as we do, to submit to the exclusive jurisdiction of the courts at Bangalore.</p>
        <br></br>
        <br></br>
        <p>IN NO EVENT SHALL PIXITREE DIGITAL CREATIVES PRIVATE LIMITED BE LIABLE FOR ANY SPECIAL, INCIDENTAL, INDIRECT OR CONSEQUENTIAL DAMAGES OF ANY KIND IN CONNECTION WITH THESE TERMS OF USE, EVEN IF USER HAS BEEN INFORMED IN ADVANCE OF THE POSSIBILITY OF SUCH DAMAGES.</p>
        <p>Severability & waiver contact information</p>
        <p>If any provision of these Terms of Use is held to be invalid or unenforceable, such provision shall be struck, and the remaining provisions shall be enforced.</p>
        <p>Contact us</p>
        <p>If You have any question, issue, complaint regarding any of our services,</p>
        <p>please contact: hello@netbramha.com</p>
        </div>
        </div>
          </>
        );
  }