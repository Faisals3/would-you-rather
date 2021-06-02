import React , {Component} from 'react'
import { connect } from 'react-redux'
import {Button,ListGroup} from 'react-bootstrap';
import {Link,withRouter} from 'react-router-dom'


class Question extends Component {
    render() {
        const Question = this.props.Question 
        return (
            <div>
            <img src={this.props.users[Question.author].avatarURL} alt="User Avatar" width="100" height="100"></img>
            <b>{'  '+Question.author + ' asks: '}</b><br />
            <ListGroup>
                <ListGroup.Item>
                {Question.optionOne.text}
                </ListGroup.Item>

                <ListGroup.Item>
                {Question.optionTwo.text}
                </ListGroup.Item>

                <ListGroup.Item>
                <Link to={'question/' + Question.id}>
                <Button variant="success">View Poll</Button>
                </Link>
                </ListGroup.Item>
            </ListGroup><br/>
                   
            </div>
        )
    }
}

function mapStateToProps ({questions,users} , {id}) {
    const question = questions[id]
    return {
        Question : question,
        users
        
    }
}


export default withRouter(connect(mapStateToProps)(Question))