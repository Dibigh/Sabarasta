import React from 'react';
import { useNavigate } from 'react-router-dom';
import star from '../../Logo/star.svg';
import redLine from '../../Logo/redLine.svg';
import styles from './About.module.css';
import profile from '../../Logo/pk.svg';
import social from '../../Logo/SocialIcons.svg';
import bubbles from '../../Logo/redbubble.svg';
import pkc from '../../Logo/pkc.svg';
import bp from '../../Logo/bp.svg';
import dr from '../../Logo/dr.svg';
import db from '../../Logo/db.svg';
import ukk from '../../Logo/ukk.svg';
import skc from '../../Logo/skc.svg';

function About() {
  return (
    <>
       <div className={styles.bodyContainer}>
        <h1>Behind the Vision, Crafting</h1>
          <h1>Tomorrow's <span className={styles.UnderlineText}>Successes.<img className={styles.underLine} src={redLine} alt='GreenLine'/></span></h1>
        <p>Get to know us behind the vision and the values that drive our commitment to excellence every day.</p><img src={bubbles} className={styles.bubbly}></img>
        <div className={styles.Container}>
          <p>We are <span>product tinkerers,</span></p>
          <br></br>
          <br></br>
          <p>Since inception, things have changed quite a bit.</p>
          <br></br>
          <br></br>
          <p>We feel proud to have worked with numbers of early-stage founders to build their products and some have raised 1000s in funding after they worked with us (we can't promise millions in funding, but a kickass product - we sure do!).</p>
          <br></br>
          <br></br>
          <p>We obsess over giving you the best team to build your products.</p>
          <br></br>
          <br></br>
          <p>We believe we are your partners. Not contractors.</p>
          <br></br>
          <br></br>
          <p>And we will never shy away from our mission. The mission to become the most founder-centric agency ever.</p>
        </div>
        <div className={styles.Board}>
          <p>Meet <span>The Sabrasta Team</span></p>
          <div className={styles.GridLay}>
          <div id={styles.Boxes1}><img src={pkc}></img><div className={styles.ProfileText}><p>Prabhat Kumar Chaudary</p><span>Designer</span><div className={styles.LogoText}>Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</div></div><div className = {styles.Icons}><img src={social}></img></div></div>
          <div id={styles.Boxes2}><img src={db}></img><div className={styles.ProfileText}><p>Dipesh Bohara</p><span>Security Expert</span><div className={styles.LogoText}>Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</div></div><div className = {styles.Icons}><img src={social}></img></div></div>
          <div id={styles.Boxes3}><img src={dr}></img><div className={styles.ProfileText}><p>Dibigh Rai</p><span>Developer</span><div className={styles.LogoText}>Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</div></div><div className = {styles.Icons}><img src={social}></img></div></div>
          <div id={styles.Boxes4}><img src={skc}></img><div className={styles.ProfileText}><p>Santosh Kumar Chaudhary</p><span>Developer</span><div className={styles.LogoText}>Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</div></div><div className = {styles.Icons}><img src={social}></img></div></div>
          <div id={styles.Boxes5}><img src={bp}></img><div className={styles.ProfileText}><p>Biplov Paneru</p><span>Researcher</span><div className={styles.LogoText}>Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</div></div><div className = {styles.Icons}><img src={social}></img></div></div>
          <div id={styles.Boxes6}><img src={ukk}></img><div className={styles.ProfileText}><p>Rajiv Kumar Yadav</p><span>Media Manager</span><div className={styles.LogoText}>Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</div></div><div className = {styles.Icons}><img src={social}></img></div></div>
         </div>
         </div>
        </div>
        </>
        )
}
export default About;