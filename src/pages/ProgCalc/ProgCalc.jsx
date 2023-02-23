import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import React, { useEffect } from "react";
import styles from "../ProgCalc/ProgCalc.module.scss";
function ProgCalc() {
  const [numberSystem, setNumberSystem] = React.useState(2);
  const [number, setNumber] = React.useState("");
  const handleChange = (event) => {
    setNumberSystem(event.target.value);
  };

  useEffect(() => {
    console.log(number);
    console.log(numberSystem);
  }, [number, numberSystem]);
  return (
    <div className={styles["page-content"]}>
      <div className={styles["block-parent"]}>
        <Paper elevation={0} className={styles["calc-block"]}>
          <div className={styles["calc-block-left"]}>
            <TextField
              id="standard-basic"
              label="Число:"
              variant="standard"
              type={"number"}
              value={number}
              onChange={(e) => {
                setNumber(e.target.value);
              }}
              className={styles["input"]}
            />
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={numberSystem}
              label="Age"
              variant="standard"
              onChange={handleChange}
              className={styles["input"]}
            >
              <MenuItem value={2}>BIN - двоичная</MenuItem>
              <MenuItem value={8}>OCT - восьмиричная</MenuItem>
              <MenuItem value={10}>DEC - десетичная</MenuItem>
              <MenuItem value={16}>HEX - Шестнадцатичная</MenuItem>
              {/* Number.parseInt(bin, 2) */}
            </Select>
          </div>
          <div className={styles["calc-block-right"]}>
            {number !== "" ? (
              <div style={{ width: "100%" }}>
                <div className={styles["result-block"]}>
                  <span className={styles["result-title"]}>
                    {` В двоичной системе счисления (BIN): `}
                  </span>
                  <span className={styles["result-num"]}>
                    {parseInt(`${number}`, `${numberSystem}`).toString(2)}
                  </span>
                </div>
                <div className={styles["result-block"]}>
                  <span className={styles["result-title"]}>
                    {`  В восьмеричной системе счисления (OCT):`}
                  </span>
                  <span className={styles["result-num"]}>
                    {parseInt(`${number}`, Number(numberSystem)).toString(8)}
                  </span>
                </div>
                <div className={styles["result-block"]}>
                  <span className={styles["result-title"]}>
                    {`    В десятичной системе счисления (DEC): `}
                  </span>
                  <span className={styles["result-num"]}>
                    {parseInt(`${number}`, numberSystem).toString(10)}
                  </span>
                </div>
                <div className={styles["result-block"]}>
                  <span className={styles["result-title"]}>
                    {` В шестнадцатеричной системе счисления (HEX): `}
                  </span>
                  <span className={styles["result-num"]}>
                    {parseInt(`${number}`, numberSystem).toString(16)}
                  </span>
                </div>
              </div>
            ) : (
              <span className={styles["title-set"]}>Установите число </span>
            )}
          </div>
        </Paper>
      </div>
    </div>
  );
}

export default ProgCalc;
