import {_getQuestions,_getUsers} from '../_DATA'
import {receiveUsers} from './users'
import {receiveQuestions} from './questions'
import {setAuthedUser} from './authedUser'

const Authed_user = ''

export function handleInitialData() {
    return (dispatch) => {
        return Promise.all([
            _getUsers(),
            _getQuestions()
        ]).then(([users,questions]) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            dispatch(setAuthedUser(Authed_user))
        })
    }
}