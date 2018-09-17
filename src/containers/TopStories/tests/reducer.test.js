import {
  REQUESTED_TOP_STORIES,
  RECEIVED_TOP_STORIES,
  FAILED_TOP_STORIES,
} from '../constants'
import topStoriesReducer from '../reducer'

const initialState = {
	data: null,
	loading: false,
	error: false,
}

const data = [
	{ id: 1, title: 'First story' },
	{ id: 2, title: 'Second story' },
	{ id: 3, title: 'Third story' },
]

describe('reducer', () => {
	describe('REQUESTED_TOP_STORIES', () => {
		it('returns loading as true, error as false and data as null', () => {
			const result = topStoriesReducer(initialState, { type: REQUESTED_TOP_STORIES })

			expect(result.loading).toBe(true)
			expect(result.error).toBe(false)
			expect(result.data).toBe(null)
		})
	})

	describe('RECEIVED_TOP_STORIES', () => {
		it('returns loading as false, error as false and data as action.data', () => {
			const result = topStoriesReducer(initialState, { type: RECEIVED_TOP_STORIES, data })

			expect(result.loading).toBe(false)
			expect(result.error).toBe(false)
			expect(result.data).toBe(data)
		})
	})

	describe('FAILED_TOP_STORIES', () => {
		it('returns loading as false, error as true and data as null', () => {
			const result = topStoriesReducer(initialState, { type: FAILED_TOP_STORIES })

			expect(result.loading).toBe(false)
			expect(result.error).toBe(true)
			expect(result.data).toBe(null)
		})
	})
})
