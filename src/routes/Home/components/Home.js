import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import Snackbar from 'material-ui/Snackbar'

/* The Register Form */
const style = {
  height: '500px', width: '500px',
}

function loadJS (src) {
  var ref = window.document.getElementsByTagName('script')[0]
  var script = window.document.createElement('script')
  script.src = src
  script.async = true
  ref.parentNode.insertBefore(script, ref)
}

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
    console.log('Props: ', props)
    console.log('this : ', this)
  }

  componentWillMount () {
    // custom rule will have name 'isPasswordMatch'
    /* Also need password length rule */
  }

  componentDidMount () {
        // Connect the initMap() function within this class to the global window context,
        // so Google Maps can invoke it
    /* window.initMap = this.initMap */
        // Asynchronously load the Google Maps script, passing in the callback reference
    /* loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyAXBzA9y2hdnJDJnMUgu6ixw6D05lBkxN4&callback=initMap') */
  }
  
  render () {
    return (
      <div>
        <div id='home'
          style={style} />
      </div>
    )
  }
}
Home.propTypes = {
  // somefuc : PropTypes.func.isRequired,
  // errors : PropTypes.arrayOf(PropTypes.string)
}

export default Home
