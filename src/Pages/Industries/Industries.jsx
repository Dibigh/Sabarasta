import React from 'react'
import { useNavigate } from 'react-router-dom';
import star from '../../Logo/star.svg'
import greenLine from '../../Logo/greenline.svg'
import realState from '../../Logo/realstate.svg'
import IT from '../../Logo/it.svg'
import media from '../../Logo/media.svg'
import eCommerce from '../../Logo/ecommerce.svg'
import NGO from '../../Logo/ngo.svg'
import eGovern from '../../Logo/egovern.svg'
import styles from './Industries.module.css'
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import bubbles from '../../Logo/Bubbles.svg'
export default function Industries() {
   const navigate = useNavigate();
=======
function Industries() {
>>>>>>> origin/dibigh
  return (
    <>
      <div className={styles.bodyContainer}>
        <h1>Achieve industry leadership with</h1>
          <h1>our specialized<span className={styles.UnderlineText}> expertise.<img className={styles.underLine} src={greenLine} alt='GreenLine'/></span></h1>
        <p>Unleash your competitive edge with our industry-specific strategies and support.</p><img src={bubbles} className={styles.bubbly}></img>
        <div className = {styles.Container}>
<<<<<<< HEAD
          <div id={styles.item1}> <img src={realState} alt='Real Estate'/><div><h3>Real Estate</h3><p>Revolutionize your real estate business with our tailored digital solutions. We create tools that streamline operations, enhance client engagement, and secure your digital infrastructure. Elevate your brand and close more deals with our expertise in the real estate sector.</p><button onClick={()=>{navigate('/Industries/Real-Estate')}}>Read More</button></div></div>
          <div id={styles.item2}> <img src={IT} alt='ITs'/><div><h3>IT</h3><p>Empower your IT operations with our comprehensive solutions. From optimizing your systems to securing your infrastructure, we ensure your IT operations run smoothly and efficiently. Stay ahead in the tech industry with our innovative and reliable services.</p><button onClick={()=>{navigate('/Industries/IT')}}>Read More</button></div></div>
          <div id={styles.item3}> <img src={media} alt='Media'/><div><h3>Media</h3><p>Enhance your media presence with our comprehensive digital solutions. We create engaging content, manage impactful campaigns, and optimize your online platforms to reach a wider audience. Amplify your brand and drive meaningful engagement with our expertise in the media industry.</p><button onClick={()=>{navigate('/Industries/Media')}}>Read More</button></div></div>
          <div id={styles.item4}> <img src={eCommerce} alt='eCOm'/><div><h3>eCommerce</h3><p>Boost your online sales with our specialized solutions. We design and develop user-friendly, secure online stores that enhance the shopping experience and ensure quality performance. Everything you need to grow your eCommerce business is covered.</p><button onClick={()=>{navigate('/Industries/eCommerce')}}>Read More</button></div></div>
          <div id={styles.item5}> <img src={NGO} alt='NGO'/><div><h3>NGO</h3><p>Maximize your impact with our digital solutions for NGOs. We provide tools for better project management, secure operations, and effective online fundraising. Empower your mission and reach more supporters with our tailored services for non-profit organizations.</p><button onClick={()=>{navigate('/Industries/NGO')}}>Read More</button></div></div>
          <div id={styles.item6}> <img src={eGovern} alt='EGovernance'/><div><h3>eGovernance</h3><p>Streamline government operations with our innovative solutions. We develop secure, user-friendly platforms for efficient public service delivery and ensure high-quality performance. Enhance transparency, citizen engagement, and administrative efficiency with our eGovernance services.</p><button onClick={()=>{navigate('/Industries/eGovernance')}}>Read More</button></div></div>
=======
          <div id={styles.item1}> <img src={realState} alt='JagaDalal'/><div><h3>Real Estate</h3><p>Revolutionize your real estate business with our tailored digital solutions. We create tools that streamline operations, enhance client engagement, and secure your digital infrastructure. Elevate your brand and close more deals with our expertise in the real estate sector.</p><button><Link to='/Industries/Real-Estate' className={styles.hover_link}>Read More</Link></button></div></div>
          <div id={styles.item2}> <img src={IT} alt='ITs'/><div><h3>IT</h3><p>Empower your IT operations with our comprehensive solutions. From optimizing your systems to securing your infrastructure, we ensure your IT operations run smoothly and efficiently. Stay ahead in the tech industry with our innovative and reliable services.</p><button><Link to='/Industries/IT' className={styles.hover_link}>Read More</Link></button></div></div>
          <div id={styles.item3}> <img src={media} alt='Media'/><div><h3>Media</h3><p>Enhance your media presence with our comprehensive digital solutions. We create engaging content, manage impactful campaigns, and optimize your online platforms to reach a wider audience. Amplify your brand and drive meaningful engagement with our expertise in the media industry.</p><button><Link to='/Industries/Media' className={styles.hover_link}>Read More</Link></button></div></div>
          <div id={styles.item4}> <img src={eCommerce} alt='eCOm'/><div><h3>eCommerce</h3><p>Boost your online sales with our specialized solutions. We design and develop user-friendly, secure online stores that enhance the shopping experience and ensure quality performance. Everything you need to grow your eCommerce business is covered.</p><button><Link to='/Industries/eCommerce' className={styles.hover_link}>Read More</Link></button></div></div>
          <div id={styles.item5}> <img src={NGO} alt='NGO'/><div><h3>NGO</h3><p>Maximize your impact with our digital solutions for NGOs. We provide tools for better project management, secure operations, and effective online fundraising. Empower your mission and reach more supporters with our tailored services for non-profit organizations.</p><button><Link to='/Industries/Ngo' className={styles.hover_link}>Read More</Link></button></div></div>
          <div id={styles.item6}> <img src={eGovern} alt='EGovernance'/><div><h3>eGovernance</h3><p>Streamline government operations with our innovative solutions. We develop secure, user-friendly platforms for efficient public service delivery and ensure high-quality performance. Enhance transparency, citizen engagement, and administrative efficiency with our eGovernance services.</p><button><Link to='/Industries/eGovernance' className={styles.hover_link}>Read More</Link></button></div></div>
>>>>>>> origin/dibigh
        </div>

        </div>
    </>
  )
}
