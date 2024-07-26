import { useState, useCallback } from 'react';
import QUESTIONS from '../../question.js'
import QUIZ_COMPLETE from '../assets/quiz-complete.png'
import QuestionTimer from './QuestionTimer.jsx';

export default function Quiz() {
    const [answerState, setAnswerState] = useState('');
    const [userAnswer, setUserAnswer] = useState([]);

    const activeQuestionIndex = userAnswer.length;
    const quizComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setAnswerState('answered');
        setUserAnswer((prevUserAnswer) => {
            return [...prevUserAnswer, selectedAnswer]
        });

        setTimeout(() => {
            if(selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]){
                setAnswerState('correct');
            } else {
                setAnswerState('wrong');
            }
        },1000)
    }, [activeQuestionIndex])

    const handleSkipAnswer = useCallback(() => {
        handleSelectAnswer(null)
    }, [handleSelectAnswer]);
  

    if (quizComplete) {
        return (<div id='summary'>
            <h2>Quiz Completed</h2>
            <img src={QUIZ_COMPLETE} />
        </div>)
    }
    console.log()
    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.sort(() => Math.random() - 0.5);

    return (
        <div id="quiz">
            <div id='question'>
                <QuestionTimer key={activeQuestionIndex} timeout={5000} onTimeout={handleSkipAnswer} />
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id='answers'>
                    {shuffledAnswers.map(answer =>
                        <li key={answer} className='answer'>
                            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                        </li>)}
                </ul>
            </div>
        </div>
    );
}