import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
import Color from './component/Color';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  const[mode, setmode] = useState('light');
  const[alert, setalert] = useState(null);

  const showAlert=(message, type)=>{ 
    setalert({
      msg: message,
      type: type
    })
    setTimeout( ()=>{
      setalert(null);
    },2000)
  }
  const togglemode=()=>
{
  if(mode === 'dark'){
    setmode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled", "success");
    document.title = 'TextUtils - Light mode';
    setInterval(()=>{
      document.title = 'TextUtils is a amazing mode';
    },2000);
    setInterval(()=>{
      document.title = 'Install textUtls Now';
    },500);
  }
  else{
    setmode('dark');
    document.body.style.backgroundColor = '#202020';
    showAlert("dark mode has been enabled", "success");
    document.title = 'TextUtils - Dark mode'
  }
}
  return (
    <>
{/* <Navbar tittle="Himanshu" aboutText="About Us"/> */}
<Router>
<Navbar tittle="Himanshu" aboutText="About Click" mode={mode} togglemode = {togglemode}/>
<Alert alert = {alert}/>
<div className="container">
<Routes>
      <Route exact path="/About" element={<About />}></Route>
      <Route exact path="/Color" element={<Color/>}></Route>
      <Route exact path="/" element={<TextForm showAlert = {showAlert} mode={mode}/>}></Route>
</Routes>
</div>
</Router>



{/* <Color/> */}
    </>
  );
}

export default App;
