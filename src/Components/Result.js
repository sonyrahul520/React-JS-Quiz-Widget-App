import React, { useState } from 'react';
import './Question.css';
import { useParams } from 'react-router-dom';

const Result = (props) => {
    const { score } = props;
    const [showLessScore, setLowScore] = useState(false);
    const [showMidScore, setMidScore] = useState(false);
    const [showHighScore, setHighScore] = useState(false);

    if (score <= 4) { setLowScore(true); }
    if (score >= 5 && score <= 11) { setMidScore(true); }
 


    

    return (
        <div className='subHeading'>

            {showLessScore ? ('Your environmental awareness could use some work. The more you understand about the impact our actions have on the environment,the better we can all work towards.') : ' '}
            <div>
                {showMidScore ? 'Well done you have got a good grasp on the facts when it comes to the enviroment and climate change but there  is room for improvement.' : ''}
            </div>
           

        </div>
        )
}

export default Result;