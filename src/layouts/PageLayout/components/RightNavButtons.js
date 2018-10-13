import React, { Component } from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import FaceIcon from '@material-ui/icons/Face'
import LogoutIcon from '@material-ui/icons/Eject'

/* Some buttons :
Login
Register

They only show is the auth state is false
So, the state can be passed in, and buttons shown conditionally
*/
const menuItems = [
  {
    label: 'Profile',
    icon: <FaceIcon />,
    href: '/profile'
  },
  {
    label: 'Logout',
    icon: <LogoutIcon />,
    href: '/logout'
  },

]

const styles = theme => ({
  button: {
    verticalAlign: 'middle',
    color: 'white',
    margin: theme.spacing.unit
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
})

const linkToLogin = props => <Link to='/login' activeClassName='' {...props} />
const linkToRegister = props => <Link to='/register' activeClassName='' {...props} />

class RightNavButtons extends Component {
  constructor (props = null) {
    super(props)
    this.state = {
      drawerOpen: false
    }
  }

  toggleDrawer = (open) => () => {
    this.setState({
      drawerOpen: open,
    })
  }

  render () {
    const { classes, auth } = this.props

    const navMenuList = (
      <div className={classes.list}>
        <List>
          {menuItems.map(x => {
            return (
              <ListItem component={props => <Link {...props} to={x.href} />} button>
                <ListItemIcon>
                  {x.icon}
                </ListItemIcon>
                <ListItemText primary={x.label} />
              </ListItem>
            )
          })}
        </List>
      </div>
    )

    const unauthorizedButtons = (
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

    const authorizedButtons = (
      <div>
        <IconButton
          onClick={this.toggleDrawer('left', true)}
          className={classes.button}
          aria-label='Menu'
        >
          <MenuIcon />
        </IconButton>
        <SwipeableDrawer
          anchor='right'
          open={this.state.drawerOpen}
          onClose={this.toggleDrawer(false)}
          onOpen={this.toggleDrawer(true)}
        >
          <div
            tabIndex={0}
            role='button'
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            {navMenuList}
          </div>
        </SwipeableDrawer>
      </div>

    )

    if (auth.isLoggedIn) {
      return authorizedButtons
    } else {
      return unauthorizedButtons
    }
  }
}

/* This is a smart component, which needs to know whether or not the user is authorized. */
/* Technically the app bar should be a smart component, and pass this a state as props. */
const mapStateToProps = (state = null) => ({
  auth : state.auth
})

RightNavButtons.propTypes = {
  classes: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
}

// composing what is exported
export default compose(withStyles(styles), connect(mapStateToProps))(RightNavButtons)
