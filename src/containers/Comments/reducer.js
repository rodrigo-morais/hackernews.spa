import {
  REQUESTED_COMMENTS,
  RECEIVED_COMMENTS,
  FAILED_COMMENTS,
} from './constants'

const initialState = {
	data: null,
	loading: false,
	error: false,
}

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUESTED_COMMENTS:
      return { ...state, ...{ loading: true, error: false, data: null } }

    case RECEIVED_COMMENTS:
      return { ...state, ...{ loading: false, data: action.data, error: false } }

    case FAILED_COMMENTS:
      return { ...state, ...{ loading: false, error: true, data: null } }

    default:
      return state
  }
}

export default commentsReducer
