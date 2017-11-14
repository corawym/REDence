import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Paper } from 'material-ui'

import { Header } from '../../components/Header'

import './styles.css'
class HeaderContainer extends Component {

  render() {
    const {logOut, userFullName} = this.props
    return (
      <Paper zDepth={1} className="headerContainer">
        <Header logOut={logOut} userFullName={userFullName}/>
      </Paper>
    )
  }
}

export default HeaderContainer