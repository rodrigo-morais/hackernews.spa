import { HN_API, HN_FIRST_PAGE, HN_NEXT_PAGE } from '../constants'

export const getTopStories = (postMessage) => fetch(`${HN_API}topstories.json`)
	.then((res) => res.json())
	.then((stories) => {
		const firstPage = stories.slice(0, 30).map((story) => fetch(`${HN_API}item/${story}.json`).then((res) => res.json()))
		return Promise.all(firstPage)
			.then((items) => {
				postMessage({ key: HN_FIRST_PAGE, data: items })

				const nextPage = stories.slice(30, 30).map((story) => fetch(`${HN_API}item/${story}.json`).then((res) => res.json()))
			return Promise.all(nextPage)
				.then((nextItems) => {
					postMessage({ key: HN_NEXT_PAGE, data: nextItems })
				})
		})
	})
