import React from 'react';
import {Wrapper, ButtonWrapper} from "../styles/Questions.styles";
import {answerObject} from "../mobx/models/Quiz.model";

import {IQuizModelSnapshot} from '../mobx/interfaces'
import {useRootStore} from "../mobx";

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: typeof answerObject | undefined;
    questionNr: number;
    totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
                                           question,
                                           answers,
                                           // callback,
                                           // userAnswer,
                                           questionNr,
                                           totalQuestions,

                                       }) => {
    const {userAnswers} = useRootStore()

    return (
        (
            <Wrapper>
                <p className='number'>
                    Question: {questionNr} / {totalQuestions}
                </p>
                <p dangerouslySetInnerHTML={{__html: question}}/>
                <div>
                    {answers.map((answer: IQuizModelSnapshot, index) => {
                        return (
                            <ButtonWrapper
                                key={index}
                                correct={!!answer.correctAnswer}
                                userClicked={userAnswers?.answer === answer}
                            >
                                <button disabled={!!userAnswers} value={answer} onClick={callback}>
                                    {/*<span dangerouslySetInnerHTML={{__html: answer}}/>*/}
                                    <span>{answer}</span>
                                </button>
                            </ButtonWrapper>
                        )
                    })}
                </div>
            </Wrapper>
        )
    )
};

export default QuestionCard;