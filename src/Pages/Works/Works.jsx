import React from 'react';
import { useNavigate } from 'react-router-dom';
import star from '../../Logo/star.svg';
import greenLine from '../../Logo/greenline.svg';
import styles from './Works.module.css';
import TheHaamro from '../../Logo/TheHaamro.svg';
import HaamroLink from '../../Logo/HaamroLink.svg';
import MeroProject from '../../Logo/MeroProject.svg';
import MeroLink from '../../Logo/MeroLink.svg';
import Volute from '../../Logo/VoluteArchitects.svg';
import VoluteLink from '../../Logo/VoluteLink.svg';
import Sunita from '../../Logo/SunitaBaral.svg';
import SunitaLink from '../../Logo/SunitaLink.svg';
import Public from '../../Logo/PublicPost.svg';
import PublicLink from '../../Logo/PublicLink.svg';
import Alok from '../../Logo/AlokyaDeep.svg';
import AlokLink from '../../Logo/AlokLink.svg';
import KaloBakas from '../../Logo/KaloBakas.svg';
function Works() {
  return (
    <>
     <div className={styles.bodyContainer}>
        <h1>Explore Our Gallery, Where Every</h1>
          <h1>Project Tells <span className={styles.UnderlineText}>Success.<img className={styles.underLine} src={greenLine} alt='GreenLine'/></span></h1>
        <p>Discover the journey behind each project and the success stories that drive our passion for excellence. </p>
        <div className = {styles.Container}>
          <div id={styles.GridDiv1}>
            <div className ={styles.TextContainer}>
            <div>
            <div className = {styles.Pics}><img src = {TheHaamro}></img></div>
            <p>Nepal’s first fully functional electronic ecommerce platform.</p>
            <br></br><br></br>
            <p>Buyers can take full control in-site what they want for their project they would to a shopkeeper.</p>
            <br></br><br></br>
            <p>MeroProject also guides them throughout their buying journey. From pre-approval to closing.</p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <img src = {HaamroLink}></img>
            </div>
          </div>
          <div className={styles.BlackContainer}><img src={KaloBakas}></img></div>
        </div>
          <div id={styles.GridDiv2}>
             <div className ={styles.TextContainer}>
            <div>
            <div className = {styles.Pics}><img src = {MeroProject}></img></div>
            <p>Nepal’s first fully functional electronic ecommerce platform.</p>
            <br></br><br></br>
            <p>Buyers can take full control in-site what they want for their project they would to a shopkeeper.</p>
            <br></br><br></br>
            <p>MeroProject also guides them throughout their buying journey. From pre-approval to closing.</p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <img src = {MeroLink}></img>
            </div>
          </div>
          <div className={styles.BlackContainer}><img src={KaloBakas}></img></div>
          </div>
          <div id={styles.GridDiv3}>
             <div className ={styles.TextContainer}>
            <div>
            <div className = {styles.Pics}><img src = {Volute}></img></div>
            <p>Nepal’s first fully functional electronic ecommerce platform.</p>
            <br></br><br></br>
            <p>Buyers can take full control in-site what they want for their project they would to a shopkeeper.</p>
            <br></br><br></br>
            <p>MeroProject also guides them throughout their buying journey. From pre-approval to closing.</p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <img src = {VoluteLink}></img>
            </div>
          </div>
          <div className={styles.BlackContainer}><img src={KaloBakas}></img></div>
          </div>
          <div id={styles.GridDiv4}>
            <div className ={styles.TextContainer}>
            <div>
            <div className = {styles.Pics}><img src = {Sunita}></img></div>
            <p>Nepal’s first fully functional electronic ecommerce platform.</p>
            <br></br><br></br>
            <p>Buyers can take full control in-site what they want for their project they would to a shopkeeper.</p>
            <br></br><br></br>
            <p>MeroProject also guides them throughout their buying journey. From pre-approval to closing.</p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <img src = {SunitaLink}></img>
            </div>
          </div>
          <div className={styles.BlackContainer}><img src={KaloBakas}></img></div>
          </div>
          <div id={styles.GridDiv5}>
            <div className ={styles.TextContainer}>
            <div>
            <div className = {styles.Pics}><img src = {Public}></img></div>
            <p>Nepal’s first fully functional electronic ecommerce platform.</p>
            <br></br><br></br>
            <p>Buyers can take full control in-site what they want for their project they would to a shopkeeper.</p>
            <br></br><br></br>
            <p>MeroProject also guides them throughout their buying journey. From pre-approval to closing.</p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <img src = {PublicLink}></img>
            </div>
          </div>
          <div className={styles.BlackContainer}><img src={KaloBakas}></img></div>
          </div>
          <div id={styles.GridDiv6}> 
             <div className ={styles.TextContainer}>
            <div>
            <div className = {styles.Pics}><img src = {Alok}></img></div>
            <p>Nepal’s first fully functional electronic ecommerce platform.</p>
            <br></br><br></br>
            <p>Buyers can take full control in-site what they want for their project they would to a shopkeeper.</p>
            <br></br><br></br>
            <p>MeroProject also guides them throughout their buying journey. From pre-approval to closing.</p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <img src = {AlokLink}></img>
            </div>
          </div>
          <div className={styles.BlackContainer}><img src={KaloBakas}></img></div>
          </div>
          </div>
          </div>
        </>
  );
}
export default Works;
