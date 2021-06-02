export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER'
export const ADD_ANSWER_TO_USER = 'ADD_ANSWER_TO_USER'


export function receiveUsers (users) {
    return {
        type:RECEIVE_USERS,
        users
    }
}

export function addQuestionToUser (question) {
    return {
        type:ADD_QUESTION_TO_USER,
        question
    }
}

export function handleAddQuestionToUser (question) {
    return(dispatch) => {
         dispatch(addQuestionToUser(question)) 
    }
}

export function addAnswerToUser (question) {
    return {
        type:ADD_ANSWER_TO_USER,
        question
    }
}

export function handleAddAnswerToUser (question) {
    return(dispatch) => {
        dispatch(addAnswerToUser(question))
    }
}

