import "./App.css";
import Homepage from "./Homepage/Homepage";
import Login from "./Login/Login";
import Nav from "./Nav/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup/Signup";
import Buy from "./Buy/Buy";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/HomePage" element={<Homepage/>}></Route>
          <Route path="/Signup" element={<Signup/>}></Route>
          <Route path="/Buy" element={<Buy/>}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
