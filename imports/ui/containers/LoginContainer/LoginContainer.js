import React, { Component } from 'react'

import Login from './Login'

class LoginContainer extends Component {

    render() {
        return (
            <Login login={this.login} />
        )
    }
}

export default LoginContainer
