import React,{useState} from "react";
import styles from "../../Css/amountSlider.module.css";
import * as BiIcon from "react-icons/bi";

function AmountSlider(props) {
  const [deductibleAmount,setDeductibleAmount]=useState(1);
  const inputHandler = (event) => {
    props.updateForm('planSelected',event.target.value);
    setDeductibleAmount(event.target.value);
  }
  return (
    <div className={styles.amountDetails}>
      <div className={styles.amountHead}>
        <div>Self (Individual)</div>
      </div>
      <div className={styles.range}>
      <div>Sum insured of <BiIcon.BiRupee className={styles.rupee}/> 20,00,000 with a deductible of <BiIcon.BiRupee className={styles.rupee}/> {deductibleAmount},00,000</div>
        <input type="range" min="1" max="5" value={deductibleAmount} className={styles.slider} onChange={inputHandler}/>
        <ul className={styles.rangeLabel}>
          <li>1L</li>
          <li>2L</li>
          <li>3L</li>
          <li>4L</li>
          <li>5L</li>
        </ul>
      </div>

    </div>
  );
}

export default AmountSlider;
