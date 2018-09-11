import React from 'react'
import { IndexLink, Link, Redirect } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'
import GlobalAppBar from './components/AppBarComponent.js'
import Grid from '@material-ui/core/Grid'

const styles = {
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 'auto',
    width: 'auto',
    padding : '2em',
  },
}

export const PageLayout = ({ children }) => (
  <div className='layout'>
    <GlobalAppBar />
    {/*     <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink>
    {' · '}
    <Link to='/counter' activeClassName='page-layout__nav-item--active'>Counter</Link> */}
    <div className='page-layout__viewport'>
      <Grid container style={styles.root} justify='center'>
        {children}
      </Grid>
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
