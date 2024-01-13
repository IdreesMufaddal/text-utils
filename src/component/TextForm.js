import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('Enter the Text here..')
    const [color, setColor] = useState('')
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Converted To Upper Case', 'success')
    }
    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('Converted To Lower Case', 'success');
    }

    const handleClearClick = () => {
        let newText = "";
        setText(newText)
    }
    const handleChangeColorClick = () => {
        const colors = ['blue', 'green', 'yellow', 'white', 'black']
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setColor(randomColor)
        console.log(randomColor)
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    return (
        <>
            <div className='container my-4' style={{ color: props.mode === 'light' ? '#1e447c' : 'white' }} >
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{ color: color, backgroundColor: props.mode === 'light' ? 'white' : '#3668b1', fontSize: '20px' }} value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-2 my-2' onClick={handleUpClick} >Convert To UpperCase</button>
                <button className='btn btn-primary mx-2 my-2' onClick={handleLowerClick} >Convert To UpperCase</button>
                <button className='btn btn-primary mx-2 my-2' onClick={handleClearClick} >Clear Text</button>
                <button className='btn btn-primary mx-2 my-2' onClick={handleChangeColorClick} >Change color</button>
            </div>
            <div className='container my-4' style={{ color: props.mode === 'light' ? '#1e447c' : 'white' }} >
                <h1>Your Text Summary</h1>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words {text.length} characters</p>
                <p>Reading in {0.004 * text.split(" ").length}minutes</p>
                <p>Preview</p>
                <p>{text}</p>
            </div>
        </>
    )
}
