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
    width: 200,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
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
    this.loginWithEmail = props.loginWithEmail.bind(this)
    console.log('Props: ', props)
    console.log('this : ', this)
  }

  componentWillMount () {
    // custom rule will have name 'isPasswordMatch'
    /* ValidatorForm.addValidationRule('isPasswordMatch', (value) =>
      this.state.user.password === this.state.password_confirm) */
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
    const { classes } = this.props
    return (
      <Paper
        style={paperStyle}
        zDepth={3}>
        {/* Build new form */}
        <Grid item xs={12} sm={10} md={10} lg={8} xl={6}>
          <Grid container style={styles.root} justify='center' spacing={0}>
            <Grid item xs={11}>
              {/* Paper with text boxes inside it, email, password,
              then social login buttons */}
              <TextField
                id='email'
                label='Email'
                className={classes.textField}
                value={this.state.name}
                onChange={this.handleChange('name')}
                margin='normal'
              />
              <TextField
                id='email'
                label='Email'
                className={classes.textField}
                value={this.state.name}
                onChange={this.handleChange('name')}
                margin='normal'
              />

              {/* Add in the buttons from cabcheap native app directly
              I Believe there is also a button for email */}
              <Button variant='contained' disabled color='secondary' className={classes.button}>
                <EmailIcon className={classes.leftIcon} />
                Talk
              </Button>
              <Button variant='contained' disabled color='secondary' className={classes.button}>
                <FacebookIcon className={classes.leftIcon} />
                Talk
              </Button>
              <Button variant='contained' disabled color='secondary' className={classes.button}>
                <GooglePlusIcon className={classes.leftIcon} />
                Talk
              </Button>

            </Grid>
          </Grid>
        </Grid>
      </Paper>
    )
  }
}
Login.propTypes = {
  loginWithEmail: PropTypes.func.isRequired,
  // errors : PropTypes.arrayOf(PropTypes.string)
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Login)
