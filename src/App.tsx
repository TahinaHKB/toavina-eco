import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./page/Home";
import Principe from "./page/Principe";
import Avantage from "./page/Avantage";
import ScrollToTop from "./component/Scorll";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/principle" element={<Principe />} />
        <Route path="/avantage" element={<Avantage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
