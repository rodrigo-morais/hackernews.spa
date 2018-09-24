import { HN_API } from '../../constants'
import { requestComments, receiveComments, failComments } from './actions'

const getCommentsByStoryId = (storyId) => async (dispatch) => {
  const res = await fetch(`${HN_API}item/${storyId}.json`)
  const story = await res.json()

  return getComments(story.kids)(dispatch)
}

const getComments = (commentIds) => async (dispatch) => {
  dispatch(requestComments())
  try {
    const comments = await Promise.all(commentIds.map((commentId) => getComment(commentId)))

    dispatch(receiveComments(comments))
  } catch (err) {
    dispatch(failComments())
  }
}

const getComment = (commentId) => new Promise(async (resolve, reject) => {
  try {
    const res = await fetch(`${HN_API}item/${commentId}.json`)
    const comment = await res.json()

    if (!comment.kids || comment.kids.length === 0) {
      resolve(comment)
      return
    }

    const kids = await Promise.all(comment.kids.map((reply) => getComment(reply)))
    resolve({ ...comment, ...{ kids } })
  } catch (err) {
    reject()
  }
})


export { getComments, getCommentsByStoryId }
