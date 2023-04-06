import React from "react";

export default function Questions(props){
    const {id, question, correctAnswer, incorrectAnswers} = props.data   
    const answers = [...incorrectAnswers, correctAnswer]
        answers.sort(() => Math.random() - 0.5)
    let index = props.index === 0 ? "first" : props.index === 1 ? "second" : props.index === 2 ? "third" : props.index === 3 ? "fourth": "fifth"   
    
    
    return <div>
            <h3 className="question-style">{question}</h3>
            
            <div className="inputs">

                <input type="radio"
                       className = {correctAnswer}
                       value = {answers[0]} 
                       name={index}
                       onChange={props.handleChange}
                       id={`1 ${id}`}
                       required />
                    <label  htmlFor={`1 ${id}`}  >{answers[0]} </label> 
                
                <input type="radio"
                       className = {correctAnswer}
                       onChange={props.handleChange}  
                       name={index}
                       id={`2 ${id}`} 
                       value = {answers[1]}/>       
                    <label  htmlFor={`2 ${id}`}>{answers[1]}</label>  
                
                <input className = {correctAnswer}
                       type="radio"
                       onChange={props.handleChange}  
                       name={index}
                       value = {answers[2]}
                       id={`3 ${id}`} />
                    <label  htmlFor={`3 ${id}`}>{answers[2]}</label> 
                
                <input type="radio"
                       className = {correctAnswer}
                       onChange={props.handleChange}  
                       name={index} 
                       id={`4 ${id}`}
                       value = {answers[3]}/>
                    <label   htmlFor={`4 ${id}`}>{answers[3]}</label>  
            
            </div>
        </div>
   
}


/*

<input 
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={formData.employment === "unemployed"}
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
category
: 
"Society & Culture"
correctAnswer
: 
"Thomas Edison"
difficulty
: 
"medium"
id
: 
"6293ec1d7f41d6338b96eed8"
incorrectAnswers
: 
(3) ['Gregory Pincus', 'Alexander Graham Bell', 'James Watt']
isNiche
: 
false
question
: 
"Which influential inventor and businessman helped introduce electricity and electric light bulbs?"
regions
: 
[]
tags
: 
(4) ['society_and_culture', 'science', 'people', 'inventions']
type
: 
"Multiple Choice"
*/ 