import React from "react";
import styles from "../../Css/completionTracker.module.css";

function CompetionTacker(props) {
  return (
    <div className={styles.tracker}>
      {props.currentScreen === "basicDetailsScreen" && (
        <>
          <div className={`${styles.block} ${styles.tracked}`}></div>
          <div className={`${styles.block} ${styles.notTracked}`}></div>
          <div className={`${styles.block} ${styles.notTracked}`}></div>
          <div className={`${styles.block} ${styles.notTracked}`}></div>
        </>
      )}
      {props.currentScreen === "amountSelectionScreen" && (
        <>
          <div className={`${styles.block} ${styles.tracked}`}></div>
          <div className={`${styles.block} ${styles.tracked}`}></div>
          <div className={`${styles.block} ${styles.notTracked}`}></div>
          <div className={`${styles.block} ${styles.notTracked}`}></div>
        </>
      )}
      {props.currentScreen === "declarationScreen" && (
        <>
          <div className={`${styles.block} ${styles.tracked}`}></div>
          <div className={`${styles.block} ${styles.tracked}`}></div>
          <div className={`${styles.block} ${styles.tracked}`}></div>
          <div className={`${styles.block} ${styles.notTracked}`}></div>
        </>
      )}
      {props.currentScreen === "reviewScreen" && (
        <>
          <div className={`${styles.block} ${styles.tracked}`}></div>
          <div className={`${styles.block} ${styles.tracked}`}></div>
          <div className={`${styles.block} ${styles.tracked}`}></div>
          <div className={`${styles.block} ${styles.tracked}`}></div>
        </>
      )}
    </div>
  );
}

export default CompetionTacker;
