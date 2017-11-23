import React from 'react'
import Paper from 'material-ui/Paper'

function SearchSuggestionsContainer (options) {
  const {containerProps, children} = options

  return (
    <Paper {...containerProps} square>
      {children}
    </Paper>
  )
}

export default SearchSuggestionsContainer
