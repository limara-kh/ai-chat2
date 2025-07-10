// import React, {useState} from "react";
// import Child from './Child'
// function App(){
//    const[state, setState] = useState(false)
//    function add(){
//     setState(!state)
//    }
//    return(
//     <div>
//         {state && <Child/>
//         }
//         <button onClick={add}>add</button>
//     </div>
//    )
// }
// export default App;
import { useState } from 'react'
import axios from 'axios'
import React from 'react'
import './App.css'
function App() {
  const [userInput, setUserInput] = useState('')
  const [answerList, setAnswerList] = useState([])

  const API_KEY = 'AIzaSyAtOX-Yvymqz8ogViLD1EyzdqLPK85W3wQ'

  const askQuestion = async () => {
    if (!userInput.trim()) return

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
        {
          contents: [
            {
              parts: [{ text: `${userInput}. Осы сұраққа нақты жауап бер.` }],
            },
          ],
        },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      )

      const result = response.data.candidates?.[0]?.content?.parts?.[0]?.text || 'Жауап табылмады'
      setAnswerList((prev) => [...prev, { question: userInput, answer: result }])
      setUserInput('')
    } catch (error) {
      console.error('Қате болды:', error)
    }
  }

  return (
    <div class="bg-center bg-white h-5">
      <h1 class="text-blue-500 text-5xl truncate text-center"><strong>💡Gemini AI СҰРАҚ-ЖАУАП</strong></h1>
      <br />
      <div class='text-center'>
        <input class="text-xl placeholder-opacity-10 border-blue-500 border rounded-sm text-center leading-normal"
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Сұрағыңызды енгізіңіз..."/>

        <button class="text-xl border-blue-500 bg-blue-400 border rounded-sm text-white" onClick={askQuestion}>Жіберу</button>
        <br />
        <div class='text-center'>
            {answerList.map((item, idx) => (
            <div key={idx}>
              <p class='text-xl text-blue-500 border-blue-500 clear-left'><strong>Сұрақ:</strong></p>
              <p class='text-lg leading-normal clear-left'>{item.question}</p>
              <p class='text-xl text-blue-500 border-blue-500 clear-left'><strong>Жауап:</strong></p>
              <p class='text-lg leading-normal clear-left'>{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App