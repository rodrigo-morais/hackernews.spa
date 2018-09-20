import { HN_FIRST_PAGE, HN_NEXT_PAGE, HN_PAGE } from '../../constants'
import localStorage from '../../lib/safeLocalStorage'
import { requestTopStories, receiveTopStories, receiveLastTopStories, failTopStories } from './actions'
import TopStoriesWorker from '../../workers/topStories.worker'

const topStoriesWorker = new TopStoriesWorker()
let globalDispatch
let timeoutID

topStoriesWorker.onmessage = (e) => {
	if (!localStorage.get(HN_FIRST_PAGE)) {
		globalDispatch(receiveTopStories({ stories: e.data.data, page: e.data.page }))
	}
	localStorage.set(e.data.key, JSON.stringify(e.data.data))

  if (e.data.key === HN_NEXT_PAGE && e.data.data.length === 0) {
		globalDispatch(receiveLastTopStories())
  }

	if (e.data.page) {
		localStorage.set(HN_PAGE, e.data.page)
	}

	if (timeoutID) {
		clearTimeout(timeoutID)
	}
	timeoutID = setTimeout(() => topStoriesWorker.postMessage(null), 3 * 60 * 1000)
}

const getTopStories = () => (dispatch) => {
	globalDispatch = dispatch
	topStoriesWorker.postMessage(1)

  dispatch(requestTopStories())
	try {
		const stories = localStorage.get(HN_FIRST_PAGE)
		if (stories) {
			dispatch(receiveTopStories({ stories: JSON.parse(stories), page: 1 }))
		}
	} catch (e) {
		dispatch(failTopStories())
	}
}

const getNextTopStories = () => (dispatch) => {
  dispatch(requestTopStories())
	try {
		const stories = localStorage.get(HN_NEXT_PAGE)
    const page = parseInt(localStorage.get(HN_PAGE), 10) + 1
		dispatch(receiveTopStories({ stories: JSON.parse(stories), page }))
		topStoriesWorker.postMessage(page)
	} catch (e) {
		dispatch(failTopStories())
	}
}

export { getTopStories, getNextTopStories }
