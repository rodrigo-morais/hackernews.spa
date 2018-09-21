import {
  REQUESTED_COMMENTS,
  RECEIVED_COMMENTS,
  FAILED_COMMENTS,
} from './constants'

export const requestComments = () => ({
  type: REQUESTED_COMMENTS,
})

export const receiveComments = (data) => ({
  type: RECEIVED_COMMENTS,
  data,
})

export const failComments = () => ({
  type: FAILED_COMMENTS,
})
