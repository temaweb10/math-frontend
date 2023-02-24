import React from "react";
import styles from "../CalcProcent/CalcProcent.module.scss";
import Header from "../Header/Header";
function CalcProcent() {
  return (
    <div>
      <Header />
      <div className="page-content">
        <div className="block-parent">
          <div className={styles["calc-block"]}>3</div>
        </div>
      </div>
    </div>
  );
}

export default CalcProcent;
