import { HN_API } from '../../constants'
import { requestComments, receiveComments, failComments } from './actions'

const getComments = (commentIds) => async (dispatch) => {
  try {
    dispatch(requestComments())
    const comments = await Promise.all(commentIds.map((commentId) => fetchComment(commentId)))
    dispatch(receiveComments(comments))
  } catch (err) {
    dispatch(failComments())
  }
}

const fetchComment = (commentId) => new Promise(async (resolve, reject) => {
  try {
    const res = await fetch(`${HN_API}item/${commentId}.json`)
    const comment = await res.json()

    if (!comment.kids || comment.kids.length === 0) {
      resolve(comment)
      return
    }

    const kids = await Promise.all(comment.kids.map((reply) => fetchComment(reply)))
    resolve({ ...comment, ...{ kids } })
  } catch (err) {
    reject()
  }
})

export { getComments }
