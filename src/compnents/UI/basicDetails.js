import React, { useState } from "react";
import styles from "../../Css/basicDetails.module.css";
import * as IoIcon from "react-icons/io";

function BasicDetails(props) {
  const [formOpen,setFormOpen]=useState(true);
  const [basicDetails, setBasicDetails] = useState({
    email: "",
    mobNo: "",
    addressLine1: "",
    addressLine2: "",
    pincode: "",
    state: "",
  });

  const updateEmail = (event) => {
    setBasicDetails({
      ...BasicDetails,
      email: event.target.value,
    });
    props.updateForm("email", event.target.value);
  };
  const updateNumber = (event) => {
    setBasicDetails({
      ...BasicDetails,
      mobNo: event.target.value,
    });
    props.updateForm("mobNo", event.target.value);
  };
  const updateAddressOne = (event) => {
    setBasicDetails({
      ...BasicDetails,
      addressLine1: event.target.value,
    });
    props.updateForm("addressLine1", event.target.value);
  };
  const updateAddressTwo = (event) => {
    setBasicDetails({
      ...BasicDetails,
      addressLine2: event.target.value,
    });
    props.updateForm("addressLine2", event.target.value);
  };
  const updatePinCode = (event) => {
    setBasicDetails({
      ...BasicDetails,
      pincode: event.target.value,
    });
    props.updateForm("pincode", event.target.value);
  };
  const updateState = (event) => {
    setBasicDetails({
      ...BasicDetails,
      state: event.target.value,
    });
    props.updateForm("state", event.target.value);
  };
  const formVisibiltyHandler=()=>{
    setFormOpen((prevState)=>!prevState);
  }

  return (
    <div className={styles.basicDetails}>
      <div className={styles.basicHead} onClick={formVisibiltyHandler}>
        <div>Basic Details(Required)</div>
        {formOpen && <IoIcon.IoIosArrowDown/>}
        {!formOpen && <IoIcon.IoIosArrowUp/>}
      </div>
      {formOpen &&  <div className={styles.basicInput}>
        <div>
          <label for="mail">Personal Email Address</label>
          <input
            type="email"
            id="mail"
            value={basicDetails.email}
            onChange={updateEmail}
            className={styles.input}
            placeholder="Enter email"
          ></input>
        </div>
        <div>
          <label for="number">Mobile Number</label>
          <input
            type="text"
            id="number"
            value={basicDetails.mobNo}
            onChange={updateNumber}
            className={styles.input}
            placeholder="Enter mobile no."
          ></input>
        </div>
        <div>
          <label for="address1">Address line 01</label>
          <input
            type="text"
            id="address1"
            value={basicDetails.addressLine1}
            onChange={updateAddressOne}
            className={styles.input}
            placeholder="Enter address line 1"
          ></input>
        </div>
        <div>
          <label for="address2">Address line 02</label>
          <input
            type="text"
            id="address2"
            value={basicDetails.addressLine2}
            onChange={updateAddressTwo}
            className={styles.input}
            placeholder="Enter address line 2"
          ></input>
        </div>
        <div>
          <label for="pin">Pincode</label>
          <input
            type="number"
            id="pin"
            value={basicDetails.pincode}
            onChange={updatePinCode}
            className={styles.input}
            placeholder="Enter pincode"
          ></input>
        </div>
        <div>
          <label for="state">State</label>
          <input
            type="text"
            id="state"
            value={basicDetails.state}
            onChange={updateState}
            className={styles.input}
            placeholder="Enter state"
          ></input>
        </div>
      </div>}
    </div>
  );
}

export default BasicDetails;
