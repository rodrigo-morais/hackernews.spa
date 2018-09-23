import React from 'react'
import PropTypes from 'prop-types'

import CommentComponent from '../../../components/Comments/Comment'

class Comment extends React.Component {
  constructor(props) {
    super(props)

    this.toggleDetails = this.toggleDetails.bind(this)

    this.state = { isVisible: true }
  }

  toggleDetails() {
    this.setState((prevState) => ({ isVisible: !prevState.isVisible }))
  }

  render() {
    const { comment, replies } = this.props
    const { isVisible } = this.state

    return (
      <CommentComponent
        comment={comment}
        replies={replies}
        visible={isVisible}
        toggleVisibility={this.toggleDetails}
      />
    )
  }
}

Comment.propTypes = {
	comment: PropTypes.object.isRequired,
	replies: PropTypes.array.isRequired,
}

export default Comment
