import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import Button from 'material-ui/Button'
import Snackbar from 'material-ui/Snackbar'

/* The Register Form */
/*
First name
Last Name
email
password
confirm password

Verify that the passwords match on the front end

this.props.registerUser  - function on submit
this.props.errors

this.props.errors.register.first_name[0] for example will be the first error that comes back from the server

possibly need a function to check if all the fields are filled out before registering the user.

Handlesumbit should be the dispatch function register user passed in as props
*/
const paperStyle = {
  height: 'auto',
  width: 'auto',
  margin: '1em',
  display: 'block',
  textAlign : 'center',
}

const buttonStyle = {

}

const errorStyle = {
  position: 'absolute',
  marginBottom: '-22px',
  color: 'red',
}

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {
        email : undefined,
        password : undefined,
      },
      isAllFilled : false,
      submitDisabled : true,
    }
    this.handleChange = this.handleChange.bind(this)
    this.validatorListener = this.validatorListener.bind(this)
    this.checkUserData = this.checkUserData.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.login = props.loginWithEmail.bind(this)
    console.log('Props: ', props)
    console.log('this : ', this)
  }

  componentWillMount () {
    // custom rule will have name 'isPasswordMatch'
    ValidatorForm.addValidationRule('isPasswordMatch', (value) =>
      this.state.user.password === this.state.password_confirm)
    /* Also need password length rule */
  }

  handleChange (event) {
    const { user } = this.state
    if (event.target.name !== 'password_confirm') {
      user[event.target.name] = event.target.value
      this.setState({ user, isAllFilled : this.checkUserData(user) })
    } else {
      this.setState({ password_confirm : event.target.value, isAllFilled : this.checkUserData(user) })
    }
  }

  checkUserData (user) {
    for (var key in user) {
      if (user.hasOwnProperty(key)) {
        if (user[key] === undefined || user[key] === null || user[key] === '') { return false }
      }
    }
    return true
  }

  validatorListener (result) {
    // console.log('is Valid', result, 'isAllFilled', this.state.isAllFilled)
    if (result && this.state.isAllFilled) {
      this.setState({ submitDisabled: false })
    } else {
      this.setState({ submitDisabled: true })
    }
  }

  handleSubmit (e) {
    e.preventDefault()
    if (!this.state.submitDisabled) {
      const { user } = this.state
      console.log(user)
      const { email, password } = user
      this.props.loginWithEmail(email, password)
    }
  }

  render () {
    return (
      <Paper
        style={paperStyle}
        zDepth={3}>
        {/* Build new form */}
      </Paper>
    )
  }
}
Login.propTypes = {
  loginWithEmail: PropTypes.func.isRequired,
  // errors : PropTypes.arrayOf(PropTypes.string)
}

export default Login
