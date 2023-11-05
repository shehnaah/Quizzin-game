import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";
import { Button } from "react-bootstrap";
import { Link, Routes,Route } from "react-router-dom";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("₹0");

  const handleQuit = () => {
    setUsername(null)
    setQuestionNumber(1)
    setTimeOut(false)
  };
  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "In which novel Sherlock Holmes appearing for the first time?",
      answers: [
        {
          text: "Casino Royale",
          correct: false,
        },
        {
          text: " Dr.No",
          correct: false,
        },
        {
          text: "The Valley of Fear",
          correct: false,
        },
        {
          text: "A Study in Scarlet",
          correct: true,
        },
      ],
    },{
      id: 5,
      question: "Intelligence test is related to:",
      answers: [
        {
          text: "Sigmund Freud",
          correct: false,
        },
        {
          text: " Binet",
          correct: true,
        },
        {
          text: "Asimov",
          correct: false,
        },
        {
          text: "Frobel",
          correct: false,
        },
      ],
    },{
      id: 6,
      question: "In Roman numeration ‘D’ indicates?",
      answers: [
        {
          text: "500",
          correct: true,
        },
        {
          text: "50",
          correct: false,
        },
        {
          text: "100",
          correct: false,
        },
        {
          text: "1000",
          correct: false,
        },
      ],
    },{
      id: 7,
      question: "Acids turn blue litmus into: ",
      answers: [
        {
          text: "Yellow",
          correct: false,
        },
        {
          text: "Black",
          correct: false,
        },
        {
          text: "Red",
          correct: true,
        },
        {
          text: "Green",
          correct: false,
        },
      ],
    },{
      id: 8,
      question: "The Galaxy to which the Sun is belonged:",
      answers: [
        {
          text: "Andromeda ",
          correct: false,
        },
        {
          text: "Nebula",
          correct: false,
        },
        {
          text: "sirius",
          correct: false,
        },
        {
          text: "Milky way",
          correct: true,
        },
      ],
    },{
      id: 9,
      question: " Charles de Gaul air port is in:",
      answers: [
        {
          text: "Tokyo",
          correct: false,
        },
        {
          text: "New York",
          correct: false,
        },
        {
          text: "Paris",
          correct: true,
        },
        {
          text: "London",
          correct: false,
        },
      ],
    },{
      id: 10,
      question: "The main language of Brazil:",
      answers: [
        {
          text: "Portuguese",
          correct: true,
        },
        {
          text: "Spanish",
          correct: false,
        },
        {
          text: "english",
          correct: false,
        },
        {
          text: "Dutch",
          correct: false,
        },
      ],
    },{
      id: 11,
      question: "Which state has the largest forest area?",
      answers: [
        {
          text: "Kerala",
          correct: false,
        },
        {
          text: "Madhya pradesh",
          correct: true,
        },
        {
          text: "Uttar Pradesh",
          correct: false,
        },
        {
          text: "Andhra pradesh",
          correct: false,
        },
      ],
    },{
      id: 12,
      question: "The first test tube baby in India:",
      answers: [
        {
          text: "Louise Brown",
          correct: false,
        },
        {
          text: "Astha",
          correct: false,
        },
        {
          text: "Indira",
          correct: false,
        },
        {
          text: "Durga",
          correct: true,
        },
      ],
    },{
      id: 13,
      question: "Orange Prize is related to:",
      answers: [
        {
          text: "Literature",
          correct: true,
        },
        {
          text: "sports",
          correct: false,
        },
        {
          text: "Cinema",
          correct: false,
        },
        {
          text: "science",
          correct: false,
        },
      ],
    },{
      id: 14,
      question: "The highest waterfall in the world is Salto Angel. It is in:",
      answers: [
        {
          text: "USA",
          correct: false,
        },
        {
          text: "venezuela",
          correct: true,
        },
        {
          text: "Canada",
          correct: false,
        },
        {
          text: "Laos",
          correct: false,
        },
      ],
    },{
      id: 15,
      question: " Peking is now known as:",
      answers: [
        {
          text: "Ho Chi Minh City n",
          correct: false,
        },
        {
          text: "Leningrad",
          correct: false,
        },
        {
          text: "Beijing",
          correct: true,
        },
        {
          text: "Moscow",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "₹ 100" },
        { id: 2, amount: "₹ 200" },
        { id: 3, amount: "₹ 300" },
        { id: 4, amount: "₹ 500" },
        { id: 5, amount: "₹ 1,000" },
        { id: 6, amount: "₹ 2,000" },
        { id: 7, amount: "₹ 4,000" },
        { id: 8, amount: "₹ 8,000" },
        { id: 9, amount: "₹ 16,000" },
        { id: 10, amount: "₹ 32,000" },
        { id: 11, amount: "₹ 64,000" },
        { id: 12, amount: "₹ 125,000" },
        { id: 13, amount: "₹ 250,000" },
        { id: 14, amount: "₹ 500,000" },
        { id: 15, amount: "₹ 1,000,000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
<Routes>
<Route path="/" element={<Start setUsername={setUsername} />} />

          
  
</Routes>   
   ) : (
        <>
          <div className="main">
            {timeOut ? (
              
              
              <h1 className="endText">You earned: {earned}</h1>
  
         ) : (
              <>
              <div className="mt-5 mb-5">

              </div>
              <div className="d-flex justify-content-center mt-5">
              <h1 className=" mb-5 " style={{color:'white'}}><i class="fa-brands fa-buffer  fa-2xl"></i>QuiZZinn</h1>

              </div>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
<li className="ms-3 mb-1 mt-3 d-flex justify-content-center">
  <Button  className="btn btn-primary me-3 w-100" onClick={handleQuit}>New Game</Button>
  
</li>

    

            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
