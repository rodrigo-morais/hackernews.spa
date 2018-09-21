import {
    REQUESTED_COMMENTS,
    RECEIVED_COMMENTS,
    FAILED_COMMENTS,
} from '../constants'
import {
  requestComments,
  receiveComments,
  failComments,
} from '../actions'


describe('actions', () => {
  describe('requestComments', () => {
    it('returns REQUESTED_COMMENTS as type', () => {
      expect(requestComments().type).toBe(REQUESTED_COMMENTS)
    })
  })

  describe('receiveComments', () => {
    const comments = [{ title: 'First Comment' }, { title: 'Second Comment' }]

    it('returns RECEIVED_COMMENTS as type', () => {
      expect(receiveComments(comments).type).toBe(RECEIVED_COMMENTS)
    })

    it('returns informed URLs as data', () => {
      expect(receiveComments(comments).data).toBe(comments)
    })
  })

  describe('failComments', () => {
    it('returns FAILED_COMMENTS as type', () => {
      expect(failComments().type).toBe(FAILED_COMMENTS)
    })
  })
})
