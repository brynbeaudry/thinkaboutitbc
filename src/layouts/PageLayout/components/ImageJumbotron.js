import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'

const styles = theme => ({
  root: {
    backgroundSize: 'contain'
  },
  card: {
    width: '100%',
    height: '828px',
  },
  media: {
    width: '100%',
    height: '-webkit-fill-available',
  },
})

const bannerStyle = {
  width: '100%',
  textAlign: 'center',
}

const ImageJumbotron = (props) => {
  const { classes, image } = props
  console.log(image)
  return (
    <Grid item xs={12}>
      {/* <Card className={classes.card}>
        <CardMedia className={classes.media} image='http://localhost:5000/static/images/bc3_1920.png' title='Contemplative Reptile' />
      </Card> */}
      <img style={bannerStyle} src='http://localhost:5000/static/images/bc3_1920.png' />
    </Grid>
  )
}
ImageJumbotron.propTypes = {
  classes: PropTypes.object.isRequired,
  image : PropTypes.string.isRequired
}
export default withStyles(styles)(ImageJumbotron)
