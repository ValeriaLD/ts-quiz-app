import {cast, types} from "mobx-state-tree";

export const contentStore = types.model("contentStore", {
    id: types.identifier,
    category: "",
    correct_answer: "",
    difficulty: "",
    incorrect_answers: types.array(types.string),
    question: "",
    totalQuestions: 0,
    score: 0,
    correctAnswer: "",
})

    .actions((self) => ({
        setQuestions(value: string, answers: string[]): void {
            self.category = value;
            self.correct_answer = value;
            self.difficulty = value;
            self.incorrect_answers = cast(answers);
            self.question = value;
        },
        updateField<key extends keyof typeof self>(key: key, value: typeof self[key]) {
            self[key] = value
        },
    }));

export const answerObject = types.model("answerObject", {

    question: "",
    answer: "",
    correct: false,
    correctAnswer: "",

})

    .actions((self) => ({
        setUserAnswers(value: string, correctValue: boolean): void {
            self.answer = value;
            self.correct = correctValue;
            self.correctAnswer = value;
        },
        updateField<key extends keyof typeof self>(key: key, value: typeof self[key]) {
            self[key] = value
        },
    }))
