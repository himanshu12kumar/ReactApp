import React,{useState} from "react";
import propTypes from 'prop-types';



export default function TextForm(props) {
    const[text, setText] = useState("");
    const handlerOnClick =()=>{
        console.log("button was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case", "success");
    }
    const handlerLoClick =()=>{
      console.log("button was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lower case", "success");
  }
  const handlerClearClick =()=>{
    console.log("button was clicked" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Clear text", "success");
}
const handlerCopy = ()=>{
     var text =document.getElementById('inputPassword5');
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to clipboard", "success");
}
const handlerExtraSpace=()=>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("Remove extra space", "success");
}
    const handlerOnChange =(event)=>{
        console.log("onchange");
        setText(event.target.value);
    }
  return (
  <>
    <div>
        <h1>{props.heading}</h1>
      <div className="my-3">
      <textarea
        type="password"
        id="inputPassword5"
        className="form-control"
        style={{backgroundColor: props.mode === 'dark'?'grey':'white', color:props.mode === 'dark'?'green':'black'}}
        value={text}
        onChange = {handlerOnChange}
        aria-describedby="passwordHelpBlock"
        rows="10"
        placeholder="Enter your text here"
      ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handlerOnClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handlerLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handlerClearClick}>Clear</button>
      <button className="btn btn-primary mx-1" onClick={handlerCopy}>Copy text</button>
      <button className="btn btn-primary mx-1" onClick={handlerExtraSpace}>Remove extra space</button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark'?'green':'black' }}>
      <h1>Your text summary is</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minuts to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something inn the textbox above to preview it here"}</p>
    </div>
    </>
  );
}