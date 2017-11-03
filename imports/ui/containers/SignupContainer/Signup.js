import React, { Component } from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'
import RaisedButton from 'material-ui/RaisedButton'
import './styles.css'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
}

const RBstyle = {
  margin: 12,
};

export default class Signup extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: 'a',
    }
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    })
  }


  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
        className='signup-tabs'
      >
        <Tab label="Tab A" value="a">
          <div className='form-container'>
            <h2 style={styles.headline}>Controllable Tab A</h2>
            <p>
              Tabs are also controllable if you want to programmatically pass them their values.
              This allows for more functionality in Tabs such as not
              having any Tab selected or assigning them different values.
            </p>
          </div>
        </Tab>
        <Tab label="Tab B" value="b">
          <div className='form-container'>
            <h2 style={styles.headline}>Controllable Tab B</h2>
            <p>
              This is another example of a controllable tab. Remember, if you
              use controllable Tabs, you need to give all of your tabs values or else
              you wont be able to select them.
            </p>
          </div>
        </Tab>
      </Tabs>
    )
  }
}



