import React, {useState} from 'react'

export default function TextForm(props) {
    const handleOnClickUpper = ()=>{
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleOnClickLower = ()=>{
        let newText = text.toLowerCase()
        setText(newText)
    }

    const handleOnChange = (event)=>{
        // console.log("OnChange function " + text)
        setText(event.target.value)
    }
    const [text, setText] = useState("Enter your text")
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Enter your text</h1>
        <textarea name="" className="form-control mb-3" id="myBox" value={text} onChange={handleOnChange} rows={8} style={{backgroundColor: props.mode==='light'?'white':'gray', color: props.mode==='dark'?'white':'black'}}></textarea>
        <button className="btn btn-primary" onClick={handleOnClickUpper}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-3" onClick={handleOnClickLower}>Convert to LowerCase</button>
    </div>
    <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>Preview <br />{text}</p>
    </div>

    </>
  )
}
