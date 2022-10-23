import React from "react";  
import "./App.css";
import Home from "./component/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import Login from "./component/Login/Login";
import Contact from "./component/Contact/Contact";
import Registration from "./component/Registration/Registration";
import Talents from "./component/Talents/Talents";
import Errorpage from "./component/Errorpage/Errorpage";
import {Route,Routes} from "react-router-dom";

function App() {
  return (
        <div className="App-outer"> 
            <Navbar/>
            <Routes>
                  <Route exact path="/" element={<Home/>} />
                  <Route path="/talents" element={<Talents/>} />
                  <Route path="/contact" element={<Contact/>} />
                  <Route path="/login" element={<Login/>} />
                  <Route path="/registration" element={<Registration/>} />
                  <Route path="*" element={<Errorpage/>}/>
            </Routes>
        </div>
  );
};

export default App;
