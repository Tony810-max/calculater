import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import CalculateSecond from "./CalculateSecond";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/Home"} element={<HomePage />}></Route>
        <Route path={"/"} element={<CalculateSecond />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
