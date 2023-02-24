import Paper from "@mui/material/Paper";
import React from "react";
import styles from "../Box/Box.module.scss";
function Box({ stylesProps, children }) {
  console.log(children);
  console.log(stylesProps);
  return (
    <Paper elevation={0} className={styles["box"]} style={stylesProps}>
      {children}
    </Paper>
  );
}

export default Box;
