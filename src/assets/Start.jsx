import React from "react"

export default function Start(props){
    return <div className="start">
        <img className="topImage"  src="/images/yellow.png" alt="blobYellow" />
        <img className="bottomImage" src="/images/blue.png" alt="blobBlue" />
        <h1 className="startH1">Quizzical</h1>
        <h3 className="description">Test Yourself with different question</h3>
        {!props.loading? <button className="startBtn" onClick = {props.onClick}>Start Quiz</button>:    
        <span className="loader"></span>}
        
    </div>
}