import { Route, Routes } from "react-router-dom";
import { NavBar } from "./layouts/navBar";
import { HomePage } from "./pages/home/homePage";
import { Footer } from "./layouts/footer";
import { Blog } from "./pages/blog/blog";
import { About } from "./pages/about/about";
import { Account } from "./pages/account/account";
import { SignUp } from "./pages/account/signup/signUp";
import { createContext, useState } from "react";
import "./index.css";
import "swiper/css";

export const objContext = createContext(null);

function App() {
  const [obj, setObj] = useState({
    firstName: "",
    LastName: "",
    email: "",
    password: "",
  });

  return (
    <>
      <objContext.Provider value={{obj, setObj}}>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/account" element={<Account />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
        <Footer />
      </objContext.Provider>
    </>
  );
}

export default App;
