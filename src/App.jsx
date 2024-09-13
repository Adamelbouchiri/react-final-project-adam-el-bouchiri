import { Route, Routes } from "react-router-dom";
import { NavBar } from "./layouts/navBar";
import { HomePage } from "./pages/home/homePage";
import { Footer } from "./layouts/footer";
import { Blog } from "./pages/blog/blog";
import { About } from "./pages/about/about";
import "./index.css";
import "swiper/css";
import { Account } from "./pages/account/account";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
