import Start from "./assets/Start"
import Questions from "./assets/Questions"
import './App.css'
import React from "react"

function App() {
  const [questions, setQuestions] = React.useState()
  const [ren, setRen] = React.useState() 
  const [start, setStart] = React.useState(true)
  const [ten, setTen] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [count, setCount] = React.useState(0)
  const [answers, setAnswers] = React.useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
    fifth: ""
  })
  const [checkedAnswer, setCheckedAnswer] = React.useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false
  }) 
  
  function handleStart(){
    setLoading(!loading)
    setTimeout(() => {
      setStart(!start)
      getNewGame()  
    }, 2000);
    
  }

 

  const getNewGame = async () => {
  try{
    const response = await fetch("https://the-trivia-api.com/api/questions?limit=5&difficulty=medium")
    const data = await response.json()
  
      setQuestions(data)
      setRen(data.map(function(q){ 
        return <Questions index={data.indexOf(q)} key={q.id}  data={q} handleChange = {handleChange} booleans = {ten} />
    }))
   
  }

  catch(error) {
    console.log("error")
  }
          

}
    


  function handleChange(event) {
    const {name, value, className} = event.target
    setAnswers(prevData => {
        return {
            ...prevData,
            [name] : value
        }
    })

    setCheckedAnswer(prevAns => {
         return {
          ...prevAns,
          [name] : (value === className ? true : false)
         }
    })
  }
 

  function handleChecked(event){
    event.preventDefault()
    console.log(checkedAnswer)
    setTen(!ten)
    const {first, second, third, fourth, fifth} = checkedAnswer
    let n = []
    n.push(first)
    n.push(second)
    n.push(third)
    n.push(fourth)
    n.push(fifth)
    let countUp = 0
    for(let i = 0; i<5; i++){
         if (n[i]) {countUp++} 
    }
    setCount(countUp)  
  }

  function handleRestart(){
      
    setTen(!ten)
    getNewGame()
    
    
  }
  
  

return (
    <main>
      { start ? 
       <Start onClick = {handleStart}  loading = {loading}/> :
        <div>
            {!ten ? 
        <form className="questions" onSubmit={handleChecked}>
              <div className="needed">
                {ren}
                <button className="checkBtn">Check Answers</button>
              </div>
        </form> :

              <div className="result">

                <div className="correctAnswers">
                  <h3 className="answers">Correct Answers</h3>
                  <div className="correctAnswer">{questions[0].correctAnswer}</div>
                  <div className="correctAnswer">{questions[1].correctAnswer}</div>
                  <div className="correctAnswer">{questions[2].correctAnswer}</div>
                  <div className="correctAnswer">{questions[3].correctAnswer}</div>
                  <div className="correctAnswer">{questions[4].correctAnswer}</div>
                </div>

                <div className="givenAnswers">
                  <h3 className="answers">Your Answers</h3>
                  <div className={checkedAnswer.first? "givenAnswer givenCorrectAnswer" : "givenAnswer incorrectAnswer"}>{answers.first}</div>
                  <div className={checkedAnswer.second? "givenAnswer givenCorrectAnswer" : "givenAnswer incorrectAnswer"}>{answers.second}</div>
                  <div className={checkedAnswer.third? "givenAnswer givenCorrectAnswer" : "givenAnswer incorrectAnswer"}>{answers.third}</div>
                  <div className={checkedAnswer.fourth? "givenAnswer givenCorrectAnswer" : "givenAnswer incorrectAnswer"}>{answers.fourth}</div>
                  <div className={checkedAnswer.fifth? "givenAnswer givenCorrectAnswer" : "givenAnswer incorrectAnswer"}>{answers.fifth}</div>
                </div>
                
                <h3 className="result-style"> You have found {count} correct answer out of 5 questions</h3>
                
                <button className="restartBtn" onClick={handleRestart}>New Questions</button>
                
              </div>
            }

</div>

        
      }
      </main>
  )
}

export default App
