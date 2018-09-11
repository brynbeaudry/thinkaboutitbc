import React from 'react'
import Grid from '@material-ui/core/Grid'

const TitleBar = (props) => {
  var { message = 'Default' } = props
  return (
    <Grid item xs={12} sm={10} md={10} lg={10} xl={10}>
      <div>
        <h4 className='title'>
          {message}
        </h4>
      </div>
    </Grid>
  )
}
export default TitleBar
