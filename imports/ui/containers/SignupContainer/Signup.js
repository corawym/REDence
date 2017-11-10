import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { withTracker } from "meteor/react-meteor-data";

import Paper from 'material-ui/Paper'
import RaisedButton from "material-ui/RaisedButton";

import "./styles.css";
import { Teachers } from '../../../api/teacher'
import StyledTextField from "../../components/TextField/TextField";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "a",
      code: "meow"
    };
  }

  signUpTeacher(e) {
    e.preventDefault();
    let email = e.target.teacherEmail.value;
    let pass = e.target.teacherPassword.value;
    let firstName = e.target.firstName.value;
    let lastName = e.target.lastName.value;
    let fullName = `${firstName} ${lastName}`

    const teacherUserInfo = Accounts.createUser({
      email: email,
      password: pass,
      profile: {
        fullName: fullName,        
        role: 'teacher',
        program: []
      }
    });

    Teachers.insert({
      fullName: fullName,
      email: email,
      role: 'teacher'
    })
  }

  handleCode(e) {
    this.setState({
      code: e.target.value
    });
  }

  render() {
    const { currentUserId } = this.props;

    if (currentUserId) {
      return <Redirect to='/' />
    } else {
      null;
    }

    return (
      <div>
        <Paper zDepth={4} className='form-container'>
          <form autoComplete="off" onSubmit={this.signUpTeacher}>
            <StyledTextField label="First Name" className="text-field" name="firstName" />
            <br />
            <StyledTextField label="Last Name" className="text-field" name="lastName" />
            <br />
            <StyledTextField label="email" className="text-field" name="teacherEmail" />
            <br />
            <StyledTextField label="password" type="password" name="teacherPassword" />

            <p> Teacher Code </p>

            <StyledTextField onChange={e => this.handleCode(e)} label="teacher code" name="code" value={this.state.code} />

            <Link to={`/signup`} className="links"> {" "} Forgot password?{" "} </Link>

            <RaisedButton label="Sign up" primary={true} style={{ width: "95%" }} type="submit" disabled={this.state.code === "hi" ? false : true} />

            <Link to={`/signup`} className="links"> {" "} New user?{" "} </Link>
          </form>
        </Paper>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    currentUserId: Meteor.userId()
  };
})(Signup);
