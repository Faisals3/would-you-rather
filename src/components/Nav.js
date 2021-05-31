import React , {Component} from 'react'
import { Navbar,Nav,Button } from 'react-bootstrap';
import { connect } from 'react-redux'



class NavRow extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
  <Navbar.Brand>Would You Rather?</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">New Question</Nav.Link>
      <Nav.Link href="#link2">Leader Board</Nav.Link>
    </Nav>
   <Navbar.Text>
       Signed in as : {this.props.authedUser} <Button  variant="secondary">Logout</Button>
   </Navbar.Text>
  </Navbar.Collapse>

            

</Navbar>
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

