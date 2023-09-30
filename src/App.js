import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <div className="my-heading">
            <h1>Jobarouter</h1>
          </div>
          <div className="my-links">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
