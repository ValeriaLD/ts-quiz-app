import React, {useEffect} from 'react';
import QuestionCard from './components/QuestionCard'
import {GlobalStyle, Wrapper} from './styles/Quiz.styles';
import girl from "./images/girl.png";
import {useRootStore} from './mobx';
import {observer} from 'mobx-react';

export type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
}

const Quiz = observer((): JSX.Element => {

    const {
        loading,
        fetchQuizQuestions,
        contentStore$,
        number,
        score,
        gameOver,
        checkAnswer,
        startTrivia,
        userAnswers,
        nextQuestion,
        TOTAL_QUESTIONS,

    } = useRootStore();

    // const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);

    useEffect(() => {
        fetchQuizQuestions()
    }, [fetchQuizQuestions])

    // const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    //     if (!gameOver) {
    //         const answer = e.currentTarget.value;
    //         const correct = contentStore$[number].correct_answer === answer;
    //         if (correct) updateField('score', score + 1);
    //         const answerObject = {
    //             question: contentStore$[number].question,
    //             answer,
    //             correct,
    //             correctAnswer: contentStore$[number].correct_answer,
    //         };
    //         setUserAnswers((prev) => [...prev, answerObject]);
    //     }
    // };

    return (
        <>
            {/*<ReactPlayer*/}
            {/*  url={audio}*/}
            {/*  playing={true}*/}
            {/*  width={0}*/}
            {/*  height={0}*/}
            {/*  volume={0.5}*/}
            {/*  loop={true}*/}
            {/*/>*/}
            <GlobalStyle/>
            <Wrapper>
                <img src={girl} alt="Girl"/>
                <div className="header">
                    <h1>Anime Quiz</h1>
                </div>
                {gameOver || userAnswers.length === 10 ? (
                    <button className='start' onClick={startTrivia}>
                        GO
                    </button>
                ) : null}
                {!gameOver ? <p className='score'>Score: {score}</p> : null}
                {loading ? <p>Loading Questions...</p> : null}
                {!loading && !gameOver && (
                    <QuestionCard
                        questionNr={number + 1}
                        totalQuestions={contentStore$[number].totalQuestions}
                        question={contentStore$[number].question}
                        answers={contentStore$[number].incorrect_answers}
                        // userAnswer={userAnswers ? userAnswers[number] : undefined}
                        // callback={() => checkAnswer(e, contentStore$[number].id)}
                    />
                )}
                {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
                    <button className='next' onClick={nextQuestion}>
                        Next Question
                    </button>
                ) : null}
            </Wrapper>
        </>
    );
});

export default Quiz;
