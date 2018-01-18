import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './WelcomeView.scss'
import TitleBar from '../../../layouts/PageLayout/components/TitleBar'
import Paper from 'material-ui/Paper'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 'auto',
    width: 'auto',
    padding : '16px',
    textAlign : 'center'
  },
})

export class WelcomeView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      spacing: '16',
    }
  }
  render () {
    const { classes } = this.props
    const { spacing } = this.state
    return (
      <Grid container style={styles.root} justify='center'>
        <TitleBar message='Welcome!' />
        {/* Actually should turn THIS into the posts plural component */}
        <Grid item xs={12} sm={10} md={10} lg={8} xl={6}>
          <Grid container style={styles.root} justify='center' spacing={Number(spacing)}>
            {[0, 1, 2, 3].map(value => (
              <Grid key={value} item xs={11}>
                IN container 1
                <Paper style={styles.paper}>
                  Item 2 <br />
                  What is Lorem Ipsum?
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                  Why do we use it?
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

                  Where does it come from?
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    )
  }
}
WelcomeView.propTypes = {
}
export default WelcomeView
