import React, { useState } from "react";
import styles from "../../Css/planDetails.module.css";
import * as IoIcon from "react-icons/io";

function PlanDetails(props) {
  const [formOpen, setFormOpen] = useState(true);
  const [planType, setPlanType] = useState();

  const updatePlanType = (event) => {
    setPlanType(event.target.value);
    props.updateForm("planType", event.target.value);
  };
  const formVisibiltyHandler = () => {
    setFormOpen((prevState) => !prevState);
  };
  return (
    <div className={styles.planDetails}>
      <div className={styles.planHead} onClick={formVisibiltyHandler}>
        <div>Plan Details</div>
        {formOpen && <IoIcon.IoIosArrowDown/>}
        {!formOpen && <IoIcon.IoIosArrowUp/>}
      </div>
      {formOpen && (
        <div className={styles.planInput}>
          <label for="plan">Your Plan Type</label>
          <select
            id="plan"
            name="plan"
            value={planType}
            onChange={updatePlanType}
            className={styles.planDropdown}
          >
            <option value="Select Plan">Select Plan</option>
            <option value="Plan One">Plan One</option>
            <option value="Plan two">Plan two</option>
            <option value="Plan three">Plan three</option>
            <option value="Plan four">Plan four</option>
          </select>
        </div>
      )}
    </div>
  );
}

export default PlanDetails;
