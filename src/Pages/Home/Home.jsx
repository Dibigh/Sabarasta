import React from 'react'
import { useNavigate } from 'react-router-dom';
import star from '../../Logo/star.svg'
import styles from './Home.module.css'
import redline from '../../Logo/Vector.svg'
import curveLine from '../../Logo/Plane Doodle.svg'
import greenLine from '../../Logo/green.svg'
import ThreeDots from '../../Logo/3dots.svg'
function Home() {
  const navigate=useNavigate();
  function buttonPressed()
  {
    console.log('button pressed');
    navigate('/getStarted')
  
  }
  return (
    <>
      <div className={styles.bodyContainer}>
      <span  id = {styles.starDoodle}>
        <img src={star} alt = 'starDoodle'/>
      </span>
        <h1>Unleash your <span className={styles.UnderlineText}>brand's potential<img className={styles.RedLine} src={redline} alt='RedLine'/></span></h1>
        <h1>with our creative expertise</h1>
        <p>Unleash your vision with our unrivaled expertise, captivating audiences and setting</p>
        <p>your brand apart.</p>
        <button id = {styles.GetStarted}>Get Started</button>
        <img id = {styles.Curve} src={curveLine} alt = 'curve'/>
        <div className={styles.BlackBox}>
          <span id={styles.BlackContainer}></span>
        </div>
        <div className={styles.CenterBox}>
           <p>Our <span><img className={styles.underLineW} src={redline} alt='RedLine'/>Working Progress</span></p>
           <div className ={styles.LeftText}>
            <p>Research<span className={styles.RedDot}>.</span></p>
            <p className = {styles.MiddleOrder}>Strategize<span className={styles.RedDot}>.</span></p>
            <p className = {styles.MiddleOrder}>Create<span className={styles.RedDot}>.</span></p>
            <p className = {styles.MiddleOrder}>Deliver<span className={styles.RedDot}>.</span></p>
           </div>
             <div className={styles.RightText}>
            <p>Our research services empower businesses by unlocking insights, validating hypotheses, and sparking innovation. We dive deep into user behaviors, guiding you to create customer-centric designs that resonate.</p>
            <p className = {styles.MiddleOrder}>We bridge the gap between your business vision and user needs. Our process aligns precise user research insights with your goals, mission, and vision. This synergy strikes the perfect balance between business sustainability, profitability, and meeting user needs effectively.</p>
            <p className = {styles.MiddleOrder}>We’re all about crafting meaningful, seamless experiences that tackle user pain points head-on, add real value to their lives, and captivate them with delight. It’s not just design; it’s a journey of creating remarkable user satisfaction.</p>
            <p className = {styles.MiddleOrder}>We make sure to deliver the products that provides excellent user experience. After the system is ready, we deploy the software and train our clients to use the software and provide continuous maintenance support after it.</p>
           </div>
        </div>
        <div className={styles.FinestWorks}>
          <div><p>Our <span><img className={styles.underLineG} src={greenLine} alt='GreenLine'/>Finest Works</span></p></div>
          <button id={styles.ExploreB}>Explore Our Work</button>
          <div className={styles.greenContainer}></div>
          <div className={styles.blueContainer}></div>
        </div>
        <div className={styles.Three}>
             <img src={ThreeDots} alt='3Dots'/>
          </div>
         <div className={styles.clientsDiv}>
           <p><center>Our <span>Clients Adore Us</span></center></p>
           <div id = {styles.inlineContain}>
           <div className={styles.orangeContainer}></div>
           <div className={styles.greenContainer}></div> 
           <div className={styles.blueContainer}></div>
           </div>
          </div>
            <div className={styles.Three}>
             <img src={ThreeDots} alt='3Dots'/>
          </div>
          <div className={styles.FAQ}><center>Frequently <span>Asked Questions</span></center>
          <p style={{fontWeight:500,fontSize:25}}>What color should you choose as a primary?<span className = {styles.operator}>-</span></p>
          <p>Lorem ipsum dolor sit amet consectetur. Nunc et nulla laoreet et. Tincidunt feugiat in lectus quis. Neque porttitor arcu faucibus elementum egestas. Id proin malesuada leo nunc est fringilla purus consectetur platea. Dis rhoncus magnis dictum dui interdum ullamcorper donec adipiscing.</p>
          <p style={{fontWeight:300,fontSize:25}}>Lorem ipsum dolor sit amet consectetur?<span className = {styles.operator}>+</span></p>
          <p style={{fontWeight:300,fontSize:25}}>Lorem ipsum dolor sit amet consectetur?<span className = {styles.operator}>+</span></p>
          </div>
          <div className={styles.WorkProgress}>
          <div><p>System <span><img className={styles.underLineG} src={greenLine} alt='GreenLine'/>of Progress</span></p></div>
          <button id={styles.ReadBlog}>Read Blog</button>
          <div id={styles.contain1}>2</div>
          <div id={styles.contain2}>3</div>
          <div id={styles.contain3}>4</div>
        </div>
      </div>
      </>
  )
}

export default Home