import {
  REQUESTED_COMMENTS,
  RECEIVED_COMMENTS,
  FAILED_COMMENTS,
} from '../constants'
import commentsReducer from '../reducer'

const initialState = {
	data: null,
	loading: false,
	error: false,
}

const data = [
	{ id: 1, title: 'First comment' },
	{ id: 2, title: 'Second comment' },
	{ id: 3, title: 'Third comment' },
]

describe('reducer', () => {
	describe('REQUESTED_COMMENTS', () => {
		it('returns loading as true, error as false and data as null', () => {
			const result = commentsReducer(initialState, { type: REQUESTED_COMMENTS })

			expect(result.loading).toBe(true)
			expect(result.error).toBe(false)
			expect(result.data).toBe(null)
		})
	})

	describe('RECEIVED_COMMENTS', () => {
		it('returns loading as false, error as false and data as action.data', () => {
			const result = commentsReducer(initialState, { type: RECEIVED_COMMENTS, data })

			expect(result.loading).toBe(false)
			expect(result.error).toBe(false)
			expect(result.data).toBe(data)
		})
	})

	describe('FAILED_COMMENTS', () => {
		it('returns loading as false, error as true and data as null', () => {
			const result = commentsReducer(initialState, { type: FAILED_COMMENTS })

			expect(result.loading).toBe(false)
			expect(result.error).toBe(true)
			expect(result.data).toBe(null)
		})
	})
})
