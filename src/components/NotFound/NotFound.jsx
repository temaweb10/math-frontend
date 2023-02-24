import React from "react";
import Header from "../Header/Header";
import styles from "../NotFound/NotFound.module.scss";
function NotFound() {
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span className={styles["not-found-error"]}>404</span>
          <span className={styles["not-found-text"]}>Страница не найдена</span>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
