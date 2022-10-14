import React from 'react'
import styles from "../../Css/congratsScreen.module.css"
import FinalDataCard from './finalDataCard'

function CongratsScreen(props) {
  return (
    <div className={styles.screenLayout}>
    <div className={styles.mainHeaderContent}>
    <div className={styles.heading}>Congratulations!</div>
    </div>
    <FinalDataCard formDetails={props.formDetails}/>
  </div>
  )
}

export default CongratsScreen