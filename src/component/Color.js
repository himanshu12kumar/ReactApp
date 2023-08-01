import React, {useState} from 'react'
import './Color.css';

 
function Color() {
    const[text, setText] = useState('');
    const OncolorChange =(event)=>{
        setText(event.target.value);
    }
  return (
    <div id='color_code' style={{backgroundColor: text}}>
        <h1>Enter your color</h1>
        <input type="text" placeholder="Enter any color" value={text} id="color_input" onChange = {OncolorChange}/>
    </div>
  )
}

export default Color
