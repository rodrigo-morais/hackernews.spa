import { getComments } from '../../src/workers/comments'

describe('comments worker', () => {
	const commentIds = Array.from(new Array(60), (val, index) => index + 1)
	const comments = Array.from(new Array(60), (val, index) => index + 1).map((id) => ({
		id,
		text: `Text ${id}`,
	}))
	const postMessage = jest.fn()

	afterEach(() => {
		postMessage.mockReset()
		global.fetch.mockReset()
	})

	describe('comments success', () => {
		describe('worker returns success', () => {
			beforeEach(() => {
				global.fetch = jest.fn().mockImplementation((url) => {
					const comment = comments[parseInt(url.split('/').slice(-1)[0].replace('.json', ''), 10) - 1]

					return Promise.resolve({ ok: true, json: () => comment })
        })
			})

			it('calls postMessage', async () => {
				expect.assertions(2)

				await getComments({ commentIds, all: false }, postMessage)

				expect(postMessage).toHaveBeenCalledTimes(1)
				expect(postMessage).toHaveBeenNthCalledWith(1, { comments: comments.slice(0, 3), ids: commentIds, all: false })
			})
		})
	})
})
