import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import RightNavButtons from './RightNavButtons'
import { IndexLink, Link, Redirect } from 'react-router'
import logoImg from '../assets/logowhiteoutlinesmallersq.png'
import PropTypes from 'prop-types'

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
      <AppBar
        onTitleClick={(event) => <Redirect push to='/' />}
        title={<Link to='/' activeClassName='page-layout__title--active'><img src={logoImg} /></Link>}
        showMenuIconButton={false}
        // iconClassNameRight="muidocs-icon-navigation-expand-more"
        // Set up to pass it props about user
        iconElementRight={<RightNavButtons />}
        // iconElementLeft=Logo
      />
    )
  }
}

GlobalAppBar.propTypes = {
  user : PropTypes.objectOf(PropTypes.string),
  onTitleClick : PropTypes.func.isRequired,
}

export default GlobalAppBar
