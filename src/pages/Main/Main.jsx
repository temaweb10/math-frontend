import React, { useState } from "react";
import { addStyles, EditableMathField } from "react-mathquill";
import Header from "../../components/Header/Header";
addStyles();
function Main() {
  const [latex, setLatex] = useState("\\frac{1}{\\sqrt{2}}\\cdot 2");
  return (
    <div>
      <Header />
      <div>
        <EditableMathField
          latex={latex}
          onChange={(mathField) => {
            setLatex(mathField.latex());
          }}
        />
        <p>{latex}</p>
      </div>
    </div>
  );
}

export default Main;
