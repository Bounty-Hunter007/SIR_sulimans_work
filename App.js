// App.js
import "./App.css";
import Result from "./views/Result";
import { useState } from "react";

const questions = [
  {
    title: "What is HTML?",
    options: [
      "Hypertext Text Markup Language",
      "Hypertext textup Markup Language",
      "Hypertext markup Markup Language",
      "Hypertext markup  Language",
    ],
    correctAnswer: "Hypertext markup  Language",
  },
  {
    title: "What is JS",
    options: ["Jao sahi se", "Java", "Javascript", "Jiye Sarkar"],
    correctAnswer: "Javascript",
  },
  {
    title: "What is CSS",
    options: [
      " Caat Seen Seen",
      "Cut So So",
      "Cascading Stylesheet ",
      "Mujhe nahi pata",
    ],
    correctAnswer: "Cascading Stylesheet ",
  },
  {
    title: "What is React",
    options: ["Jao sahi se", "Java", "Javascript", "Jiye Sarkar"],
    correctAnswer: "Javascript",
  },
];

function App() {
  const [quesNum, setQuesNum] = useState(0);
  const [marks, setMarks] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [Screen, setScreen] = useState(""); 
  const [resultScreen,setResultScreen] = useState(false)

  function nextQuestion_func() {
    if (selectedOption === null) {
      alert("To move on to the next question, please pick any option.");
      return;
    }

    setSelectedOption(null);

    let tempQues = quesNum;
    tempQues++;
    setQuesNum(tempQues);
  }

  function handleOptionChange_func(e) {
    setSelectedOption(e.target.value);
  }

  function ansChecking_func() {
    if (selectedOption === questions[quesNum].correctAnswer) {
      let tempMarks = marks + 10;
      setMarks(tempMarks);
    }
  }

  // Navigating to multiple screens function:
  function screen_update_func(screen) {
    setScreen(screen);

    if (screen === 'Result') {
      setResultScreen(true)
    }
  }

  // calling multiple functions for NEXT button
  const callMultipleFunction = () => {
    nextQuestion_func();
    ansChecking_func();
  };

  // calling multiple functions for NEXT button and to switch to the "Result" screen
  const callMultipleFunction_2 = () => {
    ansChecking_func();
    screen_update_func("Result");
  };

  return (
    <div className="App">
      <header className="App-header">

        {resultScreen === true
        ? (        <Result totalMarks={marks} />
        )
      : ( <span>
        <h4>
          Q{quesNum + 1}){questions[quesNum].title}
        </h4>
        {questions[quesNum].options.map(function (items, index) {
          return (
            <div key={index}>
              <input
                name="q1"
                type="radio"
                value={items}
                checked={selectedOption === items}
                onChange={handleOptionChange_func}
              />
              {items}
            </div>
          );
        })}
        </span>
       )
      }


        

        {quesNum === questions.length - 1 ? (
          <button onClick={callMultipleFunction_2}>Result</button>
        ) : (
          <button onClick={callMultipleFunction}>NEXT</button>
        )}

        {/* Conditional rendering for screens */}
      </header>
    </div>
  );
}

export default App;
