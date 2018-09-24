import { getComments, getCommentsByStoryId } from '../actionsCreator'
import {
  requestComments,
  receiveComments,
  failComments,
} from '../actions'

describe('actionsCreator', () => {
	const commentIds = Array.from(new Array(60), (val, index) => index + 1)
	const comments = Array.from(new Array(60), (val, index) => index + 1).map((id) => ({
		id,
		text: `Text ${id}`,
	}))
	const dispatch = jest.fn()

	afterEach(() => {
		dispatch.mockReset()
    global.fetch.mockReset()
	})

  describe('getComments', () => {
    describe('get comments with success', () => {
      beforeEach(() => {
        global.fetch = jest.fn().mockImplementation((url) => {
          const comment = comments[parseInt(url.split('/').slice(-1)[0].replace('.json', ''), 10) - 1]

          return Promise.resolve({ ok: true, json: () => comment })
        })
      })

      it('dispatch receiveComments', async () => {
        expect.assertions(3)

        await getComments(commentIds)(dispatch)

				expect(dispatch).toHaveBeenCalledTimes(2)
				expect(dispatch).toHaveBeenNthCalledWith(1, requestComments())
				expect(dispatch).toHaveBeenLastCalledWith(receiveComments(comments))
      })
    })

    describe('get comments with fail', () => {
      beforeEach(() => {
        global.fetch = jest.fn().mockImplementation(() => Promise.reject())
      })

      it('dispatch failComments', async () => {
        expect.assertions(3)

        await getComments(commentIds)(dispatch)

				expect(dispatch).toHaveBeenCalledTimes(2)
				expect(dispatch).toHaveBeenNthCalledWith(1, requestComments())
				expect(dispatch).toHaveBeenLastCalledWith(failComments())
      })
    })
  })

  describe('getCommentsByStoryId', () => {
    let fetchCalls = 0

    describe('get comments with success', () => {
      beforeEach(() => {
        global.fetch = jest.fn().mockImplementation((url) => {
          fetchCalls += 1
          if (fetchCalls === 1) {
            return Promise.resolve({ ok: true, json: () => ({ kids: commentIds }) })
          }

          const comment = comments[parseInt(url.split('/').slice(-1)[0].replace('.json', ''), 10) - 1]

          return Promise.resolve({ ok: true, json: () => comment })
        })
      })

      it('dispatch receiveComments', async () => {
        expect.assertions(3)

        await getCommentsByStoryId(commentIds)(dispatch)

				expect(dispatch).toHaveBeenCalledTimes(2)
				expect(dispatch).toHaveBeenNthCalledWith(1, requestComments())
				expect(dispatch).toHaveBeenLastCalledWith(receiveComments(comments))
      })
    })

    describe('get comments with fail', () => {
      beforeEach(() => {
        global.fetch = jest.fn().mockImplementation(() => {
          fetchCalls += 1
          if (fetchCalls === 1) {
            return Promise.resolve({ ok: true, json: () => ({ kids: commentIds }) })
          }

          return Promise.reject()
        })
      })

      xit('dispatch failComments', async () => {
        expect.assertions(3)

        await getCommentsByStoryId(commentIds)(dispatch)

				expect(dispatch).toHaveBeenCalledTimes(2)
				expect(dispatch).toHaveBeenNthCalledWith(1, requestComments())
				expect(dispatch).toHaveBeenLastCalledWith(failComments())
      })
    })
  })
})
