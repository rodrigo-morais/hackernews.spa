import { getComments } from '../actionsCreator'
import commentsWorker from '../../../workers/comments.worker'

jest.mock('../../../workers/comments.worker', () => jest.fn().mockImplementation(() => ({
  postMessage: jest.fn(),
  onmessage: jest.fn(),
})))

describe('actionsCreator', () => {
  const commentIds = [1, 2, 3]
	const dispatch = jest.fn()

	afterEach(() => {
		dispatch.mockReset()
	})

  it('dispatch receiveComments', () => {
    expect.assertions(1)

    getComments(commentIds)(dispatch)

    expect(commentsWorker).toHaveBeenCalledTimes(1)
  })
})
