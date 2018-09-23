import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Comment from '../../containers/Comments/Comment'

import TableBody from '../shared/TableBody'
import Tbody from '../shared/Tbody'
import Tr from '../shared/Tr'

const TbodyTop = styled(Tbody)`
  padding-top: 20px;
`
const buildComment = (comment, replies, level) => level === 0
  ? (
    <Tr key={comment.id}>
      <td>
        <Comment comment={comment} replies={replies} />
      </td>
    </Tr>)
  : (<Comment key={comment.id} comment={comment} replies={replies} />)

const flatComments = (comments, level = 0) => {
  if (comments && comments.length === 0) {
    return []
  }

  const comment = comments.pop()
  const replies = comment.kids ? flatComments(comment.kids, level + 1) : []
  return [buildComment(comment, replies, level), ...flatComments(comments)]
}

const Comments = ({ comments: { data } }) => (
  <Tr>
    <td>
      <TableBody>
        <TbodyTop>
          { data && flatComments(data) }
        </TbodyTop>
      </TableBody>
    </td>
  </Tr>
)

Comments.propTypes = {
	comments: PropTypes.object.isRequired,
}

export default Comments
