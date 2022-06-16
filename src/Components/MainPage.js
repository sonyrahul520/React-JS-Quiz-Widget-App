import React, { useState } from 'react';
import './style.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import img4 from './img4.jpg';
import Questions from './Questions.js';
import { useNavigate } from "react-router-dom";


export default function MainPage() {
    const [showPage, setShowPage] = useState(true);

 
    const navigate = useNavigate();
 

    const checkNavigation = () => {
        setShowPage(false);
        navigate('/questions');


    };
    const setDark = () => {
        var element = document.body;
        element.classList.toggle("dark-mode");
    };

    return (

        //the program checks for showPage variable. If showPage is true it returns the starting page 
        //or else it will show the quiz questions.
    <div>
            {showPage ?
                <div className="quizBox">
                    <div className="haveCircle" >
                        <span className="dot"></span>
                        <button className="buttonElement button1" onClick={() => setDark()}>Dark Mode </button>
                    </div >


                    <div>

                        <div className="Heading">
                           
                            <br />
                            How Environmental friendly are you?
                            
                        </div>

                        <div className="subHeading">
                            
                            <p> Fancy yourself as an environmentalist? </p>
                            Why not take our environmental awareness quiz to test your knowledge about energy use, the environment and the impact of our actions.
                            <p>Find out if you're an environmental novice, amateur or whiz!</p>
                        </div>

                        <div className="mainButton">
                            <nav>   <button className="button1" onClick={() => checkNavigation()}>Start Quiz</button>
                            </nav>


                        </div>
                    </div>
                    

                </div>
                :
                <Routes>
                    <Route path="/questions/*" element={<Questions />} />

                </Routes>
               }
     </div>
    );
}
