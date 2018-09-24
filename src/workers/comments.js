import { HN_API } from '../constants'

const getComments = async (data, postMessage) => {
  const ids = !!data.all ? data.commentIds : data.commentIds.slice(0, 3)
  const comments = await Promise.all(ids.map((commentId) => getComment(commentId)))
  postMessage({ comments, ids: data.commentIds, all: data.all })
}

export const getComment = (commentId) => new Promise(async (resolve, reject) => {
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

export { getComments }
