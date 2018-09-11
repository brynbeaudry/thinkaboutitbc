import React, { Component } from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

/* Some buttons :
Login
Register

They only show is the auth state is false
So, the state can be passed in, and buttons shown conditionally
*/

const styles = theme => ({
  button: {
    verticalAlign: 'middle',
    color: 'white',
    margin: theme.spacing.unit
  }
})

class RightNavButtons extends Component {
  constructor (props = null) {
    super(props)
  }

  render () {
    const { classes } = this.props
    const linkToLogin = props => <Link to='/login' activeClassName='' {...props} />
    const linkToRegister = props => <Link to='/register' activeClassName='' {...props} />
    return (
      <div>
        <Button
          component={linkToLogin}
          className={classes.button}
        >Login</Button>
        <Button
          component={linkToRegister}
          className={classes.button}
        >Register</Button>
      </div>
    )
  }
}

/* This is a smart component, which needs to know whether or not the user is authorized. */
/* Technically the app bar should be a smart component, and pass this a state as props. */
const mapStateToProps = (state = null) => ({
  auth : state.auth
})

RightNavButtons.propTypes = {
  classes: PropTypes.object.isRequired,
}

// composing what is exported
export default compose(withStyles(styles), connect(mapStateToProps))(RightNavButtons)
