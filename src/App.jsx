import { Route, Routes } from "react-router-dom";
import { NavBar } from "./layouts/navBar";
import { HomePage } from "./pages/home/homePage";
import "./index.css";
import "swiper/css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
