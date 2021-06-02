import React , {Component} from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'


class LeaderBoard extends Component {

   
    getAnswerslength (answers) {
        var answersLength = Object.values(answers)
        return answersLength.length
    }

    sortUsers (usersID) {
        usersID.sort((a,b) => {
            return (b.questions.length + this.getAnswerslength(b.answers)) - (a.questions.length + this.getAnswerslength(a.answers));
        })

        return usersID
    }

    render() {

       const Users = this.sortUsers(this.props.usersID)
        return (
            <div>
                {Users ? 
                
                <div>
                
                {Users.map((user,index) => (
                    <li key={user.id}>
                          <img src={this.props.users[user.id].avatarURL} alt="User Avatar" width="100" height="100"></img><br/>
                         {'Rank '+(index+1) + ' - ' + user.name}
                        <br/>
                        Questions created : {user.questions.length}
                        <br />
                        Questions answered : {this.getAnswerslength(user.answers)}
                        <br />
                        Score : {user.questions.length + this.getAnswerslength(user.answers)} 
                        <hr/>
                    </li>
                ))}
                
               
                
                </div>

                    //Redirect if error happend
                : <div><Redirect to={'/'}/></div>}
            </div>
        )
    }
}

function mapStateToProps ({users}) {
    return {
        usersID : Object.values(users),
        users 
    }
}

export default connect(mapStateToProps)(LeaderBoard)

//sort users : 
// users.sort((a,b) => ((users[b].questions.length+users[b].answers.length) - (users[a].questions.length+users[a].answers.length))
// (users[b].questions.length + users[b].answers.length)     -       (users[a].questions.length + users[a].answers.length )