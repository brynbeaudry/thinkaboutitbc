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
import Fade from '@material-ui/core/Fade'
import CircularProgress from '@material-ui/core/CircularProgress'
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'

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
    // this.handleLoginWithEmailButtonPress = this.handleLoginWithEmailButtonPress.bind(this)
  }

  componentWillMount () {
    // custom rule will have name 'isPasswordMatch'
    /* ValidatorForm.addValidationRule('isPasswordMatch', (value) =>
      this.state.user.password === this.state.password_confirm) */
    /* Also need password length rule */
  }

  handleLoginWithEmailButtonPress () {
    //
    const { loginWithEmail } = this.props
    const { email, password } = this.state
    loginWithEmail(email, password)
  }

  handleTextBoxChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name] : value })
  }

  responseFacebook = (response) => {
    console.log(`Response from facebook : ${JSON.stringify(response)}`)
  }

  responseGoogle = (response) => {
    console.log(`Response from google : ${response}`)
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
    const { classes, fetching } = this.props
    return (
      <Grid container justify='center'>
        <TitleBar message='Login' />
        {/* Build new form */}
        <Grid item xs={12} sm={9} md={5} lg={5} xl={5}>
          <Grid container style={styles.root} justify='center' spacing={0}>
            <Grid item xs={11}>
              <Paper
                style={paperStyle}
                elevation={3}>
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
                <Button onClick={this.handleLoginWithEmailButtonPress} variant='contained' className={classes.button}>
                  <EmailIcon className={classes.leftIcon} style={{ color: 'green' }} />
                  Login with Email
                </Button>
                <br />
                <FacebookLogin
                  appId='311905222724198'
                  autoload={true}
                  fields='name,email,picture'
                  onClick={() => (console.log('facebook btn clicked'))}
                  callback={this.responseFacebook}
                />
                <br />
                <GoogleLogin
                  clientId='480833399046-qjfj5vncfrtq59t2altl0utla7ta77kt.apps.googleusercontent.com'
                  buttonText='LOGIN WITH GOOGLE'
                  onSuccess={this.responseGoogle}
                  onFailure={this.responseGoogle}
                />
                <br />
                {/*
                Unfortunately going to be using a library instead
                <Button variant='contained' className={classes.button}>
                  <FacebookIcon className={classes.leftIcon} style={{ color: 'blue' }} />
                  Login with Facebook
                </Button>
                <br />
                <Button variant='contained' className={classes.button}>
                  <GooglePlusIcon className={classes.leftIcon} style={{ color: 'red' }} />
                  Login with Google +
                </Button>
                <br /> */}
                <Fade
                  in={fetching}
                  style={{
                    transitionDelay: fetching ? '800ms' : '0ms',
                  }}
                  unmountOnExit
                >
                  <CircularProgress />
                </Fade>
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
  errors : PropTypes.arrayOf(PropTypes.string),
  fetching : PropTypes.bool,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Login)
