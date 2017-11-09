import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Paper } from 'material-ui'

import { Header } from '../../components/Header'

import './styles.css'
class HeaderContainer extends Component {

  render() {
    return (
      <Paper zDepth={1} className="headerContainer">
        <Header />
      </Paper>
    )
  }
}

export default HeaderContainer