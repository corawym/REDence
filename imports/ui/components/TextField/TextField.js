import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'

import { deepPurple800 } from 'material-ui/styles/colors'

const styles = {
    fieldStyle: {
        width: '100%',
        fontFamily:'"Ubuntu", sans-serif'
    },
    floatingLabelStyle: {
        color:'#969696'
    },
    floatingLabelFocusStyle: {
        color: '#313131'
    },
    underlineStyle: {
        borderColor: '#313131'
    },
    errorStyle: {
        color: '#e2231a',
        position: 'absolute',
        bottom: '-0.42rem'
    }
    
}

const StyledTextField = ({ label, name, type, onChange }) => (
    <TextField
        style={styles.fieldStyle}
        hintText={label}
        floatingLabelText={label}
        floatingLabelStyle={styles.floatingLabelStyle}
        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        underlineFocusStyle={styles.underlineStyle}
        name={name}
        type={type}
        onChange={onChange}
        autoComplete='off'

        errorStyle={styles.errorStyle}
    />
)

StyledTextField.propTypes = {
    label: PropTypes.string.isRequired
}

export default StyledTextField
