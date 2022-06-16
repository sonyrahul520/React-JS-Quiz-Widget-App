import React, {useEffect, useState } from 'react';
import ProgressBar from './ProgressBar';
import img2 from './img2jpg.jpg';
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import './style.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Result from './Result.js';
export default function Questions() {
    const questions = [
        {
            questionText: 'What is the cause of climate change ?',
            answerOptions: [
                { answerText: 'The release of CO burning fossil fuels', isCorrect: "true", answerVal: '1', answerImg: 'https://i.picsum.photos/id/1002' },
                { answerText: 'Excessive waste', isCorrect: "false", answerVal: '0' },
                { answerText: 'Natural Disasters', isCorrect: "false", answerVal: '0' },
            ],
        },
        {
            questionText: 'What period of time has been the hottest since temperature records began ?',
            answerOptions: [
                { answerText: 'The past 20 years', isCorrect: "true", answerVal: '2', answerImg: 'https://i.picsum.photos/id/101' },
                { answerText: 'The past 10 years', isCorrect: "false", answerVal: '0' },
                { answerText: 'The past 5 years', isCorrect: "false", answerVal: '0' }
            ],
        },
        {
            questionText: 'How much waste do humans produce every years ?',
            answerOptions: [
                { answerText: '1 - 1.3 billion tonnes', isCorrect: "true", answerVal: '2', answerImg: 'https://i.picsum.photos/id/1021' },
                { answerText: '1 - 1.3 million tonnes', isCorrect: "false", answerVal: '0' },
                { answerText: '1 - 1.3 hundred thousand tonnes', isCorrect: "false", answerVal: '0' },
            ],
        },
        {
            questionText: 'What is the most effective way to reduce CO2 emissions ?',
            answerOptions: [
                { answerText: 'Reduce fossil fuel consumption', isCorrect: "true", answerVal: '1', },
                { answerText: 'Recycle', isCorrect: "false", answerVal: '0' },
                { answerText: 'Plant more trees', isCorrect: "false", answerVal: '0' },
            ],

        },
        {
            questionText: 'What accounts for 7% of greenhouse gases in UK?',
            answerOptions: [
                { answerText: 'Methane Gases', isCorrect: "true", answerVal: '2' },
                { answerText: 'Coal', isCorrect: "false", answerVal: '0' },
                { answerText: 'Nitrous Oxide', isCorrect: "false", answerVal: '0' },
            ],
        },
        {
            questionText: 'Whose responsibility is it to make sure we reduce the amount of energy used ?',
            answerOptions: [
                { answerText: 'Your Employer', isCorrect: "false", answerVal: '0' },
                { answerText: 'Energy Companies', isCorrect: "false", answerVal: '0' },
                { answerText: 'Everyone', isCorrect: "true", answerVal: '2' },
            ],
        },
        {
            questionText: 'What is one of the biggest primary cost to businesses ?',
            answerOptions: [
                { answerText: 'Energy', isCorrect: "true", answerVal: '1' },
                { answerText: 'Building Maintenance', isCorrect: "false", answerVal: '0' },
                { answerText: 'Holidays', isCorrect: "false", answerVal: '0' },
            ],
        },
        {
            questionText: 'What will happen if the melting of polar ice caps and glaciers is not reduced?',
            answerOptions: [
                { answerText: 'The sea levels will rise', isCorrect: "true", answerVal: '1' },
                { answerText: 'It will snow less', isCorrect: "false", answerVal: '0' },
                { answerText: 'Natural Disasters', isCorrect: "false", answerVal: '0' },
            ],
        },
        {
            questionText: 'What are some human behaviours that have had a negative impact on the environment ?',
            answerOptions: [
                { answerText: 'Train travel', isCorrect: "false", answerVal: '0' },
                { answerText: 'Deforestation', isCorrect: "true", answerVal: '1' },
                { answerText: 'Forest Fires', isCorrect: "false", answerVal: '0' },
            ],
        },
        {
            questionText: 'What are some things you can do to reduce your environmental impact ?',
            answerOptions: [
                { answerText: 'Buy locally produced food', isCorrect: "true", answerVal: '1' },
                { answerText: 'Change energy supplier', isCorrect: "false", answerVal: '0' },
                { answerText: 'Get a house plant', isCorrect: "false", answerVal: '0' },
            ],
        },
    ];

    const [cookies, setCookie] = useCookies(["question"]);
    const [CurrentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [showMain, setShowMain] = useState(false);
    
    const [showLessScore, setLowScore] = useState(false);
    const [showMidScore, setMidScore] = useState(false);
    const [showHighScore, setHighScore] = useState(false);

  
   
    const navigate = useNavigate();

    const handleAnswerOptionClick = (isCorrect, answerVal) => {
       
        if (isCorrect) {
            let ans = parseInt(score) + parseInt(answerVal) ;
            setScore(ans);
        }

        const nextQuestion = CurrentQuestion + 1;
      
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
            
        } else {
            setShowScore(true);
            if (score < 4) { setLowScore(true); }
            if (score >= 5 && score <= 11) { setMidScore(true); }
            if (score > 11) { setHighScore(true); }
           
        }
    };

    const handleScore = () => {
        setShowScore(true);
        if (score < 4) { setLowScore(true); }
        if (score >= 5 && score <= 11) { setMidScore(true); }
        if (score > 11) { setHighScore(true); }

      
    }

        const setDark = () => {
            var element = document.body;
            element.classList.toggle("dark-mode");
    };

   

    return (
        //the program checks for showScore value. If it is true returns the score the person has achieved 
        //or else it will show the questions.

        <div className="quizBox">
            <div className="haveCircle">
                <span className="dot"></span>
                
            </div>

           
            {showScore ? (
                <div className='subHeading'>

                    {showLessScore ? (<div><b> Your score is {score} </b> <br />
                        Your environmental awareness could use some work. The more you understand about the impact our actions have on the environment,the better we can all work towards.
                        <br />
                        <div className = "Heading"> Get our Environmental awareness factsheet</div> <button className="button1">Download</button> <br />
                        <div className="Heading">Learn about WorkRite environmental course</div> <button className = "button1">Learn More</button>
                    </div>) : ' '}
                    <div>
                        {showMidScore ? <div><b>Your score is {score}. </b> <br />Well done you have got a good grasp on the facts when it comes to the enviroment and climate change but there  is room for improvement.
                            <br />
                           <div className = "Heading"> Get our Environmental awareness factsheet</div> <button className="button1">Download</button> <br />
                            <div className = "Heading">Learn about WorkRite environmental course</div> <button className="button1">Learn More</button>
                        </div> : ''}
                    </div>
                    <div>
                        {showHighScore ? <div> <b>Your score is {score}.</b><br/> Well done you have a good awareness of environmental issues and the part we play in protecting the world around us.
                            <br />
                            <div className="Heading">  Get our Environmental awareness factsheet</div> <button className="button1">Download</button> <br />
                            <div className="Heading"> Learn about WorkRite environmental course</div> <button className="button1">Learn More</button>
                        </div> : ""}
                        </div>


                </div>
            ) :
                 

                (
                    <div >
                           <div className="progressBox">
                            <div className="subHeading">
                                <ProgressBar completed={CurrentQuestion * 10} />
                                    <span>Question {CurrentQuestion + 1}</span>/{questions.length}
                                    <div> </div>
                            </div>
                            <div className="subHeading">
                                <button className="buttonElement button1" onClick={() => handleScore()}>View Results </button>
                                    <button className="buttonElement button1" onClick={() => setDark()}>Dark Mode </button>
                            </div>

                           </div>

                        <div className="Heading">
                            <img src={img2} alt ="Environment quiz" /> <br />
                            {questions[CurrentQuestion].questionText}
                            

                            </div>
                            <div className="subHeading">



                                {questions[CurrentQuestion].answerOptions.map((answerOption) => (
                                    <button className="button2" onClick={() => handleAnswerOptionClick(answerOption.isCorrect, answerOption.answerVal)}>{answerOption.answerText}</button>
                                ))}


                        </div>
                    </div>
                        
          
                )
                 
          
             
            }

        </div>

    );

}