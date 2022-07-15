import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuBar from "./components/MenuBar/MenuBar";
import Home from "./pages/Home/Home";
import CompanyInfo from "./pages/CompanyInfo/CompanyInfo";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <MenuBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/company-info" element={<CompanyInfo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
