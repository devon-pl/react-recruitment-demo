import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import { Link } from 'react-router-dom'
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'
import { styles } from './movie-details.style'
import DOMPurify from 'dompurify'

const renderGenres = (genres) => (
  <Typography component="p">
    <strong>Genres: </strong>
    {
      genres.join(', ')
    }
  </Typography>
)

const renderLanguage = (language) => (
  <Typography component="p">
    <strong>Language: </strong>
    {language}
  </Typography>
)

const renderSummary = (summary) => (
  <Typography component="div">
    <div
      dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(summary, {ALLOWED_TAGS: ['p', 'b', 'strong', 'br']}) || 'No description'}}/>
  </Typography>
)

const MovieDetails = props => (
  <div>
    <Paper className={props.classes.paper}>
      <Grid container spacing={16}>
        <Grid item xs={12} sm={3}>
          {
            props.data.image && props.data.image.original ? (
              <img src={props.data.image.original} alt={props.data.name}/>
            ) : ''
          }
        </Grid>
        <Grid item xs={12} sm={9}>
          <Typography type="headline">{props.data.name}</Typography>
          {props.data.summary ? (renderSummary(props.data.summary)) : ''}
          {props.data.genres ? renderGenres(props.data.genres) : ''}
          {props.data.language ? renderLanguage(props.data.language) : ''}
          <div className={props.classes.cardNavigationButtons}>
            {
              props.data.url ? (
                <Button raised color="primary" component={Link} to={props.data.url} target="_blank">
                  More details
                </Button>
              ) : ''
            }
            {
              props.data.externals.imdb ? (
                <Button raised className={props.classes.button} color="accent" component={Link}
                        to={`http://imdb.com/title/${props.data.externals.imdb}/episodes?ref_=tt_ov_epl`}
                        target="_blank">Imdb</Button>
              ) : ''
            }
          </div>
        </Grid>
      </Grid>
    </Paper>
  </div>
)

MovieDetails.propTypes = {
  classes: PropTypes.shape({
    paper: PropTypes.string.isRequired,
    cardNavigationButtons: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    image: PropTypes.shape({
      original: PropTypes.string,
    }),
    name: PropTypes.string.isRequired,
    summary: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    url: PropTypes.string,
    externals: PropTypes.shape({
      imdb: PropTypes.string
    })
  }).isRequired
}

export default withStyles(styles, {withTheme: true})(MovieDetails)
