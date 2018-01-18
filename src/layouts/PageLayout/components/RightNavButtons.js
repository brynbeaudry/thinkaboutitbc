import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import Button from 'material-ui/Button'
import { Link } from 'react-router'
import { withStyles } from 'material-ui/styles'
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
    return (
      <div>
        <Link to='/login' activeClassName=''>
          <Button
            raised
            label='Login'
            className={classes.button}
            style={styles.button}
            containerElement='label'
            />
        </Link>
        <Link to='/register' activeClassName=''>
          <Button
            raised
            label='Register'
            className={classes.button}
            style={styles.button}
            containerElement='label'
            />
        </Link>
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

}

// composing what is exported
export default connect(mapStateToProps)(RightNavButtons)
