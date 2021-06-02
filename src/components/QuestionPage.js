import React , {Component} from 'react'
import { connect } from 'react-redux'
import {Button} from 'react-bootstrap';
import {handleAddAnswerToQuestion} from '../actions/questions'
import {Redirect} from 'react-router-dom'





class QuestionPage extends Component {

    checkIfAns(question,user) {
        if(question && question.optionOne && question.optionOne.votes) {
        if (question.optionOne.votes.indexOf(user) !== -1 || question.optionTwo.votes.indexOf(user) !== -1) {
            return true
        }

        else return false
    }

    }

    handleVote(questionID,answer) {
        const questionWithAns = {
            authedUser : this.props.authedUser,
            qid:questionID,
            answer:answer
        }
        this.props.dispatch(handleAddAnswerToQuestion(questionWithAns))
    }

    render() {
        const Question = this.props.Question 
        return (
            
            <div>
                {Question ?
                <div>
                {this.checkIfAns(Question,this.props.authedUser) 
                
                ? <div>
                     <img src={this.props.users[Question.author].avatarURL} alt="User Avatar" width="100" height="100"></img>
                    <b>{Question.author +' asks : '}</b> <br/>
                    {Question.optionOne.text}<span style={{marginLeft:'10px',color:'green'}}> VOTES : [{Question.optionOne.votes.length+'/'+(Question.optionOne.votes.length+Question.optionTwo.votes.length)}]</span>
                    {Question.optionOne.votes.indexOf(this.props.authedUser) !== -1 && <span style={{marginLeft:'30px',color:'red',fontSize:'20px'}}>You voted here</span>}<br/>   
                    <hr/>
                    {Question.optionTwo.text}<span style={{marginLeft:'10px',color:'green'}}> VOTES : [{Question.optionTwo.votes.length+'/'+(Question.optionOne.votes.length+Question.optionTwo.votes.length)}]</span>
                    {Question.optionTwo.votes.indexOf(this.props.authedUser) !== -1 && <span style={{marginLeft:'30px',color:'red',fontSize:'20px'}}>You voted here</span>}
                    
                </div>
                

                : <div>
                    <img src={this.props.users[Question.author].avatarURL} alt="User Avatar" width="100" height="100"></img>
                    <b>{Question.author +' asks : '}</b> <br/>
                    {Question.optionOne.text} <Button variant="primary" onClick={() => {this.handleVote(Question.id,'optionOne')}}>Vote</Button> <br/> <hr/>
                    {Question.optionTwo.text} <Button variant="primary" onClick={() => {this.handleVote(Question.id,'optionTwo')}}>Vote</Button>
                </div>}
                </div>
                
                : <div><Redirect to={'/'}/>
                    </div>}
            </div>
                
        )
    }
}

function mapStateToProps ({questions,authedUser,users} , props) {
    const {id} = props.match.params
    const question = questions[id]
    return {
        Question : question,
        authedUser,
        users
        
    }
}


export default connect(mapStateToProps)(QuestionPage)