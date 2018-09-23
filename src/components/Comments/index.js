import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Comment from './Comment'

import TableBody from '../shared/TableBody'
import Tbody from '../shared/Tbody'
import Tr from '../shared/Tr'

const TbodyTop = styled(Tbody)`
  padding-top: 20px;
`
const buildComment = (comment, replies) => (
  <Tr key={comment.id}>
    <td>
      <Comment comment={comment} replies={replies} />
    </td>
  </Tr>
)

const flatComments = (comments) => {
  if (comments && comments.length === 0) {
    return []
  }

  const comment = comments.pop()
  const replies = comment.kids ? flatComments(comment.kids) : []
  return [buildComment(comment, replies), ...flatComments(comments)]
}

const Comments = ({ comments: { data } }) => (
  <TableBody>
    <TbodyTop>
      { data && flatComments(data) }
    </TbodyTop>
  </TableBody>
)

Comments.propTypes = {
	comments: PropTypes.object.isRequired,
}

export default Comments
