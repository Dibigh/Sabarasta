import React from 'react'
import { useNavigate } from 'react-router-dom';
import star from '../../Logo/star.svg'
import styles from './Home.module.css'
import redline from '../../Logo/Vector.svg'
import curveLine from '../../Logo/Plane Doodle.svg'
import greenLine from '../../Logo/green.svg'
import ThreeDots from '../../Logo/3dots.svg'
import HomePic1 from '../../Logo/HomePic1.svg';
import HomePic2 from '../../Logo/HomePic2.svg';
// import Slider1 from "../../components/Slider1/Slider1";
import bubbles from '../../Logo/Bubbles.svg';
import {useState,useEffect,useRef} from 'react';
function Home() {
const[Symbol1,ChangeSymbol1]=useState('+');
const[Symbol2,ChangeSymbol2]=useState('+');
const[Symbol3,ChangeSymbol3]=useState('+');
  const pRef1 = useRef(null);
  const pRef2 = useRef(null);
  const pRef3 = useRef(null);
   const toggleParagraph1 = () => {
    if (pRef1.current.style.display === 'none' || pRef1.current.style.display === '') {
      pRef1.current.style.display = 'block';
      ChangeSymbol1('-')
    } else {
      pRef1.current.style.display = 'none';
      ChangeSymbol1('+')
    }
  };
    const toggleParagraph2 = () => {
    if (pRef2.current.style.display === 'none' || pRef2.current.style.display === '') {
      pRef2.current.style.display = 'block';
      ChangeSymbol2('-')
    } else {
      pRef2.current.style.display = 'none';
      ChangeSymbol2('+')
    }
  };
    const toggleParagraph3 = () => {
    if (pRef3.current.style.display === 'none' || pRef3.current.style.display === '') {
      pRef3.current.style.display = 'block';
      ChangeSymbol3('-')
    } else {
      pRef3.current.style.display = 'none';
      ChangeSymbol3('+')
    }
  };
  const navigate=useNavigate();
  function buttonPressed()
  {
    console.log('button pressed');
    // navigate('/ContactUs')
  }
  return (
    <>
      <div className={styles.bodyContainer}>
        <h1>Unleash your <span className={styles.UnderlineText}>brand's potential<img className={styles.RedLine} src={redline} alt='RedLine'/></span></h1>
        <h1>with our creative expertise</h1>
        <p>Unleash your vision with our unrivaled expertise, captivating audiences and setting</p>
        <p>your brand apart.</p><img src={bubbles} className={styles.bubbly}></img>
        <button id = {styles.GetStarted} onClick = {buttonPressed}>Get Started</button>
        <img id = {styles.Curve} src={curveLine} alt = 'curve'/>
        <div className={styles.BlackBox}>
          <span id={styles.BlackContainer}></span>
        </div>
        <div className={styles.TrustedByOwner}>Trusted by<span> The Leaders</span>
          <div className={styles.MiniContainer}>
            <div className={styles.Boxes}></div>
            <div className={styles.Boxes}></div>
            <div className={styles.Boxes}></div>
            <div className={styles.Boxes}></div>
            <div className={styles.Boxes}></div>
            <div className={styles.Boxes}></div>
          </div>
        </div>
        <div className={styles.CenterBox}>
           <p>Our <span className={styles.underLineWorld}>Working Progress</span></p>
            {/* <img className={styles.underLineW} src={redline} alt='RedLine'/> */}
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
          {/* <div className={styles.greenContainer}><div className={styles.ImgDiv}><img src={HomePic1}></img></div></div>
          <div className={styles.blueContainer}><div className={styles.ImgDiv}><img src={HomePic2}></img></div></div> */}
        </div>
        {/* <div className={styles.Slider_Div}>
          <Slider1/>
        </div> */}
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
          <div className={styles.WorkProgress}>
          <div><p>System <span><img className={styles.underLineG} src={greenLine} alt='GreenLine'/>of Progress</span></p></div>
          <button id={styles.ReadBlog}>Read Blog</button>
          <div id={styles.contain1}>2</div>
          <div id={styles.contain2}>3</div>
          <div id={styles.contain3}>4</div>
        </div>
           <div className={styles.FAQ}><center>Frequently <span>Asked Questions</span></center>
          <p style={{fontWeight:500,fontSize:25}}>What color should you choose as a primary?<span className = {styles.operator}><button onClick={toggleParagraph1}>{Symbol1}</button></span></p>
          <p ref={pRef1} style={{ display: 'none',  }} className={styles.FaqText}>Lorem ipsum dolor sit amet consectetur. Nunc et nulla laoreet et. Tincidunt feugiat in lectus quis. Neque porttitor arcu faucibus elementum egestas. Id proin malesuada leo nunc est fringilla purus consectetur platea. Dis rhoncus magnis dictum dui interdum ullamcorper donec adipiscing.</p>
          <p style={{fontWeight:500,fontSize:25}}>Lorem ipsum dolor sit amet consectetur?<span className = {styles.operator}><button onClick={toggleParagraph2}>{Symbol2}</button></span></p>
          <p ref={pRef2} style={{ display: 'none',  }} className={styles.FaqText}>Lorem ipsum dolor sit amet consectetur. Nunc et nulla laoreet et. Tincidunt feugiat in lectus quis. Neque porttitor arcu faucibus elementum egestas. Id proin malesuada leo nunc est fringilla purus consectetur platea. Dis rhoncus magnis dictum dui interdum ullamcorper donec adipiscing.</p>
          <p style={{fontWeight:500,fontSize:25}}>Lorem ipsum dolor sit amet consectetur?<span className = {styles.operator}><button onClick={toggleParagraph3}>{Symbol3}</button></span></p>
          <p ref={pRef3} style={{ display: 'none',  }} className={styles.FaqText}>Lorem ipsum dolor sit amet consectetur. Nunc et nulla laoreet et. Tincidunt feugiat in lectus quis. Neque porttitor arcu faucibus elementum egestas. Id proin malesuada leo nunc est fringilla purus consectetur platea. Dis rhoncus magnis dictum dui interdum ullamcorper donec adipiscing.</p>
          </div>
      </div>
    </>
  )
}

export default Home