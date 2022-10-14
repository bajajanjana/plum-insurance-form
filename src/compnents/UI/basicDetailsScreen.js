import React from "react";
import styles from "../../Css/basicDetailsScreen.module.css";
import BasicDetails from "./basicDetails";
import PlanDetails from "./planDetails";
import * as BiIcon from "react-icons/bi";

function BasicDetailsScreen(props) {
  return (
    <div className={styles.formLayout}>
      <div className={styles.mainHeader}>
        <div className={styles.heading}>Choose Your Plan</div>
        <div>Hello Anisha!</div>
        <div>
          Increase yours amd your family health insurance cover by{" "}
          <BiIcon.BiRupee className={styles.rupee} />
          20 lakhs with Super top-up!
        </div>
      </div>
      <PlanDetails
        updateForm={props.updateForm}
      />
      <BasicDetails
        updateForm={props.updateForm}
      />
    </div>
  );
}

export default BasicDetailsScreen;
