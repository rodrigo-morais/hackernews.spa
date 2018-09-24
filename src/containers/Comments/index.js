import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import CommentsComponent from '../../components/Comments'
import { getCommentsByStoryId } from './actionsCreator'

const Comments = (props) => {
  const {
    comments,
    getComments,
    location: { search },
  } = props

  if (!comments.data && !comments.loading) {
    const storyId = search.split('=')[1]

    getComments(storyId)
  }

  return (
    <CommentsComponent comments={comments} />
  )
}

Comments.propTypes = {
  comments: PropTypes.object.isRequired,
	getComments: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
}

const mapStateToProps = ({ comments }) => ({ comments })

const mapDispatchToProps = (dispatch) => ({
  getComments: (storyId) => dispatch(getCommentsByStoryId(storyId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Comments)
