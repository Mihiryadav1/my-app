
import React, { useState } from 'react'


export default function Formjs(props) {
    const [text, settext] = useState("Enter the text here");
    const handleUpClick = () => {
        console.log("UpperCase was Clicked");
        settext("hello this is new text");
        settext(text.toUpperCase());

    }
    const handleOnChange = (event) => {
        console.log("OnChange was Clicked");
        settext(event.target.value);

    }
    const handleClear = (event) => {
        console.log("Cleared Text");
        let newText = "";
        settext(newText);

    }
    const handleCopy = (event) => {
       
        let textbox=document.getElementById("box1");
        textbox.select();
        navigator.clipboard.writeText(textbox.value);
    };

    return (
        <>
            <div className="container my-4">
                <div className="mb-3">
                    {/* <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
                    <h1>Enter  your text here</h1>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="box1" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Click to change</button>
                <button className="btn btn-primary mx-3" onClick={handleClear}>Clear Text</button>
                <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy Text</button>
            </div>
            <div className="number">
                <h1>Text summary </h1>
                <p>{text.split(" ").length} words {text.length} characters</p>
                <p>{0.008 * text.split('').length} Minites  to read</p>
                <h1>Preview</h1>
                <p>{text}</p>
            </div>
        </>
    )
}
