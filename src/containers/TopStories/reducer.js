import {
  REQUESTED_TOP_STORIES,
  RECEIVED_TOP_STORIES,
  FAILED_TOP_STORIES,
} from './constants'

const initialState = {
	data: null,
	loading: false,
	error: false,
}

const topStoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUESTED_TOP_STORIES:
      return { ...state, ...{ loading: true, error: false, data: null } }

    case RECEIVED_TOP_STORIES:
      return { ...state, ...{ loading: false, data: action.data, error: false } }

    case FAILED_TOP_STORIES:
      return { ...state, ...{ loading: false, error: true, data: null } }

    default:
      return state
  }
}

export default topStoriesReducer
