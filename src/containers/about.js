import React from 'react'
import Typography from 'material-ui/Typography'

const About = props => (
  <div>
    <Typography type="title" gutterBottom>Info</Typography>
    <Typography type="subheading" gutterBottom>
      Simple demo based on: React, Redux, Material UI, Axios and React Axios Middleware.
    </Typography>
    <Typography type="body1"><strong>Author:</strong> Daniel Kurylo</Typography>
    <Typography type="body1"><strong>License:</strong> MIT</Typography>
  </div>
)

export default About
