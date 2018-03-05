import React from 'react'
import Grid from 'material-ui/Grid'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import { withStyles } from 'material-ui/styles'
import classnames from 'classnames'
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card'
import Collapse from 'material-ui/transitions/Collapse'
import Avatar from 'material-ui/Avatar'
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'
import red from 'material-ui/colors/red'
import FavoriteIcon from 'material-ui-icons/Favorite'
import ShareIcon from 'material-ui-icons/Share'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'
import MoreVertIcon from 'material-ui-icons/MoreVert'
import CommentCard from './CommentCard'
//let base64 = require('base-64')
import base64 from 'base-64'

const styles = theme => ({
  card: {
    maxWidth: '100%',
  },
  media: {
    height: 194,
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
})

class PostCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded })
  };

  render () {
    const { classes, post } = this.props
    console.log(post)

    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label='Recipe' className={classes.avatar}>
                P
              </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title={post.title}
            subheader={`${post.createdAt} by ${post.createdBy.userName}`}
          />
          <CardMedia
            className={classes.media}
            image={base64.decode(post.image.fullImage)}
            title='Contemplative Reptile'
          />
          <CardContent>
            <Typography component='p'>
              {post.text}
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label='Add to favorites'>
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label='Share'>
              <ShareIcon />
            </IconButton>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label='Show more'
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout='auto' unmountOnExit>
            {post.comments.map((comment, i) => (
              <CommentCard key={comment.id} comment={comment} />
            ))}
          </Collapse>
        </Card>
      </div>
    )
  }
}

PostCard.propTypes = {
  children: PropTypes.node,
  post: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PostCard)
