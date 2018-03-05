import React from 'react'
import Grid from 'material-ui/Grid'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import { withStyles } from 'material-ui/styles'
import PostCard from './PostCard'
import { connect } from 'react-redux'
import { PostsGet } from '../../../services/modules/posts'
import { injectReducer } from '../../../store/reducers'

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 'auto',
    width: 'auto',
    padding : '2em',
    margin : '0 auto',
    textAlign : ''
  },
})

class PostCardList extends React.Component {

  constructor (props) {
    super(props)
    console.log(JSON.stringify(props))
    
    // function provided by the starter kit

    this.state = {
      posts : props.posts || ['Nothing'],
      fetching : props.fetching || false,
      error : props.error || {}
    }
    this.props.PostsGet()
  }

  componentDidMount () {
    //gets the posts as soon as the component maps.
    //this.props.PostsGet()
    console.log("did mount")
  }

  componentWillMount () {
    console.log("will mount")
  }

  render () {
    console.log(`props right now are ${JSON.stringify(this.props)}`)
    let posts = this.props.posts.posts || ['Nothing']
    console.log("render")
    console.log(`posts right now are ${JSON.stringify(posts)}`)


    return (
      <Grid item xs={12} sm={10} md={10} lg={8} xl={6}>
        <Grid container style={styles.root} justify='center' spacing={0}>
          {posts.map((post) => (
            <Grid key={post.id} item xs={11}>
              {/* IN container 1 */}
              <PostCard post={post} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    )
  }
}

const mapDispatchToProps = {
  PostsGet : PostsGet
}
const mapStateToProps = (state) => ({
  posts : state.posts,
  error : state.error,
  fetching : state.fetching
})

PostCardList.propTypes = {
  // children: PropTypes.node,
  posts: PropTypes.object,
  error : PropTypes.object,
  fetching : PropTypes.bool,
  PostsGet : PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(PostCardList)
