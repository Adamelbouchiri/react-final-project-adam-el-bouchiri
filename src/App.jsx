import { Route, Routes } from "react-router-dom";
import { NavBar } from "./layouts/navBar";
import { HomePage } from "./pages/home/homePage";
import { Footer } from "./layouts/footer";
import { Blog } from "./pages/blog/blog";
import { About } from "./pages/about/about";
import "./index.css";
import "swiper/css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
