import {types, flow, applySnapshot, getParentOfType, cast} from "mobx-state-tree";
import {answerObject, contentStore} from "../models/Quiz.model";
import axios from 'axios'
import {shuffleArray} from "../../utils";
import {Question} from "../../API";
import React from "react";

export const RootStore = types.model("RootStore", {

    contentStore$: types.array(contentStore),
    // answerObject$: types.array(answerObject),


    activeContent: types.safeReference(contentStore),

    loading: false,
    userAnswers: "",
    gameOver: true,
    score: 0,
    number: 0,
    nextQuestions: 0,
    TOTAL_QUESTIONS: 10,

    // answer: "",
    // correct: false,
    // correctAnswer: "",
    // question: "",

})

    .actions((self) => ({
        setLoading(value: boolean): void {
            self.loading = value;
        },

        // setUserAnswers(value: string, correctValue: boolean): void {
        //     self.question = value;
        //     self.answer = value;
        //     self.correct = correctValue;
        //     self.correctAnswer = value;
        // },

        updateField<key extends keyof typeof self>(key: key, value: typeof self[key]) {
            self[key] = value
        },

        startTrivia() {
            this.setLoading(true);
            self.gameOver = false
            self.score = 0
            self.number = 0
            this.setLoading(false)
        },

        nextQuestion() {
            self.nextQuestions = self.number + 1;
            if (self.nextQuestions === self.TOTAL_QUESTIONS) {
                self.gameOver = true;
            } else {
                self.number = self.nextQuestions
            }
        },

        checkAnswer(e: React.MouseEvent<HTMLButtonElement>, ids: string) {
            if (!self.gameOver) {
                self.answer = e.currentTarget.value;
                self.correct = self.correctAnswer === self.answer;
                if (self.correct) {
                    self.score = self.score + 1
                }

                console.log('ids', ids)

                // self.activeContent = ids
                // this.setUserAnswers((prev) => [...prev, answerObject]);
            }
        },
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


    }))

    .actions((self) => ({
        fetchQuizQuestions: flow(function* () {
            const endpoint = `https://opentdb.com/api.php?amount=10&category=31&type=multiple`;
            const data = yield axios.get(endpoint)
            const res = data.data.results.map((question: Question) => (
                {
                    ...question,
                    answers: shuffleArray([
                        ...question.incorrect_answers,
                        question.correct_answer
                    ]),
                }));

            applySnapshot(self.contentStore$, res)

        })
    }))

// const nextQuestion = () => {
//     const nextQuestion = number + 1;
//     if (nextQuestion === TOTAL_QUESTIONS) {
//         updateField('gameOver', true)
//     } else {
//         // setNumber(nextQuestion);
//         updateField('number', nextQuestion)
//     }
// };

// const startTrivia = async () => {
//     setLoading(true);
//     // setGameOver(false);
//     updateField('gameOver', false)
//
//     // const newQuestions = await fetchQuizQuestions(
//     //     TOTAL_QUESTIONS,
//     //     Difficulty.EASY
//     // );
//     // setScore(0);
//     updateField('score', 0)
//     // setNumber(0);
//     updateField('number', 0)
//     setLoading(false);
//
//     setUserAnswers([]);
// }