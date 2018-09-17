import {
    REQUESTED_TOP_STORIES,
    RECEIVED_TOP_STORIES,
    FAILED_TOP_STORIES,
} from '../constants'
import {
  requestTopStories,
  receiveTopStories,
  failTopStories,
} from '../actions'


describe('actions', () => {
  describe('requestTopStories', () => {
    it('returns REQUESTED_TOP_STORIES as type', () => {
      expect(requestTopStories().type).toBe(REQUESTED_TOP_STORIES)
    })
  })

  describe('receiveTopStories', () => {
    const stories = [{ title: 'First Story' }, { title: 'Second story' }]

    it('returns RECEIVED_TOP_STORIES as type', () => {
      expect(receiveTopStories(stories).type).toBe(RECEIVED_TOP_STORIES)
    })

    it('returns informed URLs as data', () => {
      expect(receiveTopStories(stories).data).toBe(stories)
    })
  })

  describe('failTopStories', () => {
    it('returns FAILED_TOP_STORIES as type', () => {
      expect(failTopStories().type).toBe(FAILED_TOP_STORIES)
    })
  })
})
