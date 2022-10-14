import React from "react";
import styles from "../../Css/preview.module.css";
function Preview(props) {
  return (
    <div className={styles.preview}>
      <div className={styles.previewHead}>
        <div>Form Preview</div>
      </div>
      <div className={styles.dataSheet}>
        <div className={styles.dataRow}>
          <div>Email Address</div>
          <div>{props.formDetails.email}</div>
        </div>
        <div className={styles.dataRow}>
          <div>Mobile Number</div>
          <div>{props.formDetails.mobNo}</div>
        </div>
        <div className={styles.dataRow}>
          <div>Address line1</div>
          <div>{props.formDetails.addressLine1}</div>
        </div>
        <div className={styles.dataRow}>
          <div>Address line2</div>
          <div>{props.formDetails.addressLine2}</div>
        </div>
        <div className={styles.dataRow}>
          <div>Pincode</div>
          <div>{props.formDetails.pincode}</div>
        </div>
        <div className={styles.dataRow}>
          <div>State</div>
          <div>{props.formDetails.state}</div>
        </div>
      </div>
    </div>
  );
}

export default Preview;
