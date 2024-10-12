import React from 'react'
import styles from './ContentWrapper.module.css'
const ContentWrapper=({children})=>{
  return (
    <>
    <p>this is header</p>
    <div id={styles.contentwrapper}>{children}</div>
    <p>this is footer</p>
    </>
  )
}

export default ContentWrapper;