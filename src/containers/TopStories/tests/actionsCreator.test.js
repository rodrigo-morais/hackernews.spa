import { getTopStories } from '../actionsCreator'
import {
  requestTopStories,
  receiveTopStories,
  failTopStories,
} from '../actions'
import localStorage from '../../../lib/safeLocalStorage'

jest.mock('../../../lib/safeLocalStorage')
jest.mock('../../../workers/topStories.worker', () => class Worker {
	constructor(stringUrl) {
		this.url = stringUrl;
		this.onmessage = () => {};
	}

	postMessage() {
	}
})

describe('actionsCreator', () => {
	const stories = [
		{ id: 1, title: 'First story' },
		{ id: 2, title: 'Second story' },
		{ id: 3, title: 'Third story' },
	]
  const data = {
    page: 1,
    stories,
  }
	const dispatch = jest.fn()

	afterEach(() => {
		dispatch.mockReset()
		localStorage.get.mockClear()
	})

	describe('top stories success', () => {
		beforeEach(() => {
			localStorage.get.mockReturnValue(JSON.stringify(stories))
		})

		it('dispatch receiveTopStories', async () => {
			expect.assertions(3)

			await getTopStories()(dispatch)

				expect(dispatch).toHaveBeenCalledTimes(2)
				expect(dispatch).toHaveBeenNthCalledWith(1, requestTopStories())
				expect(dispatch).toHaveBeenLastCalledWith(receiveTopStories(data))
		})
	})

	describe('top stories are empty', () => {
		beforeEach(() => {
			localStorage.get.mockReturnValue(null)
		})

		it('dispatch only requestTopStories', async () => {
			expect.assertions(2)

			await getTopStories()(dispatch)

				expect(dispatch).toHaveBeenCalledTimes(1)
				expect(dispatch).toHaveBeenNthCalledWith(1, requestTopStories())
		})
	})

	describe('top stories fail', () => {
		beforeEach(() => {
			localStorage.get.mockImplementation(() => { throw new Error() })
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
