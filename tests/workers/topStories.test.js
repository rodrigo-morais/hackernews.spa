import { getTopStories } from '../../src/workers/topStories'
import { HN_FIRST_PAGE, HN_NEXT_PAGE } from '../../src/constants'

describe('topStories worker', () => {
	const topStories = [1, 2, 3]
	const stories = [
		{ id: 1, title: 'First story' },
		{ id: 2, title: 'Second story' },
		{ id: 3, title: 'Third story' },
	]
	const postMessage = jest.fn()

	afterEach(() => {
		postMessage.mockReset()
		global.fetch.mockReset()
	})

	describe('top stories success', () => {
		describe('first page returns success', () => {
			beforeEach(() => {
				global.fetch = jest.fn().mockImplementation((url) => {
					if (url.includes('topstories.json')) {
						return Promise.resolve({ ok: true, json: () => topStories })
					}

					const story = stories[parseInt(url.split('/').slice(-1)[0].replace('.json', ''), 10) - 1]
					return Promise.resolve({ ok: true, json: () => story })
				})
			})

			it('calls postMessage', async () => {
				expect.assertions(3)

				await getTopStories(postMessage)

				expect(postMessage).toHaveBeenCalledTimes(2)
				expect(postMessage).toHaveBeenNthCalledWith(1, { key: HN_FIRST_PAGE, data: stories })
				expect(postMessage).toHaveBeenLastCalledWith({ key: HN_NEXT_PAGE, data: [] })
			})
		})
	})
})
