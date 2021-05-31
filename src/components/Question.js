import React , {Component} from 'react'
import { connect } from 'react-redux'
import {Button,ListGroup} from 'react-bootstrap';


class Question extends Component {
    render() {
        const Question = this.props.Question 
        return (
            <div>
            <b>{Question.author + ' asks: '}</b><br />
            <ListGroup>
                <ListGroup.Item>
                {Question.optionOne.text}
                </ListGroup.Item>

                <ListGroup.Item>
                {Question.optionTwo.text}
                </ListGroup.Item>

                <ListGroup.Item>
                <Button variant="success">View Poll</Button>
                </ListGroup.Item>
            </ListGroup><br/>
                   
            </div>
        )
    }
}

function mapStateToProps ({questions} , {id}) {
    const question = questions[id]
    return {
        Question : question,
        
    }
}


export default connect(mapStateToProps)(Question)