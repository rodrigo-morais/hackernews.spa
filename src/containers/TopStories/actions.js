import {
  REQUESTED_TOP_STORIES,
  RECEIVED_TOP_STORIES,
  RECEIVED_LAST_TOP_STORIES,
  FAILED_TOP_STORIES,
} from './constants'

export const requestTopStories = () => ({
  type: REQUESTED_TOP_STORIES,
})

export const receiveTopStories = (data) => ({
  type: RECEIVED_TOP_STORIES,
  data,
})

export const receiveLastTopStories = () => ({
  type: RECEIVED_LAST_TOP_STORIES,
  data: { last: true },
})

export const failTopStories = () => ({
  type: FAILED_TOP_STORIES,
})
