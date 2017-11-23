import React from 'react'
import match from 'autosuggest-highlight/match'
import parse from 'autosuggest-highlight/parse'
import { MenuItem } from 'material-ui/Menu'

function SearchSuggestions (suggestion, {query, isHighlighted}) {

  const matches = match(suggestion.name, query)
  const parts = parse(suggestion.name, matches)

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map((part, index) => {
          return !part.highlight ? (
            <span key={index} style={{fontWeight: 300}}>
              {part.text}
            </span>
          ) : (
            <strong key={index} style={{fontWeight: 500}}>
              {part.text}
            </strong>
          )
        })}
      </div>
    </MenuItem>
  )
}

export default SearchSuggestions
