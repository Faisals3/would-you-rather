import {_saveQuestion,_saveQuestionAnswer} from '../_DATA'
import { handleAddQuestionToUser , handleAddAnswerToUser } from './users'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_ANSWER_TO_QUESTION ='ADD_ANSWER_TO_QUESTION'

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function addAnswerToQuestion(question) {
    return {
        type:ADD_ANSWER_TO_QUESTION,
        question
    }
}

export function handleAddQuestion(question) {
    return(dispatch) => {
        return _saveQuestion(question)
            .then((question) => dispatch(addQuestion(question)))
            .then((question) => dispatch(handleAddQuestionToUser(question.question)))        
    }
    
}

export function handleAddAnswerToQuestion(question) {
    return(dispatch) => {
        return _saveQuestionAnswer(question)
            .then(dispatch(addAnswerToQuestion(question)))
            .then(dispatch(handleAddAnswerToUser(question)))
    }
}

