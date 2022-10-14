import React, { useRef, useState } from "react";
import CompletionTacker from "./UI/completionTacker";
import styles from "../Css/layout.module.css";
import BasicDetailsScreen from "./UI/basicDetailsScreen";
import AmountSelectionScreen from "./UI/amountSelectionScreen";
import DeclarationScreen from "./UI/declarationScreen";
import ReviewScreen from "./UI/reviewScreen";
import CongratsScreen from "./UI/congratsScreen";
import Preview from "./UI/preview";

function Layout() {
  const [formDetails, setFormDetails] = useState({
    planType: "",
    planSelected: "",
    email: "",
    mobNo: "",
    addressLine1: "",
    addressLine2: "",
    pincode: "",
    state: "",
    declaration0: false,
    declaration1: false,
    declaration2: false,
    declaration3: false,
  });
  const [currentScreen, setCurrentScreen] = useState("basicDetailsScreen");
  const updateForm = (field, value) => {
    return setFormDetails({
      ...formDetails,
      [field]: value,
    });
  };

  const checkFormValidation = () => {
    if (formDetails.planType === "") {
      global.window.alert("Alert!! Please select the Plan Type");
      return false;
    }
    if (formDetails.email === "") {
      global.window.alert("Alert!! Please enter the email address");
      return false;
    }
    if (formDetails.mobNo === "") {
      global.window.alert("Alert!! Please select the mobile number");
      return false;
    }
    if (formDetails.addressLine1 === "" && formDetails.addressLine2 === "") {
      global.window.alert("Alert!! Please enter the address");
      return false;
    }
    if (formDetails.pincode === "") {
      global.window.alert("Alert!! Please enter the pincode");
      return false;
    }
    if (formDetails.state === "") {
      global.window.alert("Alert!! Please enter the state");
      return false;
    }
    if (
      currentScreen === "amountSelectionScreen" &&
      formDetails.planSelected === ""
    ) {
      global.window.alert("Alert!! Please select the deductible amount");
      return false;
    }
    if (
      currentScreen === "declarationScreen" &&
      (formDetails.declaration0 === false ||
        formDetails.declaration1 === false ||
        formDetails.declaration2 === false ||
        formDetails.declaration3 === false)
    ) {
      global.window.alert("Alert!! Please check all the declarations");
      return false;
    }
    return true;
  };
  const nextClickHandler = () => {
    if (!checkFormValidation()) {
      return;
    }
    if (currentScreen === "basicDetailsScreen")
      setCurrentScreen("amountSelectionScreen");
    else if (currentScreen === "amountSelectionScreen")
      setCurrentScreen("declarationScreen");
    else if (currentScreen === "declarationScreen")
      setCurrentScreen("reviewScreen");
    else setCurrentScreen("congratsScreen");
  };

  const gotoBackScreenHandler = (screen) => {
    setCurrentScreen(screen);
  };

  return (
    <div className={styles.layout}>
      <CompletionTacker currentScreen={currentScreen} />
      <div className={styles.formLayout}>
        {currentScreen === "basicDetailsScreen" && (
          <BasicDetailsScreen updateForm={updateForm}/>
        )}
        {currentScreen === "amountSelectionScreen" && (
          <AmountSelectionScreen
            gotoBackScreenHandler={gotoBackScreenHandler}
            updateForm={updateForm}
          />
        )}
        {currentScreen === "declarationScreen" && (
          <DeclarationScreen
            gotoBackScreenHandler={gotoBackScreenHandler}
            updateForm={updateForm}
          />
        )}
        {currentScreen === "reviewScreen" && (
          <ReviewScreen
            gotoBackScreenHandler={gotoBackScreenHandler}
            formDetails={formDetails}
          />
        )}
        {currentScreen === "congratsScreen" && (
          <CongratsScreen formDetails={formDetails} />
        )}
        {currentScreen != "congratsScreen" && (
          <Preview formDetails={formDetails} />
        )}
      </div>
      {currentScreen != "congratsScreen" && (
        <div className={styles.bottomBar}>
          <button className={styles.next} type="submit" onClick={nextClickHandler}>
            {currentScreen === "reviewScreen" ? "Submit" : "Next"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Layout;
