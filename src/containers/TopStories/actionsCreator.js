import { requestTopStories, receiveTopStories, failTopStories } from './actions'

const HN_API = 'https://hacker-news.firebaseio.com/v0/'

const getTopStories = () => (dispatch) => {
  dispatch(requestTopStories())
	return fetch(`${HN_API}topstories.json`)
		.then((res) => res.json())
		.then((stories) => {
			const firstPage = stories.slice(0, 30).map((story) => fetch(`${HN_API}item/${story}.json`).then((res) => res.json()))
			return Promise.all(firstPage)
				.then((items) => dispatch(receiveTopStories(items)))
		})
		.catch((err) => {
			console.log(`Fetching news stories failed: ${err}`)
			dispatch(failTopStories())
		})
}

export { getTopStories }
