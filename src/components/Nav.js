import React , {Component} from 'react'
import { Navbar,Nav,Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'
import {setAuthedUser} from '../actions/authedUser'
import {Redirect} from 'react-router-dom'




class NavRow extends Component {
  handleChange = event => {
    event.preventDefault();
  }

  handleLogout = event => {
    this.props.dispatch(setAuthedUser(''))
    
  }
    render() {
     
        return (
          <div>
          {this.props.authedUser !== '' ? 
          <div>
            <div>
                <Navbar bg="light" expand="lg">
  <Navbar.Brand>Would You Rather?</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
          <NavLink to='/' exact activeClassName='active'style={{marginRight:'10px'}}>
            Home
          </NavLink>
          <NavLink to='/newQuestion' exact activeClassName='active' style={{marginRight:'10px'}}>
            New Question
          </NavLink>
          <NavLink to='/LeaderBoard' exact activeClassName='active'style={{marginRight:'10px'}}>
            LeaderBoard
          </NavLink>
    </Nav>
   <Navbar.Text>
       Signed in as : {this.props.authedUser} <Button  variant="secondary" onClick={() => {this.handleLogout()}}>Logout</Button>
   </Navbar.Text>
  </Navbar.Collapse>

            

</Navbar>
            </div>
            </div>

            :
            <div>
            <Redirect to={'/login'}/>
          </div>
        }
        </div>
        )
    }
}

function mapStateToProps({ authedUser }) {
    return {
      authedUser
    }
  }
  

export default connect(mapStateToProps)(NavRow)

