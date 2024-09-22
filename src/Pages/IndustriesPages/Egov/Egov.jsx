import React from 'react';
import { useNavigate } from 'react-router-dom';
import greenLine from '../../../Logo/greenline.svg';
import styles from './Egov.module.css';

function Egov() {
  return (
    <>
       <div className={styles.bodyContainer}>
        <h1>Discover Our Products:</h1>
        <h1>Solutions for <span className={styles.UnderlineText}>Every Need.<img className={styles.underLine} src={greenLine} alt='GreenLine'/></span></h1>
        <p>Explore our range of innovative products designed to empower your success. </p>
        </div>
    </>
  )
}

export default Egov;