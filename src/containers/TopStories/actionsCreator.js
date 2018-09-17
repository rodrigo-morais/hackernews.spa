import { HN_FIRST_PAGE } from '../../constants'
import localStorage from '../../lib/safeLocalStorage'
import { requestTopStories, receiveTopStories, failTopStories } from './actions'
import TopStoriesWorker from '../../workers/topStories.worker'

const topStoriesWorker = new TopStoriesWorker()
let globalDispatch
let timeoutID

topStoriesWorker.onmessage = (e) => {
	if (!localStorage.get(HN_FIRST_PAGE)) {
		globalDispatch(receiveTopStories(e.data.data))
	}
	localStorage.set(e.data.key, JSON.stringify(e.data.data))

	if (timeoutID) {
		clearTimeout(timeoutID)
	}
	timeoutID = setTimeout(() => topStoriesWorker.postMessage(null), 3 * 60 * 10)
}

const getTopStories = () => (dispatch) => {
	globalDispatch = dispatch
	topStoriesWorker.postMessage(null)

  dispatch(requestTopStories())
	try {
		const stories = localStorage.get(HN_FIRST_PAGE)
		if (stories) {
			dispatch(receiveTopStories(JSON.parse(stories)))
		}
	} catch (e) {
		dispatch(failTopStories())
	}
}

export { getTopStories }
