import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
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
    <>
      <Header />
      <div className={styles["page-content"]}>
        <div className="block-parent">
          <h2 className="page-title"> Перевод систем счисления</h2>
          <p className="page-text">
            Данный конвертер переводит числа между наиболее популярными
            системами счисления: десятичной, двоичной, восьмеричной,
            шестнадцатеричной. Система счисления - это способ представления
            числа. Одно и то же число может быть представлено в различных видах.
            Например, число 200 в привычной нам десятичной системе может иметь
            вид 11001000 в двоичной системе, 310 в восьмеричной и C8 в
            шестнадцатеричной.
          </p>
          <Paper
            elevation={0}
            className={styles["calc-block"]}
            style={{ width: "60%" }}
          >
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
            <div
              className={styles["calc-block-right"]}
              style={{ width: "100%", height: "100%" }}
            >
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
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  {" "}
                  <span className={styles["title-set"]}>Введите число </span>
                </div>
              )}
            </div>
          </Paper>
        </div>
      </div>
    </>
  );
}

export default ProgCalc;
