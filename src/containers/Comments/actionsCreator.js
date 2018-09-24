import { requestComments, receiveComments, failComments } from './actions'
import CommentsWorker from '../../workers/comments.worker'

const commentsWorker = new CommentsWorker()
let globalDispatch

commentsWorker.onmessage = (e) => {
  globalDispatch(requestComments())
  try {
    globalDispatch(receiveComments(e.data.comments))

    if (!e.data.all) {
      commentsWorker.postMessage({ commentIds: e.data.ids, all: true })
    }
  } catch (err) {
    globalDispatch(failComments())
  }
}

const getComments = (commentIds) => (dispatch) => {
	globalDispatch = dispatch

  commentsWorker.postMessage({ commentIds })
}

export { getComments }
