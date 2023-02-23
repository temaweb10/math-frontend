import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main/Main";
import ProgCalc from "./pages/ProgCalc/ProgCalc";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/prog" element={<ProgCalc />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
