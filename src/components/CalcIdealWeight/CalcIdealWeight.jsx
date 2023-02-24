import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import React from "react";
import styles from "../CalcIdealWeight/CalcIdealWeight.module.scss";
import Header from "../Header/Header";
import Box from "../UI/Box/Box";
function CalcIdealWeight() {
  const [gender, setGender] = React.useState("male");
  const [height, setheight] = React.useState("");

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  React.useEffect(() => {
    console.log(`(${height} - 110) * 1,15 = ${(Number(height) - 110) * 1.15}`);
  }, [height]);

  return (
    <div>
      <Header />
      <div className="page-content">
        <div
          className="block-parent"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2 className="page-title">Калькулятор идеального веса</h2>
          <p className="page-text">
            С помощью данного онлайн-калькулятора вы можете рассчитать так
            называемый «идеальный вес» или «идеальную массу» вашего тела. Для
            того, чтобы узнать какой вес для вас будет считаться «идеальным»,
            или правильнее сказать нормальным, заполните в калькуляторе поля,
            соответствующие вашим данным. После ввода данных и калькулятор
            выведет значение «идеального веса» для людей с такими же параметрами
            как и у вас
          </p>
          <Box
            stylesProps={{
              width: "35%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span className={styles["box-title"]}>
              Калькулятор идеального веса
            </span>
            <div style={{ marginBottom: "20px", marginTop: "20px" }}>
              <TextField
                id="standard-basic"
                label="Рост в см"
                variant="standard"
                type={"number"}
                value={height}
                onChange={(e) => {
                  setheight(e.target.value);
                }}
                style={{ width: "100%" }}
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={gender}
                label="Укажите пол"
                variant="standard"
                onChange={handleChange}
                style={{ width: "100%" }}
              >
                <MenuItem value={"female"}>Женский</MenuItem>
                <MenuItem value={"male"}>Мужской</MenuItem>
              </Select>
            </div>

            {height !== "" ? (
              <div style={{ display: "flex" }}>
                <span
                  className={styles["result-title"]}
                  style={{ marginRight: "6px" }}
                >
                  Результат:
                </span>
                <span className={styles["result-span"]}>
                  {gender == "male"
                    ? ((Number(height) - 100) * 1.15).toFixed(0)
                    : ((Number(height) - 110) * 1.15).toFixed(0)}
                </span>
              </div>
            ) : (
              ""
            )}
          </Box>
        </div>
      </div>
    </div>
  );
}

export default CalcIdealWeight;
