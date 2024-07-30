import React from 'react'
<<<<<<< HEAD
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
function Industries() {
  return (
    <>
      <div className={styles.bodyContainer}>
      <span id = {styles.starDoodle}>
        <img src={star} alt = 'starDoodle'/>
      </span>
        <h1>Achieve industry leadership with</h1>
          <h1>our specialized<span className={styles.UnderlineText}> expertise.<img className={styles.underLine} src={greenLine} alt='GreenLine'/></span></h1>
        <p>Unleash your competitive edge with our industry-specific strategies and support.</p>
        <div className = {styles.Container}>
          <div id={styles.item1}> <img src={realState} alt='JagaDalal'/><div><h3>Real Estate</h3><p>Revolutionize your real estate business with our tailored digital solutions. We create tools that streamline operations, enhance client engagement, and secure your digital infrastructure. Elevate your brand and close more deals with our expertise in the real estate sector.</p><button>Read More</button></div></div>
          <div id={styles.item2}> <img src={IT} alt='ITs'/><div><h3>IT</h3><p>Empower your IT operations with our comprehensive solutions. From optimizing your systems to securing your infrastructure, we ensure your IT operations run smoothly and efficiently. Stay ahead in the tech industry with our innovative and reliable services.</p><button>Read More</button></div></div>
          <div id={styles.item3}> <img src={media} alt='Media'/><div><h3>Media</h3><p>Enhance your media presence with our comprehensive digital solutions. We create engaging content, manage impactful campaigns, and optimize your online platforms to reach a wider audience. Amplify your brand and drive meaningful engagement with our expertise in the media industry.</p><button>Read More</button></div></div>
          <div id={styles.item4}> <img src={eCommerce} alt='eCOm'/><div><h3>eCommerce</h3><p>Boost your online sales with our specialized solutions. We design and develop user-friendly, secure online stores that enhance the shopping experience and ensure quality performance. Everything you need to grow your eCommerce business is covered.</p><button>Read More</button></div></div>
          <div id={styles.item5}> <img src={NGO} alt='NGO'/><div><h3>NGO</h3><p>Maximize your impact with our digital solutions for NGOs. We provide tools for better project management, secure operations, and effective online fundraising. Empower your mission and reach more supporters with our tailored services for non-profit organizations.</p><button>Read More</button></div></div>
          <div id={styles.item6}> <img src={eGovern} alt='EGovernance'/><div><h3>eGovernance</h3><p>Streamline government operations with our innovative solutions. We develop secure, user-friendly platforms for efficient public service delivery and ensure high-quality performance. Enhance transparency, citizen engagement, and administrative efficiency with our eGovernance services.</p><button>Read More</button></div></div>
        </div>
        </div>
    </>
=======

function Industries() {
  return (
    <div>Industries</div>
>>>>>>> 0ae8bdbb71048c3d1b3a4846edf606e59b0a184d
  )
}

export default Industries