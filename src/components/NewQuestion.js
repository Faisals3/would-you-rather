import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Badge , Button } from 'react-bootstrap'
import {handleAddQuestion} from '../actions/questions'

class NewQuestion extends Component {
    
    state = {
        optionOne : '',
        optionTwo : ''
    }

    handleChangeOne = (e) => {
        const optionOne = e.target.value

        this.setState(() => ({
            optionOne
        }))

        e.target.value=''
    }

    handleChangeTwo = (e) => {
        const optionTwo = e.target.value

        this.setState(() => ({
            optionTwo
        }))

        e.target.value=''
    }


    addQuestion = (e) => {
        e.preventDefault();
        const question = {
        author : this.props.authedUser,
        optionOneText : this.state.optionOne,
        optionTwoText : this.state.optionTwo

        }
        handleAddQuestion(question)

        console.log(question.author,question.optionOneText,question.optionTwoText)
        this.setState(() => ({
            optionOne : '',
            optionTwo : ''
        }))
       
        
    }


    render() {
        return (
            <div >
                <h2>
                    <Badge variant="secondary">
                        New Question
                    </Badge>
                    <br />
                </h2>
                <br />
                <form onSubmit={this.addQuestion}>
                    
                        <label style={{marginRight:'5px'}}>Option one: </label>
                        <input placeholder='Write first option ...' value={this.state.optionOne} onChange={this.handleChangeOne}/>
                        <br />
                        <label style={{marginRight:'5px'}}>Option two:</label>
                        <input placeholder='Write second option ...' value={this.state.optionTwo} onChange={this.handleChangeTwo}/>
                        <br/>
                    
                    <Button variant="primary" type="submit">
                        Submit
                     </Button>
                </form>
                
            </div>
        )
    }
}

function mapStateToProps ({questions , authedUser}) {
    return {
        questions,
        authedUser
    }
}


export default connect(mapStateToProps)(NewQuestion)