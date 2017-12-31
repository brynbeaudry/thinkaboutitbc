import React from 'react'
import { IndexLink, Link, Redirect } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'
import GlobalAppBar from './components/AppBar.js'

const styles = {

}

export const PageLayout = ({ children }) => (
  <div className='layout'>
    <GlobalAppBar
      onTitleClick={(event) => <Redirect push to='/' />}
      title={<Link to='/' activeClassName='page-layout__title--active'></Link>}
      showMenuIconButton={true} />
    {/*     <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink>
    {' · '}
    <Link to='/counter' activeClassName='page-layout__nav-item--active'>Counter</Link> */}
    <div className='page-layout__viewport'>
      {children}
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
