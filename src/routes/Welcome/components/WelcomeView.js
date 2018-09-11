import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './WelcomeView.scss'
import TitleBar from '../../../layouts/PageLayout/components/TitleBar'
import PostCardList from '../../../layouts/PageLayout/components/PostCardList'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import ImageJumbotron from '../../../layouts/PageLayout/components/ImageJumbotron'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 'auto',
    width: 'auto',
    padding : '2em',
    margin : '0 auto',
    textAlign : ''
  },
})
const devUrl = 'http://localhost:5000'
const wideImage = `/static/images/bc3_1920.png`
const narrowImage = `/static/images/bc3mobile320.png`

export class WelcomeView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      spacing: '0',
      image: wideImage
    }
  }

  render () {
    const { classes } = this.props
    const { image } = this.state
/*     const { spacing } = this.state */
    return (
      <Grid container justify='center'>
        <ImageJumbotron image={wideImage} />
        <TitleBar message='Welcome!' />
        <br />
        {/* Actually should turn THIS into the posts plural component */}
        <PostCardList />
      </Grid>
    )
  }
}
WelcomeView.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(WelcomeView)
