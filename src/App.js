import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CalcIdealWeight from "./components/CalcIdealWeight/CalcIdealWeight";
import CalcProcent from "./components/CalcProcent/CalcProcent";
import NotFound from "./components/NotFound/NotFound";
import Main from "./pages/Main/Main";
import ProgCalc from "./pages/ProgCalc/ProgCalc";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/calc/system-number" element={<ProgCalc />} />
        <Route path="/calc/procent" element={<CalcProcent />} />
        <Route path="/calc/ideal-weight" element={<CalcIdealWeight />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
