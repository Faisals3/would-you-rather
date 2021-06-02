import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import { ListGroup } from 'react-bootstrap';



class ListQuestions extends Component {
    state = {
        FilterAnswered : false
    }

    handleQuestion(Ques,user) {
        if(Ques.optionOne.votes) {

        
        if (Ques.optionOne.votes.indexOf(user) !== -1 || Ques.optionTwo.votes.indexOf(user) !== -1) {
            return true
        }

        else return false
    }
    }

    toggleState(value) {
        this.setState(() => {
            return {
                FilterAnswered : value
            }
        })
    }

    render() {

        return (

            

            <div>
                <ListGroup defaultActiveKey="#Unanswered" horizontal>
                    <ListGroup.Item action href="#Unanswered" onClick={() => {this.toggleState(false)}}>
                        Unanswered Questions
    </ListGroup.Item>
                    <ListGroup.Item action href="#Answered" onClick={() => {this.toggleState(true)}}>
                    Answered Questions
    </ListGroup.Item>
                </ListGroup>
                {this.props.questionsIds.map((Ques) => (
                    <div key={Ques.id}>
                    {this.handleQuestion(Ques,this.props.authedUser) === this.state.FilterAnswered && <Question key={Ques.id} id={Ques.id}/>}
                    </div>
                ))}

            </div>
        )
    }
}

function mapStateToProps({ questions , authedUser}) {
    return {
        questionsIds: Object.values(questions),
        authedUser
    }
}


export default connect(mapStateToProps)(ListQuestions)