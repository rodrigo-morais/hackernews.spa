import { getTopStories } from '../actionsCreator'
import {
  requestTopStories,
  receiveTopStories,
  failTopStories,
} from '../actions'

describe('actionsCreator', () => {
	const topStories = [1, 2, 3]
	const stories = [
		{ id: 1, title: 'First story' },
		{ id: 2, title: 'Second story' },
		{ id: 3, title: 'Third story' },
	]
	const dispatch = jest.fn()

	afterEach(() => {
		dispatch.mockReset()
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

			it('dispatch receiveTopStories', async () => {
				expect.assertions(3)

				await getTopStories()(dispatch)

					expect(dispatch).toHaveBeenCalledTimes(2)
					expect(dispatch).toHaveBeenNthCalledWith(1, requestTopStories())
				expect(dispatch).toHaveBeenLastCalledWith(receiveTopStories(stories))
			})
		})

		describe('first page returns fail', () => {
			beforeEach(() => {
				global.fetch = jest.fn().mockImplementation((url) => {
					if (url.includes('topstories.json')) {
						return Promise.resolve({ ok: true, json: () => topStories })
					}

					return Promise.reject()
				})
			})

			it('dispatch failTopStories', async () => {
				expect.assertions(3)

				await getTopStories()(dispatch)

					expect(dispatch).toHaveBeenCalledTimes(2)
					expect(dispatch).toHaveBeenNthCalledWith(1, requestTopStories())
				expect(dispatch).toHaveBeenLastCalledWith(failTopStories(stories))
			})
		})
	})

	describe('top stories fail', () => {
		beforeEach(() => {
			global.fetch = jest.fn().mockImplementation(() => Promise.reject())
		})

		it('dispatch failTopStories', async () => {
			expect.assertions(3)

			await getTopStories()(dispatch)

				expect(dispatch).toHaveBeenCalledTimes(2)
				expect(dispatch).toHaveBeenNthCalledWith(1, requestTopStories())
				expect(dispatch).toHaveBeenLastCalledWith(failTopStories())
		})
	})
})
