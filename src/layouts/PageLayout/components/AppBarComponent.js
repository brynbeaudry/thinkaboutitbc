import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import RightNavButtons from './RightNavButtons'
import { IndexLink, Link, Redirect } from 'react-router'
import logoImg from '../assets/logowhiteoutlinesmallersq.png'
import PropTypes from 'prop-types'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
}

class GlobalAppBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
    this.checkUser = this.checkUser.bind(this)
    console.log(...props)
  }

  checkUser () {
    const { user } = this.props.user
    for (var key in user) {
      if (user.hasOwnProperty(key)) {
        if (user[key] === undefined || user[key] === null || user[key] === '') { return false }
      }
    }
    return true
  }

  // should pass what it knows about the state to the slide menu, when that happens, and the right Nav buttons.
  render () {
    return (
     /*  <AppBar
        onTitleClick={(event) => <Redirect push to='/' />}
        title={<Link to='/' activeClassName='page-layout__title--active'><img src={logoImg} /></Link>}
        showMenuIconButton={false}
        // iconClassNameRight="muidocs-icon-navigation-expand-more"
        // Set up to pass it props about user
        iconElementRight={<RightNavButtons />}
        // iconElementLeft=Logo
      /> */
      <AppBar position='static'>
        <Toolbar>
          {/* <IconButton style={styles.menuButton} color='contrast' aria-label='Menu'>
            <MenuIcon />
          </IconButton> */}
          <Typography type='title' color='inherit' style={styles.flex}>
            <Link to='/' activeClassName='page-layout__title--active'><img src={logoImg} /></Link>
          </Typography>
          <RightNavButtons />
        </Toolbar>
      </AppBar>
    )
  }
}

GlobalAppBar.propTypes = {
  user : PropTypes.objectOf(PropTypes.string),
}

export default GlobalAppBar
