import React from 'react'
import TextField from 'material-ui/TextField'
import PropTypes from 'prop-types'

const handleFocus = function (event) {
  event.target.select()
}

function SearchInputField (inputProps) {

  const {classes, autoFocus, value, ref, ...other} = inputProps

  return (
    <TextField
      autoFocus={autoFocus || false}
      className={classes.textField}
      value={value || ''}
      inputRef={ref}
      onFocus={handleFocus}
      InputProps={{
        classes: {
          input: classes.input,
        },
        ...other,
      }}
    />
  )
}

SearchInputField.propTypes = {
  classes: PropTypes.shape({
    textField: PropTypes.string.isRequired,
    input: PropTypes.string.isRequired
  }).isRequired,
  autoFocus: PropTypes.bool,
  value: PropTypes.string,
  other: PropTypes.object
}

export default SearchInputField
