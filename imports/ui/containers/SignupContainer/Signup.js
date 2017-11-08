import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Tabs, Tab } from "material-ui/Tabs";
import RaisedButton from "material-ui/RaisedButton";

import "./styles.css";
import StyledTextField from "../../components/TextField/TextField";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "a",
      code: "meow"
    };
  }

  handleChange = value => {
    this.setState({
      value: value
    });
  };

  signUpStudent(e) {
    e.preventDefault();
    let email = e.target.studentEmail.value;
    let pass = e.target.studentPassword.value;
    Accounts.createUser({
      email: email,
      password: pass
    });
  }

  signUpTeacher(e) {
    e.preventDefault();
    let email = e.target.teacherEmail.value;
    let pass = e.target.teacherPassword.value;
    Accounts.createUser({
      email: email,
      password: pass
    });
  }

  handleCode(e){
    this.setState({
      code: e.target.value
    });
  };

  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
        className="signup-tabs"
      >
        <Tab label="Student" value="a" className="tab-container">
          <form autoComplete="off" onSubmit={this.signUpStudent}>
            <StyledTextField label="email" className="text-field" name="studentEmail" />
              <br />
            <StyledTextField label="password" type="password" name="studentPassword" />

            <Link to={`/signup`} className="links"> Forgot password? </Link>

            <Link to={`/`}><RaisedButton label="Sign up" primary={true} style={{ width: "95%" }} type="submit" /></Link>

            <Link to={`/signup`} className="links"> New user? </Link>
          </form>
        </Tab>

        <Tab label="Teacher" value="b" className="tab-container">
          <form autoComplete="off" onSubmit={this.signUpTeacher}>
            <StyledTextField label="email" className="text-field" name="teacherEmail" />
              <br />
            <StyledTextField label="password" type="password" name="teacherPassword" />

            <p> Teacher Code </p>

            <StyledTextField onChange={(e) => this.handleCode(e)} label="teacher code" name="code" value={this.state.code} />

            <Link to={`/signup`} className="links"> Forgot password? </Link>

            <Link to={`/`}><RaisedButton label="Sign up" primary={true} style={{ width: "95%" }} type="submit" disabled={this.state.code === "hi" ? false : true} /></Link>

            <Link to={`/signup`} className="links"> New user? </Link>
          </form>
        </Tab>
      </Tabs>
    );
  }
}
