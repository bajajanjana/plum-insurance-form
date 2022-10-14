import React from "react";
import * as IoIcon from "react-icons/io";
import styles from "../../Css/reviewScreen.module.css";
import FinalDataCard from "./finalDataCard";

function ReviewScreen(props) {

  const backArrowHandler = () => {
    props.gotoBackScreenHandler("declarationScreen");
  };
  return (
    <div className={styles.screenLayout}>
      <div className={styles.mainHeader}>
        <div className={styles.backArrow} onClick={backArrowHandler}>
          <IoIcon.IoIosArrowBack />
        </div>
        <div className={styles.mainHeaderContent}>
          <div className={styles.heading}>Review and confirm payment</div>
        </div>
      </div>
      <FinalDataCard formDetails={props.formDetails}/>
    </div>
  );
}

export default ReviewScreen;
