import { getComments } from '../actionsCreator'
import {
  requestComments,
  receiveComments,
  failComments,
} from '../actions'

describe('actionsCreator', () => {
  const commentsId = [1, 2, 3]
	const comments = [
		{ id: 1, title: 'First comment' },
		{ id: 2, title: 'Second comment' },
		{ id: 3, title: 'Third comment' },
	]
  const data = comments
	const dispatch = jest.fn()

	afterEach(() => {
		dispatch.mockReset()
		global.fetch.mockReset()
	})

	describe('comments success', () => {
    beforeEach(() => {
      global.fetch = jest.fn().mockImplementation((url) => {
        const comment = comments[parseInt(url.split('/').slice(-1)[0].replace('.json', ''), 10) - 1]
				return Promise.resolve({ ok: true, json: () => comment })
      })
    })

		it('dispatch receiveComments', async () => {
			expect.assertions(3)

			await getComments(commentsId)(dispatch)

      expect(dispatch).toHaveBeenCalledTimes(2)
      expect(dispatch).toHaveBeenNthCalledWith(1, requestComments())
      expect(dispatch).toHaveBeenLastCalledWith(receiveComments(data))
		})
	})

	describe('comments fail', () => {
    beforeEach(() => {
      global.fetch = jest.fn().mockImplementation(() => Promise.reject())
    })

		it('dispatch failComments', async () => {
			expect.assertions(3)

			await getComments(commentsId)(dispatch)

      expect(dispatch).toHaveBeenCalledTimes(2)
      expect(dispatch).toHaveBeenNthCalledWith(1, requestComments())
      expect(dispatch).toHaveBeenLastCalledWith(failComments())
		})
	})
})
