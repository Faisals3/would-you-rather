import {RECEIVE_USERS,ADD_QUESTION_TO_USER,ADD_ANSWER_TO_USER} from '../actions/users'

export default function users (state = {} , action) {
    switch(action.type) {
        case RECEIVE_USERS :
            return {
                ...state,
                ...action.users
            }
        
        case ADD_QUESTION_TO_USER :
            return {
                ...state,
                [action.question.author] : {
                    ...state[action.question.author],
                    questions: state[action.question.author].questions.concat([action.question.id])
                }
            }

        case ADD_ANSWER_TO_USER :
            return {
                ...state,
                [action.question.authedUser] : {
                    ...state[action.question.authedUser],
                    answers : {
                        ...state[action.question.authedUser].answers,
                        [action.question.qid]: action.question.answer
                    }
                }
            }

            default : 
                return state
    }
}

//state[action.question.authedUser][action.question.answer].concat([action.question.qid])