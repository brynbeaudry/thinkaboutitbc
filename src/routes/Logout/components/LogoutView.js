import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TitleBar from '../../../layouts/PageLayout/components/TitleBar'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Fade from '@material-ui/core/Fade'
import CircularProgress from '@material-ui/core/CircularProgress'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const paperStyle = {
  height: 'auto',
  width: 'auto',
  margin: '1em',
  display: 'block',
  textAlign : 'center',
}

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  text : {
    marginLeft: '1rem',
    textAlign: 'center'
  },
  paper: {
    height: 'auto',
    width: 'auto',
    padding : '2em',
    margin : '0 auto',
    textAlign : ''
  },
})

export class LogoutView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      spacing: '0',
    }
  }

  componentDidMount () {
    // calling logout if not fetching
    let { logout, auth, fetching } = this.props
    let { access_token } = auth
    let { id } = auth.user
    console.log(`In componetn did mount ${fetching}`)
    if (!fetching) {
      setTimeout(() => {
        logout(access_token, id)
      }, 1000)
    }
  }

  render () {
    const { fetching, classes, auth } = this.props
    return (
      <Grid container justify='center'>
        <TitleBar message='Logout' />
        {/* Build new form */}
        <Grid item xs={12} sm={9} md={5} lg={5} xl={5}>
          <Grid container style={styles.root} justify='center' spacing={0}>
            <Grid item xs={11}>
              {/* Paper with text boxes inside it, email, password,
                then social login buttons */}
              <Typography paragraph className={classes.text} variant='display1' color='textPrimary'>
                    Logging out {auth.user.fullName}. Thanks for stopping by!
              </Typography>
              <br />
              <Fade
                in={fetching}
                style={{
                  transitionDelay: fetching ? '800ms' : '0ms',
                }}
                unmountOnExit
                >
                <CircularProgress />
              </Fade>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}
LogoutView.propTypes = {
  classes: PropTypes.object.isRequired,
  fetching: PropTypes.bool.isRequired,
  logout : PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

export default withStyles(styles)(LogoutView)
