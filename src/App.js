


import './App.css';
import { Link, Routes, Route } from "react-router-dom";
import Home from "./MYPROJECT/Home";
import About from "./MYPROJECT/About";
import Menu from "./MYPROJECT/Menu";
import Contact from "./MYPROJECT/Contact";

function App() {
  return (
    <div className="App">
    
        {/* <nav>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/menu">Menu</Link>
           <Link to="/contact">Contact</Link>
        </nav> */}
        <RouterComponent />
    </div>
  );
}

function RouterComponent() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;

