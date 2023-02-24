import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./components/NotFound/NotFound";
import Main from "./pages/Main/Main";
import ProgCalc from "./pages/ProgCalc/ProgCalc";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/system/number" element={<ProgCalc />} />{" "}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
