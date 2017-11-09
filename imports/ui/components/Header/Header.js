import React from 'react'
import PropTypes from 'prop-types'
import { FlatButton } from 'material-ui'

import './styles.css'

const Header = ({logOut, userFullName}) => (
  <div className="header-wrapper">

    <div className="header-leftside">
      <h1>RED<span>en:ce</span></h1>
    </div>

    <div className="header-rightside">
      <p>Hi, {userFullName}</p>
      <FlatButton label="Logout" className="button-logout" backgroundColor="#e2e2e2" style={{borderRadius:'18px', padding:'0 16px'}} labelStyle={{color:'#969696'}} onClick={logOut}></FlatButton>
    </div> 

  </div>
)

export default Header