import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import Login from "./pages/Login";
import {BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Signup from "./pages/Signup";
import Footer from "./Components/Footer";
import Datacontext from "./Context/Datacontext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function App() {
  return (
    <div className="scroll-smooth">
      <ToastContainer position="top-right" autoClose={6000} />
      <Datacontext>
      <BrowserRouter>
       <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/blogs" element={<Blogs/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
      </Datacontext>
    </div>
  );
}

export default App;
