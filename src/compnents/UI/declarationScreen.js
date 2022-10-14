import React from "react";
import * as IoIcon from "react-icons/io";
import styles from "../../Css/declarationScreen.module.css";

function DeclarationScreen(props) {
  const backArrowHandler = () => {
    props.gotoBackScreenHandler("amountSelectionScreen");
  };
  const declarationsList = [
    "I hereby declare that none of the proposed members are habitual consumers of alcohol,tobacco,gutka or any recreational drugs",
    "I hereby declare that none of the proposed members are habitual consumers of alcohol,tobacco,gutka or any recreational drugs",
    "I hereby declare that none of the proposed members are habitual consumers of alcohol,tobacco,gutka or any recreational drugs",
    "I hereby declare that none of the proposed members are habitual consumers of alcohol,tobacco,gutka or any recreational drugs",
  ];

  const setDecalartionsHandler = (event) => {};
  return (
    <div className={styles.screenLayout}>
      <div className={styles.mainHeader}>
        <div className={styles.backArrow} onClick={backArrowHandler}>
          <IoIcon.IoIosArrowBack />
        </div>
        <div className={styles.mainHeaderContent}>
          <div className={styles.heading}>Declaration</div>
        </div>
      </div>
      <div className={styles.declarationList}>
        {declarationsList.map((declaration, index) => {
          return (
            <div className={styles.declarationStatement}>
              <input
                type="checkbox"
                onChange={() => {
                  props.updateForm(`declaration${index}`,true);
                }}
              ></input>
              <div>{declaration}hello</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DeclarationScreen;
