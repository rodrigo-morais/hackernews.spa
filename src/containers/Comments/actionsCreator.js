import { HN_API } from '../../constants'
import { requestComments, receiveComments, failComments } from './actions'

const getComments = (comments) => (dispatch) => {
  dispatch(requestComments())
  return Promise.all(comments.map((commentId) => fetchComment(commentId)))
    .then((comment) => dispatch(receiveComments(comment)))
    .catch(() => dispatch(failComments()))
}

const fetchComment = (commentId) => new Promise((resolve, reject) => {
  fetch(`${HN_API}item/${commentId}.json`)
    .then((res) => res.json())
    .then((comment) => {
      if (!comment.kids || comment.kids.length === 0) {
        resolve(comment)
        return
      }

      Promise.all(comment.kids.map((reply) => fetchComment(reply)))
        .then((kids) => resolve({ ...comment, ...{ kids } }))
    })
    .catch(() => reject())
})

export { getComments }
