import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators, compose } from 'redux'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import Autosuggest from 'react-autosuggest'
import { styles } from './search.style'
import MovieDetails from '../components/movie-details'
import SearchInputField from '../components/search-input-field'
import SearchSuggestions from '../components/search-suggestions'
import SearchSuggestionsContainer from '../components/search-suggestions-container'

import {
  actions
} from '../reducers/search'

function getSuggestionValue (suggestion) {
  return suggestion.name
}

const SearchContainer = props => (
  <div className={props.classes.root}>
    <Autosuggest
      theme={{
        container: props.classes.container,
        suggestionsContainerOpen: props.classes.suggestionsContainerOpen,
        suggestionsList: props.classes.suggestionsList,
        suggestion: props.classes.suggestion,
      }}
      renderInputComponent={SearchInputField}
      suggestions={props.suggestions}
      onSuggestionsFetchRequested={props.handleSuggestionsFetchRequested}
      onSuggestionsClearRequested={props.clearSuggestions}
      renderSuggestionsContainer={SearchSuggestionsContainer}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={SearchSuggestions}
      onSuggestionSelected={props.onSuggestionSelected}
      highlightFirstSuggestion={true}
      inputProps={{
        classes: props.classes,
        placeholder: 'Find TV show by name',
        value: props.value,
        onChange: props.handleChange,
      }}
    />
    {
      props.selectedMovie ? (
        <MovieDetails
          data={props.selectedMovie}
        />
      ) : <div/>
    }
  </div>
)

SearchContainer.propTypes = {
  value: PropTypes.string.isRequired,
  suggestions: PropTypes.array.isRequired,
  selectedMovie: PropTypes.object
}

const mapStateToProps = state => ({
  value: state.search.value,
  suggestions: state.search.suggestions,
  selectedMovie: state.search.selectedMovie
})

const mapDispatchToProps = dispatch => bindActionCreators({
  handleSuggestionsFetchRequested: ({value}) => actions.loadSuggestions(value),
  clearSuggestions: () => actions.clearSuggestions(),
  handleChange: (event, {newValue}) => actions.updateValue(newValue),
  onSuggestionSelected: (event, {suggestion, suggestionValue, suggestionIndex, sectionIndex, method}) => actions.selectMovie(suggestion.id)
}, dispatch)

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(SearchContainer)
