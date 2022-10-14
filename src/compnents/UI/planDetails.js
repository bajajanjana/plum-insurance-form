import React, { useState } from "react";
import styles from "../../Css/planDetails.module.css";
import * as IoIcon from "react-icons/io";
import * as AiIcon from "react-icons/ai";
import * as RiIcon from "react-icons/ri";
function PlanDetails(props) {
  const [formOpen, setFormOpen] = useState(true);
  const [planType, setPlanType] = useState();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const updatePlanType = (event) => {
    setPlanType(event.target.dataset.val);
    props.updateForm("planType", event.target.dataset.val);
    setDropdownOpen((prevState)=>!prevState);
  };
  const formVisibiltyHandler = () => {
    setFormOpen((prevState) => !prevState);
  };
  return (
    <div className={styles.planDetails}>
      <div className={styles.planHead} onClick={formVisibiltyHandler}>
        <div>Plan Details</div>
        {formOpen && <IoIcon.IoIosArrowDown />}
        {!formOpen && <IoIcon.IoIosArrowUp />}
      </div>
      {formOpen && (
        <div className={styles.planInput}>
          <label for="plan">Your Plan Type</label>
          {/* <select
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
          </select> */}
          <div className={styles.customSelect}>
            <div
              className={styles.selctDiv}
              onClick={() => {
                setDropdownOpen((prevState) => !prevState);
              }}
            >
              <div>{planType}</div>
              <IoIcon.IoIosArrowDown />
            </div>
            {dropdownOpen && (
              <div className={styles.options}>
                <div
                  className={styles.opt}
                  data-val="self"
                  onClick={updatePlanType}
                >
                  <AiIcon.AiOutlineTeam className={styles.optIcon} />
                  <div>self</div>
                </div>
                <div
                  className={styles.opt}
                  data-val="parents"
                  onClick={updatePlanType}
                >
                  <AiIcon.AiOutlineTeam className={styles.optIcon} />
                  <div>parents</div>
                </div>
                <div
                  className={styles.opt}
                  data-val="self+parents"
                  onClick={updatePlanType}
                >
                  <AiIcon.AiOutlineTeam className={styles.optIcon} />
                  <div>self+parent</div>
                </div>
                <div
                  className={styles.opt}
                  data-val="self+spouse+kids"
                  onClick={updatePlanType}
                >
                  <RiIcon.RiTeamLine className={styles.optIcon} />
                  <div>self+spouse+kids</div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default PlanDetails;
