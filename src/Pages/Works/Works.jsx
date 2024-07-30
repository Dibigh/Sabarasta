import React from 'react'
<<<<<<< HEAD

function Works() {
  return (
    <div>Works</div>
  )
}

export default Works
=======
import { useNavigate } from 'react-router-dom';
import star from '../../Logo/star.svg'
import greenLine from '../../Logo/greenline.svg'
import styles from './Works.module.css'

function Works() {
  return (
    <>
     <div className={styles.bodyContainer}>
      <span id = {styles.starDoodle}>
        <img src={star} alt = 'starDoodle'/>
      </span>
        <h1>Explore Our Gallery, Where Every</h1>
          <h1>Project Tells <span className={styles.UnderlineText}>Success.<img className={styles.underLine} src={greenLine} alt='GreenLine'/></span></h1>
        <p>Discover the journey behind each project and the success stories that drive our passion for excellence. </p>
        <div className = {styles.Container}>
          <div id={styles.GridDiv1}>1</div>
          <div id={styles.GridDiv2}>2</div>
          <div id={styles.GridDiv3}>3</div>
          <div id={styles.GridDiv4}>4</div>
          <div id={styles.GridDiv5}>5</div>
          <div id={styles.GridDiv6}>6</div>
        </div>
        </div>
        </>
  );
}
export default Works;
>>>>>>> f6a7eef30e38add7c00ff552268010452c0ca48c
