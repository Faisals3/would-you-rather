import React,{Component} from 'react'
import { connect } from 'react-redux'
import {setAuthedUser} from '../actions/authedUser'
import {Redirect} from 'react-router-dom'


class login extends Component {

    state = {
        id : ''
    }

    handleChange = (e) => {
        this.setState(() => ({
            id:e
        }))
    }

    handleLogin = (e) => {
        e.preventDefault()
        this.props.dispatch(setAuthedUser(this.state.id))
        
    }


    render() {

        return (
            <div>

            {this.props.authedUser === '' ?
            <div>
                <h2>Login as : </h2>
                
                <form onSubmit={this.handleLogin}>
                    <select defaultValue='Select user' onChange={(e) => {this.handleChange(e.target.value)}}>
                        <option disabled hidden>Select user</option>
                        {this.props.usersID.map((user) => (
                            <option key ={user.id}>{user.id}</option>
                        ))}
                    </select>
                    <br/><br/><button>Login</button>
                </form>
            </div>

            :
            <div>
                <Redirect to={'/'}/>
            </div>
    }

        </div>
        )
    }
}


function mapStateToProps ({users,authedUser}) {
    return {
        usersID : Object.values(users),
        users,
        authedUser
    }
}

export default connect(mapStateToProps)(login)