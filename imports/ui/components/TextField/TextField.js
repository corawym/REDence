import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'

import { deepPurple800 } from 'material-ui/styles/colors'

const styles = {
    fieldStyle: {
        width: '100%'
    },
    errorStyle: {
        color: deepPurple800,
        position: 'absolute',
        bottom: '-0.42rem'
    },
    underlineStyle: {
        borderColor: deepPurple800
    }
}

const StyledTextField = ({ label }) => (
    <TextField
        style={styles.fieldStyle}
        hintText={label}
        floatingLabelText={label}
        errorStyle={styles.errorStyle}
        underlineFocusStyle={styles.underlineStyle}
    />
)

StyledTextField.propTypes = {
    label: PropTypes.string.isRequired
}

export default StyledTextField
