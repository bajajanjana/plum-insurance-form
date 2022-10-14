import React, { useState } from 'react'
import styles from "../../Css/amountSelectionScreen.module.css"
import AmountSlider from './amountSlider'
import * as IoIcon from "react-icons/io";

function AmountSelectionScreen(props) {
  const backArrowHandler=()=>{
    props.gotoBackScreenHandler('basicDetailsScreen');
  }
  return (
    <div className={styles.formLayout}>
      <div className={styles.mainHeader}>
      <div className={styles.backArrow} onClick={backArrowHandler}><IoIcon.IoIosArrowBack/></div>
      <div className={styles.mainHeaderContent}>
      <div className={styles.heading}>Select Your Deductible Amount</div>
      <div>Select the deductible amount for the policy (or policies) below.
        <a href='#' title='blank'>(What is deductible?)</a>
      </div>
      </div>
      </div>
      <AmountSlider updateForm={props.updateForm}/>
    </div>
  )
}

export default AmountSelectionScreen