import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import GooglePlusIcon from '../../../components/common/GooglePlusIcon'
import FacebookIcon from '../../../components/common/FacebookIcon'
import EmailIcon from '@material-ui/icons/Email'
import TitleBar from '../../../layouts/PageLayout/components/TitleBar'
import { compose } from 'recompose'

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

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
    width: 300,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
})

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
      email : '',
      password : '',
      correctPassword : false,
    }
    console.log('Props: ', props)
    console.log('this : ', this)
  }

  componentWillMount () {
    // custom rule will have name 'isPasswordMatch'
    /* ValidatorForm.addValidationRule('isPasswordMatch', (value) =>
      this.state.user.password === this.state.password_confirm) */
    /* Also need password length rule */
  }

  handleLoginButtonPress () {
    //

  }

  handleTextBoxChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name] : value })
  }

  /* You should take a look at the cabcheap logic for validating and submitting the form.
  Login delegates the responsibility of the login actions to the buttons themselves,
  passing the form Data to the email login button.
  Register is more conventional, in that it has good validation logic in its view,
  and not in the button. This is the 'handle_submit' approach.
  I suggest looking over them and thinking about how this responsibility ought
  to be delegated. These approaches can be completely copied from cabcheap, or improved. */

  /* handleSubmit (e) {
    e.preventDefault()
    if (!this.state.submitDisabled) {
      const { user } = this.state
      console.log(user)
      const { email, password } = user
      this.props.loginWithEmail(email, password)
    }
  } */

  render () {
    const { classes } = this.props
    return (
      <Grid container justify='center'>
        <TitleBar message='Login' />
        {/* Build new form */}
        <Grid item xs={12} sm={9} md={5} lg={5} xl={5}>
          <Grid container style={styles.root} justify='center' spacing={0}>
            <Grid item xs={11}>
              <Paper
                style={paperStyle}
                zDepth={3}>
                {/* Paper with text boxes inside it, email, password,
                then social login buttons */}
                <TextField
                  id='email'
                  label='Email'
                  className={classes.textField}
                  value={this.state.name}
                  name='email'
                  onChange={this.handleTextBoxChange}
                  margin='normal'
                />
                <br />
                <TextField
                  id='password'
                  label='Password'
                  name='password'
                  className={classes.textField}
                  value={this.state.password}
                  onChange={this.handleTextBoxChange} 
                  margin='normal'
                />
                <br />

                {/* Add in the buttons from cabcheap native app directly
                I Believe there is also a button for email */}
                <Button variant='contained' color='green' className={classes.button}>
                  <EmailIcon className={classes.leftIcon} style={{ color: 'green' }} />
                  Login with Email
                </Button>
                <br />
                <Button variant='contained' color='blue' className={classes.button}>
                  <FacebookIcon className={classes.leftIcon} style={{ color: 'blue' }} />
                  Login with Facebook
                </Button>
                <br />
                <Button variant='contained' color='red' className={classes.button}>
                  <GooglePlusIcon className={classes.leftIcon} style={{ color: 'red' }} />
                  Login with Google +
                </Button>
                <br />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}
Login.propTypes = {
  loginWithEmail: PropTypes.func.isRequired,
  // errors : PropTypes.arrayOf(PropTypes.string)
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Login)
